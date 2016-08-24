import React from 'react';

import MessageController from './../controllers/MessageController.jsx';

// let step = 1;

class MessageListController extends React.Component {

  constructor(props) {

    super(props);

    // console.log('MessageListController: #' + step + ' constructor()');
    // step++;

    this.render = this.render.bind(this);

  }

  render () {

    // console.log('MessageListController: #' + step + ' render()');
    // step++;

    return (
      <div className="message-list-controller">
        <h3> Conversation: </h3>
        { this.props.messages.map((message, i) => {
          return (
            <MessageController key={i} user={message.user} text={message.text} />
          );
        }) } <hr />
      </div>
    );

  }

}

export default MessageListController;
