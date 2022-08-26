const { basename } = require('path')
const { definitions, shorthands, describeAll } = require('../../lib/utils/config/index.js')
const { aliases } = require('../../lib/utils/cmd-list')
const { version } = require('../../lib/npm.js')

const describeParams = (params) => params.map((name) => definitions[name].describe())

const getCommandByDoc = (docFile, docExt) => {
  // Grab the command name from the *.md filename
  // NOTE: We cannot use the name property command file because in the case of
  // `npx` the file being used is `lib/commands/exec.js`
  const name = basename(docFile, docExt).replace('npm-', '')

  if (name === 'npm') {
    return {
      name,
      params: null,
      usage: 'npm',
    }
  }

  // special case for `npx`:
  // `npx` is not technically a command in and of itself,
  // so it just needs the usage of npm exex
  const srcName = name === 'npx' ? 'exec' : name
  const { params, usage = [''] } = require(`../../lib/commands/${srcName}`)
  const usagePrefix = name === 'npx' ? 'npx' : `npm ${name}`

  return {
    name,
    params: name === 'npx' ? null : params,
    usage: usage.map(u => `${usagePrefix} ${u}`.trim()).join('\n'),
  }
}

module.exports = {
  definitions,
  shorthands,
  aliases,
  version,
  describeParams,
  describeAll,
  getCommandByDoc,
}
