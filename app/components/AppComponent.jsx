import React from 'react';
import Client from 'socket.io-client';

import UserController from './../controllers/UserController.jsx';
import MessageListController from './../controllers/MessageListController.jsx';
import FormController from './../controllers/FormController.jsx';

const io = Client('http://localhost:8001');
const socket = io.connect();

// let step = 1;

class AppComponent extends React.Component {

  constructor(props) {

    super(props);

    // console.log('AppComponent: #' + step + ' constructor()');
    // step++;

    io.on('connect', (socket) => {
      // console.log('AppComponent: #' + step + ' Socket Connected');
      // step++;
      io.on('disconnect', () => {
        console.log('disconnected', socket);
      })
    })

    this.render = this.render.bind(this);
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);

    this.state = {
      user: 'Eakkabin',
      users: [
        { name: 'Eakkabin' }
      ],
      messages: [
        { user: 'Eakkabin', text: 'hello world' }
      ]
    }

    socket.on('init');
    socket.on('send:message', (msg) => {
      // console.log(msg);
      var { messages } = this.state;
      messages.push(msg);
      this.setState({ messages });
    });

    // console.log(this.state);

  }

  handleMessageSubmit(message) {

    // console.log('AppComponent: #' + step + ' handleMessageSubmit()');
    // step++;

    var { messages } = this.state;
    messages.push(message);
    this.setState({ messages });

    socket.emit('send:message', message.text);

    // console.log(message);

  }

  render() {

    // console.log('AppComponent: #' + step + ' render()');
    // step++;

    return (
      <div className="container">
        <div className="col-8">
            <h1> Chat Realtime (Socket.io) </h1> <hr />
            <MessageListController messages={this.state.messages} />
            <FormController onMessageSubmit={this.handleMessageSubmit} user={this.state.user} />
        </div>
        <div className="col-4">
          <UserController users={this.state.users} />
        </div>
      </div>
    );

  }

}

export default AppComponent;
