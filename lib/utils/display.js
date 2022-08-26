const { format } = require('util')
const chalk = require('chalk')
const { explain } = require('./explain-eresolve.js')

const levels = [
  'silly',
  'verbose',
  'info',
  'timing',
  'http',
  'notice',
  'warn',
  'error',
  'silent',
]

const levelMap = new Map(levels.reduce((set, level, index) => {
  set.push([level, index], [index, level])
  return set
}, []))

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

const levelLabels = {
  silly: 'sill',
  verbose: 'verb',
  warn: 'WARN',
  error: 'ERR!',
}

const _logHandler = Symbol('logHandler')
const _boundLogHandler = Symbol('boundLogHandler')
const _buffer = Symbol('buffer')
const _write = Symbol('write')
const _paused = Symbol('paused')
const _pause = Symbol('pause')
const _resume = Symbol('resume')

module.exports = class Display {
  constructor () {
    this[_boundLogHandler] = this[_logHandler].bind(this)
    this[_buffer] = []
    this[_paused] = true
    process.on('log', this[_boundLogHandler])
  }

  reset () {
    process.off('log', this[_boundLogHandler])
  }

  setConfig (options) {
    const {
      color,
      timing,
      loglevel,
      heading,
      unicode,
    } = options

    this.color = color
    this.colors = color ? colors : Object.keys(colors).reduce((acc, key) => {
      acc[key] = (s) => s
      return acc
    })

    this.heading = heading
    this.unicode = unicode
    this.showTiming = timing
    this.level = loglevel

    this[_resume]()
  }

  [_pause] () {
    this[_paused] = true
  }

  [_resume] () {
    this[_paused] = false
    this[_buffer].forEach((m) => {
      this[_logHandler](...m)
    })
    this[_buffer] = []
  }

  [_write] (level, prefix, ...args) {
    const writeHeading = this.heading && this.colors.heading(this.heading)
    const writePrefix = prefix && this.colors.prefix(prefix)
    const writeLevel = this.colors[level](levelLabels[level] || level)

    format(...args).trim().split(/\r?\n/).forEach((line) => {
      const writeArgs = [writeHeading, writePrefix, writeLevel, line]
      console.error(...writeArgs.filter(Boolean))
    })
  }

  [_logHandler] (level, ...args) {
    if (level === 'pause') {
      this[_pause]()
      return
    }

    if (level === 'resume') {
      this[_resume]()
      return
    }

    if (this[_paused]) {
      this[_buffer].push([level, ...args])
      return
    }

    if (levelMap.get(level) < levelMap.get(this.level))
      return

    // Also (and this is a really inexcusable kludge), we patch the
    // log.warn() method so that when we see a peerDep override
    // explanation from Arborist, we can replace the object with a
    // highly abbreviated explanation of what's being overridden.
    if (level === 'warn' && args[0] === 'ERESOLVE' && args[1] && typeof args[1] === 'object') {
      this[_write](level, args[0], args[1])
      this[_write](level, '', explain(args[1], this.color, 2))
      return
    }

    this[_write](level, ...args)
  }

  log (...args) {
    this[_write](...args)
  }

  timing (...args) {
    if (this.showTiming)
      this.log('timing', ...args)
  }

  output (...args) {
    // this.log.clearProgress() // TODO(display): proggy
    console.log(...args)
    // this.log.showProgress() // TODO(display): proggy
  }

  outputError (...args) {
    console.error(...args)
  }
}
