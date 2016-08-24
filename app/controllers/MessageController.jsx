import React from 'react';

// let step = 1;

class MessageController extends React.Component {

  constructor(props) {

    super(props);

    // console.log('MessageController: #' + step + ' constructor()');
    // step++;

    this.render = this.render.bind(this);

  }

  renderUserMessage(){
    if (this.props.text) {
      return (
        <p>
          <strong> { this.props.user } </strong> :
          <span> { this.props.text } </span>
        </p>
      );
    } else {
      return (
        <span></span>
      );
    }
  }

  render () {

    // console.log('MessageController: #' + step + ' render()');
    // step++;

    return (
      <div className="message-controller">
        { this.renderUserMessage() }
      </div>
    );

  }

}

export default MessageController;
