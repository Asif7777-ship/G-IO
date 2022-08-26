#!/usr/bin/env node

const Arborist = require('@npmcli/arborist')
const assert = require('assert')
const { resolve, join, relative } = require('path')
const localeCompare = require('@isaacs/string-locale-compare')('en')
const fs = require('fs').promises

const uniq = (items) => [...new Set(items)]

const alwaysIgnore = `.bin/
.cache/
package-lock.json
CHANGELOG*
changelog*
ChangeLog*
Changelog*
README*
readme*
Readme*
ReadMe*
__pycache__
.editorconfig
.idea/
.npmignore
.eslintrc*
.travis*
.github
.jscsrc
.nycrc
.istanbul*
.eslintignore
.jshintrc*
.prettierrc*
.jscs.json
.dir-locals*
.coveralls*
.babelrc*
.nyc_output
.gitkeep`

/*
This file sets what is checked in to node_modules. The root .gitignore file
includes node_modules and this file writes an ignore file to
node_modules/.gitignore. We ignore everything and then use a query to find all
the bundled deps and allow each one of those explicitly.

Since node_modules can be nested we have to process each portion of the path and
allow it while also ignoring everything inside of it, with the exception of a
deps source. We have to do this since everything is ignored by default, and git
will not allow a nested path if its parent has not also been allowed. BUT! We
also have to ignore other things in those directories.
*/

const main = async (path) => {
  const nm = resolve(path, 'node_modules')

  const arb = new Arborist({ path })
  const tree = await arb.loadActual()
  const bundled = await tree
    .querySelectorAll(':root > .bundled, :root > .bundled *')

  const allowedPaths = bundled
    // make it relative to node_modules since that is where the ignore file is going
    .map(n => relative(nm, n.location))
    .sort(localeCompare)
    .flatMap((n) => depPathToIgnores(n.split('/')))

  const ignoreData = [
    '# Ignore everything by default except this file',
    '/*',
    '!/.gitignore',
    '# Allow all bundled deps',
    // Make this unique one more time since our logic above for allowing nested
    // deps might have reincluded some dupes. Do not sort this again though
    // since the order matters now for ignoring and reallowing
    ...uniq(allowedPaths),
    '# Ignore some specific patterns within any allowed package',
    ...alwaysIgnore.split('\n'),
  ]

  await fs.writeFile(join(nm, '.gitignore'), ignoreData.join('\n'))
  return ignoreData
}

const depPathToIgnores = (_pathSegments, _rootSegments = []) => {
  const ignores = []

  // This holds all the internal state. This state and the logic
  // below are separated to making this confusing process (hopefull)
  // easier to understand.
  const segments = (() => {
    const internalSegments = [..._pathSegments]
    const usedSegments = [..._rootSegments]

    return {
      get next () {
        return internalSegments[0]
      },
      get remaining () {
        return internalSegments
      },
      get used () {
        return usedSegments
      },
      use () {
        const segment = internalSegments.shift()
        usedSegments.push(segment)
        return segment
      },
      allowDirAndContents (useNextSegment = true) {
        if (useNextSegment) {
          this.use()
        }
        // Allow a previously ignored directy
        return [`!/${this.used.join('/')}/`]
      },
      allowDirOnly (useNextSegment = true) {
        if (useNextSegment) {
          this.use()
        }
        // Allow a previously ignored directory but ignore everything inside
        return [...this.allowDirAndContents(false), `/${this.used.join('/')}/*`]
      },
    }
  })()

  if (segments.next) {
    // 1) Process scope segment of the path, if it has one
    if (segments.next.startsWith('@')) {
      // For scoped deps we need to allow the entire scope dir
      // due to how gitignore works. Without this the gitignore will
      // never look to allow our bundled dep since the scope dir was ignored.
      // It ends up looking like this for `@colors/colors`:
      //
      // # Allow @colors dir
      // !/@colors/
      // # Ignore everything inside. This is safe because there is
      // # nothing inside a scope except other packages
      // !/colors/*
      //
      // Then later we will allow the specific dep inside that scope.
      // This way if a scope includes bundled AND unbundled deps,
      // we only allow the bundled ones.
      ignores.push(...segments.allowDirOnly())
    }

    // 2) Now we process the name segment of the path
    // and allow the dir and everything inside of it (like source code, etc)
    ignores.push(...segments.allowDirAndContents())

    // If we still have remaining segments...
    if (segments.next) {
      // The next segment will be a nested node_modules directory.
      // If it's not something has gone wrong
      assert(
        segments.use() === 'node_modules',
        'Next path segment was not node_modules as expected'
      )

      ignores.push(
        // Allow node_modules and ignore everything inside of it
        // Set false here since we already "used" the node_modules path segment
        ...segments.allowDirOnly(false),
        // Redo the process with the remaining path segments to include whatever is left
        ...depPathToIgnores(segments.remaining, segments.used)
      )
    }
  }

  return ignores
}

main(resolve(__dirname, '..'))
  .then((res) => console.log(res.join('\n')))
  .catch((err) => {
    process.exitCode = 1
    console.error(err)
  })
