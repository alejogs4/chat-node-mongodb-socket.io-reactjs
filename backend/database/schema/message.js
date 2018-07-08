const mongoose = require('../connection')

const Schema = mongoose.Schema

const MessageSchema = new Schema({
  id: Schema.Types.ObjectId,
  user: { type: String, trim: true },
  message: { type: String, trim: true }
})

const Message = mongoose.model('Message', MessageSchema)

module.exports = Message