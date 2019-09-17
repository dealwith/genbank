import React from "react";
import { Form } from "react-bootstrap";

export const InputLink = props => {
  const {
    name,
    labelName,
    value,
    linkname,
    linkValue,
    onChange,
    type = "text"
  } = props;

  const handleLinkChange = e => {
    onChange(e, linkname);
  };

  return (
    <Form.Row>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>{labelName}</Form.Label>
        <Form.Control
          type={type}
          placeholder={labelName}
          name={name}
          value={value}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Ссылка</Form.Label>
        <Form.Control
          type="url"
          placeholder="url"
          linkname={linkname}
          value={linkValue}
          onChange={handleLinkChange}
        />
      </Form.Group>
    </Form.Row>
  );
};
