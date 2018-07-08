const mongoose = require('mongoose')
const conf = require('./config')

mongoose.connect(`mongodb://${conf.mongo.host}/${conf.mongo.db}`)
  .then(() => { console.log('conectado') })
  .catch(err => console.log(err.message))

module.exports = mongoose