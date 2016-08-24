import React from 'react';

// let step = 1;

class UserController extends React.Component {

  constructor(props) {

    super(props);

    // console.log('UserController: #' + step + ' constructor()');
    // step++;

    this.render = this.render.bind(this);

  }

  render () {

    // console.log('UserController: #' + step + ' render()');
    // step++;

    return (
      <div className="user-controller">
        <h3> Online Users </h3>
        <ul>
          { this.props.users.map((user, i) => {
            return (
              <li key={i}>
                { user.name }
              </li>
            );
          })}
        </ul>
      </div>
    );

  }

}

export default UserController;
