import React from 'react';

// let step = 1;

class ExampleController extends React.Component {

  constructor(props) {

    super(props);

    // console.log('ExampleController: #' + step + ' constructor()');
    // step++;

    this.render = this.render.bind(this);

  }

  render () {

    // console.log('ExampleController: #' + step + ' render()');
    // step++;

    return (
      <div></div>
    );

  }

}

export default ExampleController;
