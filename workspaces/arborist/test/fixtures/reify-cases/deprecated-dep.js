// generated from test/fixtures/deprecated-dep
module.exports = t => {
  const path = t.testdir({
  "package-lock.json": JSON.stringify({
    "requires": true,
    "lockfileVersion": 1,
    "dependencies": {
      "minimist": {
        "version": "0.0.8",
        "resolved": "https://registry.npmjs.org/minimist/-/minimist-0.0.8.tgz",
        "integrity": "sha1-hX/Kv8M5fSYluCKCYuhqp6ARsF0="
      },
      "mkdirp": {
        "version": "0.5.1",
        "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.1.tgz",
        "integrity": "sha1-MAV0OOrGz3+MR2fzhkjWaX11yQM=",
        "requires": {
          "minimist": "0.0.8"
        }
      }
    }
  }),
  "package.json": JSON.stringify({
    "dependencies": {
      "mkdirp": "^0.5.1 <0.5.4"
    }
  })
})
  return path
}
