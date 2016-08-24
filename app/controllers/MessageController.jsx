import React from 'react';

// let step = 1;

class MessageController extends React.Component {

  constructor(props) {

    super(props);

    // console.log('MessageController: #' + step + ' constructor()');
    // step++;

    this.render = this.render.bind(this);

  }

  render () {

    // console.log('MessageController: #' + step + ' render()');
    // step++;

    return (
      <div className="message-controller">
        {(this.props.user && this.props.text) ? this.props.user + ' : ' + this.props.text : null }
      </div>
    );

  }

}

export default MessageController;
