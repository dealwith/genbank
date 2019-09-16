import React from "react";
import { Form } from "react-bootstrap";

export const InputLink = ({ name }) => (
  <Form.Row>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>{name}</Form.Label>
      <Form.Control type="text" placeholder={name} />
    </Form.Group>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Ссылка</Form.Label>
      <Form.Control type="url" placeholder="url" />
    </Form.Group>
  </Form.Row>
);
