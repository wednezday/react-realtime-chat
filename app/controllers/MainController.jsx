import React from 'react';

class MainController extends React.Component {

  constructor(props) {
    super(props);
     this.render = this.render.bind(this);
  }

  render () {
    return (
      <div>
        <p> Main Content </p>
      </div>
    );
  }

}

export default MainController;
