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

const getMessages = (req, res) => {
  Message.find({}, (err, messages) => {
    if(err) return res.status(500).send({ message: 'Error' })

    return res.status(200).send({
      message: 'Conseguido exitosamente',
      messages
    })
  })
}


module.exports = {
 sendMessages,
 getMessages
}
