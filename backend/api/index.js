const express = require('express')
const route = express.Router()
const { getMessages } = require('../socket/chat')

route.get('/messages', getMessages)

module.exports = route