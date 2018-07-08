import React from 'react'

const Chat = ({ send, messages, user }) => (
  <div>
    <form onSubmit={send} className='form'>
      <input type="text" name="message" placeholder='Mensaje' required className='roboto'/>
      <input type="submit" value="Enviar" className='roboto'/>
    </form>
    { console.log(messages) }
    <ul className="message-list">
      {
        messages.map(message => (
          <li className="message">
            <span className="user roboto">{message.user}: </span>{message.message}</li>
        ))
      }
    </ul>
  </div>
)

export default Chat