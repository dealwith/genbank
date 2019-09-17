import React from "react";
import { Form } from "react-bootstrap";

export const Input = props => {
  const { name, value, labelName, onChange, type = "text" } = props;

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
        />
      </Form.Group>
    </Form.Row>
  );
};
