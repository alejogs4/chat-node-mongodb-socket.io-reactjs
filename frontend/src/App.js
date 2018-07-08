import React, { Component } from 'react';
import './App.css';
import RegisterForm from './RegisterForm';
import Chat from './Chat';
import socketIOClient  from 'socket.io-client'

class App extends Component {
  state = {
    isRegistered: false,
    username: '',
    messages: [],
    host: 'http://localhost:3001/'
  }

  componentDidMount() {
    const socket = socketIOClient(this.state.host)
    socket.on('print message', message => {
      const newMessages = this.state.messages
      newMessages.unshift(message)
      this.setState({ messages: newMessages })
    })
  }

  register = e => {
    e.persist()
    e.preventDefault()
    fetch(`${this.state.host}messages`)
      .then(response => response.json())
      .then(messages => {
        this.setState({ isRegistered: true, username: e.target.user.value, messages: messages.messages.reverse() })
      })
      .catch(err => console.log(err))
  }

  send = e => {
    e.preventDefault()
    const socket = socketIOClient(this.state.host)
    const { username } = this.state
    socket.emit('send message', { user: username, message: e.target.message.value })
    e.target.message.value = ''
  }

  render() {
    const { isRegistered, messages, username } = this.state
    return (
      <div className="App">
        {
          isRegistered
            ? <Chat send={this.send} messages={messages} user={username}/>
            : <RegisterForm register={this.register} />
        }
      </div>
    );
  }
}

export default App;
