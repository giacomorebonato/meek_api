const fs = require('fs')

const routers = []
const files = fs.readdirSync('.')

const routers = files
  .filter(fileName => fileName !== 'index.js')
  .map(fileName => require(`.${fileName}`))

exports = routers
