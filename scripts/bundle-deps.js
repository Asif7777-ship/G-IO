#!/usr/bin/env node

const PackageJson = require('@npmcli/package-json')
const { resolve } = require('path')
const localeCompare = require('@isaacs/string-locale-compare')('en')

const main = async (dir) => {
  const pkg = await PackageJson.load(dir)

  pkg.update({
    bundleDependencies: Object.keys(pkg.content.dependencies).sort(localeCompare),
  })

  await pkg.save()

  return pkg.content.bundleDependencies
}

main(resolve(__dirname, '..'))
  .then((res) => console.log(res.join('\n')))
  .catch((err) => {
    process.exitCode = 1
    console.error(err)
  })
