const express = require('express')
const route = express.Router()
const Message = require('../database/schema/message')

route.get('/messages', (req, res) => {
  Message.find({}, (err, messages) => {
    if(err) return res.status(500).send({ message: 'Error' })

    return res.status(200).send({
      message: 'Conseguido exitosamente',
      messages
    })
  })
})

module.exports = route