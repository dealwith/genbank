import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";

import { Input } from "../Inputs";

import { userActions } from "../../actions";

class Login extends Component {
  constructor(props) {
    super(props);

    this.props.logout();

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
      <Form
        className="g-form g-form_center g-form_small mx-auto"
        onSubmit={this.handleSumbit}
      >
        <h2 className="g-title g-form__title">Login</h2>
        <Input
          type="email"
          name="email"
          className={`form-input ${submitted && !email ? "has-error" : ""}`}
          value={email}
          onChange={this.handleChange}
          required
        />
        {submitted && !email && (
          <Form.Control.Feedback>Email is required</Form.Control.Feedback>
        )}
        <Input
          type="password"
          name="password"
          className={`form-input ${submitted && !password ? "has-error" : ""}`}
          value={password}
          onChange={this.handleChange}
          required
        />
        {submitted && !password && (
          <Form.Control.Feedback>Password is required</Form.Control.Feedback>
        )}
        <Form.Group>
          <Button type="submit">Login</Button>
          {loggingIn && (
            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
          )}
        </Form.Group>
        <hr />
        <p>
          Don't have an account? <Link to="/registrate">Registrate</Link>
        </p>
      </Form>
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
