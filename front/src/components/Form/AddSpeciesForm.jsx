import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

import { ReferenceSequenceInput } from "../Inputs/ReferenceSequenceInputs";
import { InputLink, Input } from "../Inputs";

export class AddSpeciesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleInputChange = e => {
    const [inputName, value] = e.tagret;
    this.setState({
      [inputName]: value
    });
  };

  render() {
    return (
      <Form>
        <InputLink name="Название вида" inputName="name" />
        <Input name="Категория охраны" />
        <Input name="№ п/п образца" />
        <InputLink name="Шифр банка" />
        <InputLink name="Год, место сбора" />

        <ReferenceSequenceInput referenceName="ITS2" />
        <ReferenceSequenceInput referenceName="rbcL" />
        <ReferenceSequenceInput referenceName="psb-trn" />
        <ReferenceSequenceInput referenceName="matK" />

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
