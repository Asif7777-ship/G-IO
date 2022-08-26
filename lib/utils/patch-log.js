// Also (and this is a really inexcusable kludge), we patch the
// log.warn() method so that when we see a peerDep override
// explanation from Arborist, we can replace the object with a
// highly abbreviated explanation of what's being overridden.
const log = require('proc-log')
const { explain } = require('./explain-eresolve.js')

module.exports = (config) => {
  const color = config.get('color')

  const { warn } = log

  const stdoutTTY = process.stdout.isTTY

  const enableColorStdout = color === 'always' ? true
    : color === false ? false
    : stdoutTTY

  log.warn = (heading, ...args) => {
    if (heading === 'ERESOLVE' && args[1] && typeof args[1] === 'object') {
      warn(heading, args[0])
      return warn('', explain(args[1], enableColorStdout, 2))
    }
    return warn(heading, ...args)
  }
}
