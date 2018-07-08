const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

const { sendMessages } = require('./socket/chat')
const api = require('./api/index')

const config = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

app.use(config)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(api)

io.on('connection', socket => {
  socket.on('send message', data => sendMessages(io, data))
})


module.exports = server