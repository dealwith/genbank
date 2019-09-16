import React from "react";
import { Form } from "react-bootstrap";

export const Input = props => {
  const { name } = props;

  return (
    <Form.Row>
      <Form.Group controlId={`input-${name}`}>
        <Form.Label>{name}</Form.Label>
        <Form.Control type="text" placeholder={name} />
      </Form.Group>
    </Form.Row>
  );
};
