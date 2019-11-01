import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";

class Registrate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    };
  }

  handlechange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.label>Name</Form.label>
          <Form.Control
            id="inputName"
            type="text"
            required
            onChange={this.handlechange}
          />
        </Form.Group>
        <Form.Group>
          <Form.label>Email</Form.label>
          <Form.Control
            id="inputEmail"
            type="email"
            required
            onChange={this.handlechange}
          />
        </Form.Group>
        <Form.Group>
          <Form.label>Password</Form.label>
          <Form.Control onChange={this.handleChange} type="password" />
        </Form.Group>
        <Form.Group>
          <Form.label>Repeat password</Form.label>
          <Form.Control onChange type="password"></Form.Control>
        </Form.Group>
        <Button varient="primary" type="submit">
          Submit
        </Button>
        <hr />

        <p>
          Already have an account ?<Link to="/login">Log in</Link>
        </p>
      </Form>
    );
  }
}
