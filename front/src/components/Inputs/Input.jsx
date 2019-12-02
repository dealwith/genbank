import React, { PureComponent, Component } from "react";
import { Form } from "react-bootstrap";

export class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      name,
      value,
      labelName = name.substr(0, 1).toUpperCase() + name.slice(1),
      onChange,
      type = "text",
      className = "",
      children
    } = this.props;

    return (
      <Form.Row>
        <Form.Group controlId={`input-${name}`}>
          <Form.Label>{labelName}</Form.Label>
          <Form.Control
            type={type}
            placeholder={labelName}
            name={name}
            value={value}
            onChange={onChange}
            className={className}
          />
        </Form.Group>
        {children}
      </Form.Row>
    );
  }
}
