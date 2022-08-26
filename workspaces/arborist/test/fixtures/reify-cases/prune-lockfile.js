// generated from test/fixtures/prune-lockfile
module.exports = t => {
  const path = t.testdir({
  "package-lock.json": JSON.stringify({
    "name": "prune-actual",
    "version": "1.0.0",
    "lockfileVersion": 2,
    "requires": true,
    "packages": {
      "": {
        "version": "1.0.0"
      },
      "node_modules/abbrev": {
        "version": "1.1.1",
        "extraneous": true
      }
    },
    "dependencies": {
      "abbrev": {
        "version": "1.1.1",
        "extraneous": true
      }
    }
  }),
  "package.json": JSON.stringify({
    "name": "prune-actual",
    "version": "1.0.0"
  })
})
  return path
}
