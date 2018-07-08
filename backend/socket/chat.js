const Message = require('../database/schema/message')

const sendMessages = (io, data) => {
 const message = new Message()
 message.user = data.user
 message.message = data.message
 message.save((err, message) => {
  if (err) {
   console.log('Error al registrar')
  }
 })
 io.emit('print message', message)
}

module.exports = {
 sendMessages
}
