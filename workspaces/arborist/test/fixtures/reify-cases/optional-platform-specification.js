// generated from test/fixtures/optional-platform-specification
module.exports = t => {
  const path = t.testdir({
  "package.json": JSON.stringify({
    "name": "platform-test",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "optionalDependencies": {
      "platform-specifying-test-package": "1.0.0"
    }
  })
})
  return path
}
