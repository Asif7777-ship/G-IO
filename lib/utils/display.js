const { format, inspect } = require('util')
const chalk = require('chalk')
const proggy = require('proggy')
const { explain } = require('./explain-eresolve.js')
const { loglevel: {
  type: loglevels,
  default: defaultLevel,
} } = require('./utils/config/definitions.js')

const _logHandler = Symbol('logHandler')
const _eresolveWarn = Symbol('eresolveWarn')
const _log = Symbol('log')
const _write = Symbol('write')

// the levels from proc-log sorted asc from loudest to quietest.
// creates keys by level name and index for comparing if a
// message should be displayed. to check if a message should
// be shown we do:
// const showMessage = levels.get(messageLevel) <= levels.get(configLevel)
const levels = new Map(loglevels.reduce((set, level, index) => {
  set.push([level, index], [index, level])
  return set
}, []))

const labels = {
  silly: 'sill',
  verbose: 'verb',
  warn: 'WARN',
  error: 'ERR!',
}

const getColors = (c) => {
  const colors = {
    heading: chalk.white.bgBlack,
    prefix: chalk.magenta,
    silly: chalk.inverse,
    verbose: chalk.blue.bgBlack,
    info: chalk.green,
    timing: chalk.green.bgBlack,
    http: chalk.green.bgBlack,
    notice: chalk.blue.bgBlack,
    warn: chalk.black.bgYellow,
    error: chalk.red.bgBlack,
  }

  return c ? colors : Object.keys(colors).reduce((acc, key) => {
    acc[key] = (s) => s
    return acc
  })
}

class Display {
  // pause by default until config is loaded
  #paused = true
  #buffer = []

  #level = null
  #color = false
  #timing = false
  #unicode = false
  #progress = false
  #heading = 'npm'

  #colors = null

  constructor () {
    this.on()
  }

  on () {
    process.on('log', this[_logHandler])
    this.progress = proggy.createClient()

    this.progress.on('progress', (name, { value, total }) => {
      // this[_write]('progress', name, (value / total).toFixed())
    })
  }

  off () {
    process.off('log', this[_logHandler])
  }

  load ({ loglevel, ...opts }) {
    const silent = loglevel === 'silent'

    this.#level = loglevel
    this.#color = opts.color
    this.#colors = getColors(this.#color)
    this.#timing = opts.timing
    this.#unicode = opts.unicode
    this.#progress = opts.progress && !silent
    this.#heading = opts.heading || 'npm'

    // proc log does not have a timing leve so to avoid this being
    // a breaking change before npm9, we need to change the loglevel
    // in some cases when timing mode is turned on to match npmlog behavior.
    // XXX(npm9): remove this and make timing independent of loglevel
    // new behavior should be timing logs are always shown if timing=true
    // except when loglevel is silent
    if (levels.get(this.#level) >= levels.get('timing')) {
      this.#timing = true
      if (this.#level === 'timing') {
        this.#level = 'info'
      }
    } else if (this.#timing && this.#level === defaultLevel) {
      this.#level = 'http'
    }
  }

  log (...args) {
    this[_logHandler](...args)
  }

  [_write] (level, prefix, ...args) {
    if (level === 'pause') {
      this.#paused = true
    } else if (level === 'resume') {
      this.#paused = false
      this.#buffer.forEach((item) => this[_write](...item))
      this.#buffer.length = 0
    } else if (
      (level === 'timing' && this.#timing) ||
      (levels.get(level) <= levels.get(this.#level))
    ) {
      const writeHeading = this.#heading && this.#colors.heading(this.heading)
      const writeLevel = this.#colors[level](labels[level] || level)
      const writePrefix = prefix && this.#colors.prefix(prefix)

      format(...args).trim().split(/\r?\n/).forEach((line) => {
        const writeArgs = [
          writeHeading,
          writeLevel,
          writePrefix,
          line,
        ]
        process.stderr.write(writeArgs.filter(Boolean).join(' ') + '\n')
      })
    }
  }

  [_logHandler] = (level, ...args) => {
    try {
      this[_log](level, ...args)
    } catch (ex) {
      try {
        // if it crashed once, it might again!
        this[_write]('verbose', `attempt to log ${inspect(args)} crashed`, ex)
      } catch (ex2) {
        // eslint-disable-next-line no-console
        console.error(`attempt to log ${inspect(args)} crashed again`, ex, ex2)
      }
    }
  }

  [_log] (...args) {
    return this[_eresolveWarn](...args) || this[_write](...args)
  }

  // Also (and this is a really inexcusable kludge), we patch the
  // log.warn() method so that when we see a peerDep override
  // explanation from Arborist, we can replace the object with a
  // highly abbreviated explanation of what's being overridden.
  [_eresolveWarn] (level, heading, message, expl) {
    if (level === 'warn' &&
        heading === 'ERESOLVE' &&
        expl && typeof expl === 'object'
    ) {
      this[_write](level, heading, message)
      this[_write](level, '', explain(expl, this.#color, 2))
      // Return true to short circuit other log in chain
      return true
    }
  }
}

module.exports = Display
