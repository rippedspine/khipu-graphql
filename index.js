var express = require('express')
var GraphHTTP = require('express-graphql')

var Schema = require('./schema')

// -- Config
const APP_PORT = 5000

const app = express()

app.use('/graphql', GraphHTTP({
  schema: Schema,
  pretty: true,
  graphiql: true
}))

app.listen(APP_PORT, () => {
  console.log(`App listening on port ${APP_PORT}`)
})
