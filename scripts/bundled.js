const Arborist = require('@npmcli/arborist')
const { resolve } = require('path')

const ogConsole = console.log

const main = async (...args) => {
  const where = resolve(__dirname, '..')
  const opts = {
    path: where,
    forceActual: true,
  }
  const arb = new Arborist(opts)

  console.log = () => {}
  const tree = await arb.loadActual(opts)
  console.log = ogConsole

  // const [link, node] = await tree.querySelectorAll(arg)

  for (const a of args) {
    console.log(a)
    console.log('-'.repeat(40))
    const c = tree.children.get(a)
    console.log(c.linksIn, c.inBundle)
    console.log('-'.repeat(40))
    console.log()
    console.log()
  }
}

main(...process.argv.slice(2))
