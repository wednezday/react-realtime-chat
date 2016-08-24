import React from 'react';

// let step = 1;

class FormController extends React.Component {

  constructor(props) {

    super(props);

    // console.log('FormController: #' + step + ' constructor()');
    // step++;

    this.render = this.render.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.state = { text: '' };

  }

  handleSubmit(e) {

    e.preventDefault();

    // console.log('FormController: #' + step + ' handleSubmit()');
    // step++;

    if (!this.state.text) {
      return;
    }

    var message = {
      user : this.props.user,
      text : this.state.text
    }

    this.props.onMessageSubmit(message);

    this.setState({ text: '' });

    // console.log(message);

  }

  changeHandler(e) {

    // console.log('FormController: #' + step + ' changeHandler()');
    // step++;

    // console.log(e.target.value);
    this.setState({ text : e.target.value });

  }

  render () {

    // console.log('FormController: #' + step + ' render()');
    // step++;

    return (
      <div className='form-controller'>
        <h3> Write New Message </h3>
        <form onSubmit={this.handleSubmit}>
          <input className="form-input" autoComplete="off" onChange={this.changeHandler} value={this.state.text} />
        </form>
      </div>
    );

  }

}

export default FormController;
