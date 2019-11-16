import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

import { InputLink, Input } from "../Inputs";
import { SPECIES_API } from "../../constants/path";

export class AddSpeciesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      name_link: "",
      guard_category: "",
      sample_number: "",
      bank_code: "",
      bank_code_link: "",
      year_gathering_place: "",
      year_gathering_place_link: "",
      sequence__itst2: "",
      sequence_itst2_link: "",
      sequence_length_itst2: 0,
      coverage_percent_itst2: 0,
      ncbi_identity_itst2: 0,
      ncbi_code_itst2: "",
      ncbi_code_itst2_link: "",
      species_identification_result_itst2: "",
      sequence_rbcl: "",
      sequence_rbcl_link: "",
      sequence_length_rbcl: 0,
      coverage_percent_rbcl: 0,
      ncbi_identity_rbcl: 0,
      ncbi_code_rbcl: "",
      ncbi_code_rbcl_link: "",
      species_identification_result_rbcl: "",
      sequence_psb: "",
      sequence_psb_link: "",
      sequence_length_psb: 0,
      coverage_percent_psb: 0,
      ncbi_identity_psb: 0,
      ncbi_code_psb: "",
      ncbi_code_psb_link: "",
      species_identification_result_psb: "",
      sequence_matk: "",
      sequence_matk_link: "",
      sequence_length_matk: 0,
      coverag_percent_matk: 0,
      ncbi_identity_matk: 0,
      ncbi_code_matk: "",
      ncbi_code_matk_link: "",
      species_identification_result_matk: ""
    };
  }

  handleInputChange = (e, linkname) => {
    let { name, value } = e.target;
    linkname ? (name = linkname) : name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      name,
      name_link,
      guard_category,
      sample_number,
      bank_code,
      bank_code_link,
      year_gathering_place,
      year_gathering_place_link,
      sequence__itst2,
      sequence_itst2_link,
      sequence_length_itst2,
      coverage_percent_itst2,
      ncbi_identity_itst2,
      ncbi_code_itst2,
      ncbi_code_itst2_link,
      species_identification_result_itst2,
      sequence_rbcl,
      sequence_rbcl_link,
      sequence_length_rbcl,
      coverage_percent_rbcl,
      ncbi_identity_rbcl,
      ncbi_code_rbcl,
      ncbi_code_rbcl_link,
      species_identification_result_rbcl,
      sequence_psb,
      sequence_psb_link,
      sequence_length_psb,
      coverage_percent_psb,
      ncbi_identity_psb,
      ncbi_code_psb,
      ncbi_code_psb_link,
      species_identification_result_psb,
      sequence_matk,
      sequence_matk_link,
      sequence_length_matk,
      coverag_percent_matk,
      ncbi_identity_matk,
      ncbi_code_matk,
      ncbi_code_matk_link,
      species_identification_result_matk
    } = this.state;

    const req = {
      name,
      name_link,
      guard_category,
      sample_number,
      bank_code,
      bank_code_link,
      year_gathering_place,
      year_gathering_place_link,
      sequence__itst2,
      sequence_itst2_link,
      sequence_length_itst2,
      coverage_percent_itst2,
      ncbi_identity_itst2,
      ncbi_code_itst2,
      ncbi_code_itst2_link,
      species_identification_result_itst2,
      sequence_rbcl,
      sequence_rbcl_link,
      sequence_length_rbcl,
      coverage_percent_rbcl,
      ncbi_identity_rbcl,
      ncbi_code_rbcl,
      ncbi_code_rbcl_link,
      species_identification_result_rbcl,
      sequence_psb,
      sequence_psb_link,
      sequence_length_psb,
      coverage_percent_psb,
      ncbi_identity_psb,
      ncbi_code_psb,
      ncbi_code_psb_link,
      species_identification_result_psb,
      sequence_matk,
      sequence_matk_link,
      sequence_length_matk,
      coverag_percent_matk,
      ncbi_identity_matk,
      ncbi_code_matk,
      ncbi_code_matk_link,
      species_identification_result_matk
    };

    console.log(req);

    axios.post(SPECIES_API, req).catch(err => console.error(err));
  };

  render() {
    const {
      name,
      name_link,
      guard_category,
      sample_number,
      bank_code,
      bank_code_link,
      year_gathering_place,
      year_gathering_place_link,
      sequence__itst2,
      sequence_itst2_link,
      sequence_length_itst2,
      coverage_percent_itst2,
      ncbi_identity_itst2,
      ncbi_code_itst2,
      ncbi_code_itst2_link,
      species_identification_result_itst2,
      sequence_rbcl,
      sequence_rbcl_link,
      sequence_length_rbcl,
      coverage_percent_rbcl,
      ncbi_identity_rbcl,
      ncbi_code_rbcl,
      ncbi_code_rbcl_link,
      species_identification_result_rbcl,
      sequence_psb,
      sequence_psb_link,
      sequence_length_psb,
      coverage_percent_psb,
      ncbi_identity_psb,
      ncbi_code_psb,
      ncbi_code_psb_link,
      species_identification_result_psb,
      sequence_matk,
      sequence_matk_link,
      sequence_length_matk,
      coverag_percent_matk,
      ncbi_identity_matk,
      ncbi_code_matk,
      ncbi_code_matk_link,
      species_identification_result_matk
    } = this.state;

    const { handleInputChange, handleSubmit } = this;

    return (
      <Form onSubmit={handleSubmit} className="g-form g-form_add-species">
        <InputLink
          name="name"
          linkname="name_link"
          labelName="Название вида"
          value={name}
          linkValue={name_link}
          onChange={handleInputChange}
        />
        <Input
          name="guard_category"
          labelName="Категория охраны"
          value={guard_category}
          onChange={handleInputChange}
        />
        <Input
          name="sample_number"
          labelName="№ п/п образца"
          value={sample_number}
          onChange={handleInputChange}
        />
        <InputLink
          name="bank_code"
          labelName="Шифр банка"
          value={bank_code}
          linkname="bank_code_link"
          linkValue={bank_code_link}
          onChange={handleInputChange}
        />
        <InputLink
          labelName="Год, место сбора"
          name="year_gathering_place"
          linkname="year_gathering_place_link"
          value={year_gathering_place}
          linkValue={year_gathering_place_link}
          onChange={handleInputChange}
        />
        <hr />
        Референсная последовательность <strong>ITS2</strong>
        <hr />
        <InputLink
          labelName="Буквенный сиквенс (штрихкод)"
          name="sequence__itst2"
          linkname="sequence_itst2_link"
          value={sequence__itst2}
          linkValue={sequence_itst2_link}
          onChange={handleInputChange}
        />
        <Input
          name="sequence_length_itst2"
          labelName="Длина сиквенса"
          type="number"
          value={sequence_length_itst2}
          onChange={handleInputChange}
        />
        <Input
          name="coverage_percent_itst2"
          labelName="% покрытия (сравнение  с NCBI)"
          type="number"
          value={coverage_percent_itst2}
          onChange={handleInputChange}
        />
        <Input
          name="ncbi_identity_itst2"
          labelName="Идентичность с NCBI,%"
          type="number"
          value={ncbi_identity_itst2}
          onChange={handleInputChange}
        />
        <InputLink
          labelName="Код последовательности в NCBI"
          name="ncbi_code_itst2"
          linkname="NcbiCodeITS2_link"
          value={ncbi_code_itst2}
          linkValue={ncbi_code_itst2_link}
          onChange={handleInputChange}
        />
        <Input
          name="species_identification_result_itst2"
          labelName="Результат видоидентификации"
          type="number"
          value={species_identification_result_itst2}
          onChange={handleInputChange}
        />
        <hr />
        Референсная последовательность <strong>RbCl</strong>
        <hr />
        <InputLink
          labelName="Буквенный сиквенс (штрихкод)"
          name="sequence_rbcl"
          linkname="sequence_rbcl_link"
          value={sequence_rbcl}
          linkValue={sequence_rbcl_link}
          onChange={handleInputChange}
        />
        <Input
          name="sequence_length_rbcl"
          labelName="Длина сиквенса"
          type="number"
          value={sequence_length_rbcl}
          onChange={handleInputChange}
        />
        <Input
          name="coverage_percent_rbcl"
          labelName="% покрытия (сравнение  с NCBI)"
          type="number"
          value={coverage_percent_rbcl}
          onChange={handleInputChange}
        />
        <Input
          name="ncbi_identity_rbcl"
          labelName="Идентичность с NCBI,%"
          type="number"
          value={ncbi_identity_rbcl}
          onChange={handleInputChange}
        />
        <InputLink
          labelName="Код последовательности в NCBI"
          name="ncbi_code_rbcl"
          linkname="ncbi_code_rbcl_link"
          value={ncbi_code_rbcl}
          linkValue={ncbi_code_rbcl_link}
          onChange={handleInputChange}
        />
        <Input
          name="species_identification_result_rbcl"
          labelName="Результат видоидентификации"
          type="number"
          value={species_identification_result_rbcl}
          onChange={handleInputChange}
        />
        <hr />
        Референсная последовательность <strong>PSB</strong>
        <hr />
        <InputLink
          labelName="Буквенный сиквенс (штрихкод)"
          name="sequence_psb"
          linkname="sequence_psb_link"
          value={sequence_psb}
          linkValue={sequence_psb_link}
          onChange={handleInputChange}
        />
        <Input
          name="sequence_length_psb"
          labelName="Длина сиквенса"
          type="number"
          value={sequence_length_psb}
          onChange={handleInputChange}
        />
        <Input
          name="coverage_percent_psb"
          labelName="% покрытия (сравнение  с NCBI)"
          type="number"
          value={coverage_percent_psb}
          onChange={handleInputChange}
        />
        <Input
          name="ncbi_identity_psb"
          labelName="Идентичность с NCBI,%"
          type="number"
          value={ncbi_identity_psb}
          onChange={handleInputChange}
        />
        <InputLink
          labelName="Код последовательности в NCBI"
          name="ncbi_code_psb"
          linkname="ncbi_code_psb_link"
          value={ncbi_code_psb}
          linkValue={ncbi_code_psb_link}
          onChange={handleInputChange}
        />
        <Input
          name="species_identification_result_psb"
          labelName="Результат видоидентификации"
          type="number"
          value={species_identification_result_psb}
          onChange={handleInputChange}
        />
        <hr />
        Референсная последовательность <strong>MATK</strong>
        <hr />
        <InputLink
          labelName="Буквенный сиквенс (штрихкод)"
          name="sequence_matk"
          linkname="sequence_matk_link"
          value={sequence_matk}
          linkValue={sequence_matk_link}
          onChange={handleInputChange}
        />
        <Input
          name="sequence_length_matk"
          labelName="Длина сиквенса"
          type="number"
          value={sequence_length_matk}
          onChange={handleInputChange}
        />
        <Input
          name="coverag_percent_matk"
          labelName="% покрытия (сравнение  с NCBI)"
          type="number"
          value={coverag_percent_matk}
          onChange={handleInputChange}
        />
        <Input
          name="ncbi_identity_matk"
          labelName="Идентичность с NCBI,%"
          type="number"
          value={ncbi_identity_matk}
          onChange={handleInputChange}
        />
        <InputLink
          labelName="Код последовательности в NCBI"
          name="ncbi_code_matk"
          linkname="ncbi_code_matk_link"
          value={ncbi_code_matk}
          linkValue={ncbi_code_matk_link}
          onChange={handleInputChange}
        />
        <Input
          name="species_identification_result_matk"
          labelName="Результат видоидентификации"
          type="number"
          value={species_identification_result_matk}
          onChange={handleInputChange}
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
