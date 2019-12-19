import React, { Component } from "react";
import { Form } from "react-bootstrap";

export class InputLink extends Component {
  handleLinkChange = (e) => {
    this.props.onChange(e, this.props.linkname);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.value !== nextProps.value ||
    this.props.linkValue !== nextProps.linkValue
      ? true
      : false;
  }

  render() {
    const {
      name,
      labelName,
      value,
      linkname,
      linkValue,
      onChange,
      type = "text"
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
          />
        </Form.Group>
        <Form.Group
          className="g-form-group-link"
          controlId={`inputLink-${linkname}`}
        >
          <Form.Label>Ссылка</Form.Label>
          <Form.Control
            type="url"
            placeholder="url"
            linkname={linkname}
            value={linkValue}
            onChange={this.handleLinkChange}
          />
        </Form.Group>
      </Form.Row>
    );
  }
}
