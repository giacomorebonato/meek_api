const dotenv = require('dotenv')
const express = require('express')
const app = express()
const routes = require('./routes')

dotenv.config()

routes.forEach(route => {
  app.use(route)
})

app.get('/', (req, res) => {
  res.send('Hello Meek!')
})

const server = app.listen(process.env.PORT, () => {
  console.log(`Server listening on PORT ${server.address().port}`)
})
