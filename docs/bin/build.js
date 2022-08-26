const { resolve, join } = require('path')
const run = require('../lib/build.js')

const rootDir = resolve(__dirname, '..')

run({
  verify: true,
  content: join(rootDir, 'lib', 'content'),
  template: join(rootDir, 'lib', 'template.html'),
  nav: join(rootDir, 'nav.yml'),
  man: resolve(rootDir, '..', 'man'),
  html: join(rootDir, 'output'),
  md: join(rootDir, 'content'),
})
  .then((res) => {
    console.log(`Wrote ${res.length} files`)
  })
  .catch((err) => {
    process.exitCode = 1
    console.error(err)
  })
