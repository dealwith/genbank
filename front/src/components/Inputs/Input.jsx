import React from "react";
import { Form } from "react-bootstrap";

export const Input = props => {
  const {
    name,
    value,
    labelName = name.substr(0, 1).toUpperCase() + name.slice(1),
    onChange,
    type = "text",
    className = ""
  } = props;

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
    </Form.Row>
  );
};
