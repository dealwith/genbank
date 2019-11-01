import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";

import { userActions } from "../../actions";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      submited: false
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSumbit = e => {
    e.preventDefault();

    this.setState({ submited: true });
    const { email, password } = this.state;
    if (email && password) {
      this.props.login(email, password);
    }
  };

  render() {
    const { loggedIn } = this.props;
    const { email, password, submitted } = this.state;

    return (
      <div className="col-md-6 offset-md-3">
        <Form name="form" onSubmit={this.handleSumbit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

function mapState(state) {
  const { loggedIn } = state.authentication;
  return { loggedIn };
}

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout
};

const connectedLogin = connect(
  mapState,
  actionCreators
)(Login);
export { connectedLogin as Login };
