import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";

import { Input } from "../Inputs";
import { userActions } from "../../actions";

class Registrate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        email: "",
        password: ""
      },
      repeatPassword: "",
      submitted: false
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    const { user } = this.state;

    name === "repeatPassword"
      ? this.setState({ repeatPassword: value })
      : this.setState({
          user: {
            ...user,
            [name]: value
          }
        });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ submitted: true });

    const { user } = this.state;

    // if (user.password !== this.state.repeatPassword) {
    //   return false;
    // }

    console.log(user);

    if (user.name && user.email && user.password) {
      this.props.register(user);
    }
  };

  render() {
    const { registering } = this.props;
    const { user, submitted, repeatPassword } = this.state;

    return (
      <Form
        onSubmit={this.handleSubmit}
        className="g-form g-form g-form_small g-form_center mx-auto"
      >
        <h2 className="g-title g-form__title">Register</h2>
        <Input
          type="text"
          name="name"
          className={
            "form-input" + (submitted && !user.name ? " has-error" : "")
          }
          value={user.name}
          onChange={this.handleChange}
          required
        />
        {submitted && !user.name && <div>Name is required</div>}
        <Input
          type="email"
          name="email"
          className={`form-input ${
            submitted && !user.email ? "has-error" : ""
          }`}
          value={user.email}
          onChange={this.handleChange}
          required
        />
        {submitted && !user.email && (
          <Form.Control.Feedback>Email is required</Form.Control.Feedback>
        )}
        <Input
          type="password"
          name="password"
          className={`form-input ${
            submitted && !user.password ? "has-error" : ""
          }`}
          value={user.password}
          onChange={this.handleChange}
          required
        />
        {submitted && !user.password && (
          <Form.Control.Feedback>Password is required</Form.Control.Feedback>
        )}
        <Input
          type="password"
          name="repeatPassword"
          labelName="Reapeat password"
          className={`form-input ${
            submitted && !repeatPassword ? "has-error" : ""
          }`}
          value={repeatPassword}
          onChange={this.handleChange}
          required
        />
        <Form.Group>
          {submitted && !repeatPassword && (
            <Form.Control.Feedback>
              You should repeat the password
            </Form.Control.Feedback>
          )}
          {user.password !== repeatPassword && (
            <Form.Control.Feedback>
              Passwords didn't match
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Button varient="primary" type="submit">
          Register
        </Button>
        {registering && (
          <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
        )}
        <hr />
        <p>
          Already have an account?<Link to="/login"> Log in</Link>
        </p>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  const { registering } = state.registration;
  return { registering };
}

const mapDispatchToProps = {
  register: userActions.register
};

const connectedRegisterPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Registrate);
export { connectedRegisterPage as Registrate };
