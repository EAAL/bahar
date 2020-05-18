import React, { Component } from 'react';
import axios from 'axios';

function validEmail(email) {
  return email.test(/\.+@.+\..+/);
}

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_email: '',
      invalid_email: false,
      user_password: '',
    };
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onBlurUserEmail = this.onBlurUserEmail.bind(this);
  }

  onChangeUserEmail(e) {
    this.setState({
      user_email: e.target.value,
    });
  }

  onBlurUserEmail(e) {
    if (!validEmail(e.target.value)) {
      this.setState({
        invalid_email: true,
      });
    }
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <form onSubmit={this.onSubmit}>
          <input
            type="email"
            value={this.state.user_email}
            onChange={this.onChangeUserEmail}
            onBlur={this.onBlurUserEmail}
          />
          <input type="password" onChange={this.onChangeUserPassword} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
