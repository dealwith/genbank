import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

import { InputLink, Input } from "../Inputs";

export class AddSpeciesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      name_link: "",
      guardCategory: "",
      sampleNumber: "",
      bankCode: "",
      bankCode_link: "",
      year_gatheringPlace: "",
      year_gatheringPlace_link: "",
      sequenceITS2: "",
      sequenceITS2_link: "",
      sequenceLengthITS2: 0,
      coveragePercentITS2: 0,
      NcbiIdentityITS2: 0,
      NcbiCodeITS2: "",
      NcbiCodeITS2_link: "",
      speciesIdentificationResultITS2: "",
      sequenceRbCl: "",
      sequenceRbCl_link: "",
      sequenceLengthRbCl: 0,
      coveragePercentRbCl: 0,
      NcbiIdentityRbCl: 0,
      NcbiCodeRbCl: "",
      NcbiCodeRbCl_link: "",
      speciesIdentificationResultRbCl: "",
      sequencePSB: "",
      sequencePSB_link: "",
      sequenceLengthPSB: 0,
      coveragePercentPSB: 0,
      NcbiIdentityPSB: 0,
      NcbiCodePSB: "",
      NcbiCodePSB_link: "",
      speciesIdentificationResultPSB: "",
      sequenceMATK: "",
      sequenceMATK_link: "",
      sequenceLengthMATK: 0,
      coveragePercentMATK: 0,
      NcbiIdentityMATK: 0,
      NcbiCodeMATK: "",
      NcbiCodeMATK_link: "",
      speciesIdentificationResultMATK: ""
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
      guardCategory,
      sampleNumber,
      name,
      name_link,
      bankCode,
      bankcode_link,
      year_gatheringPlace,
      year_gatheringPlace_link,
      sequenceITS2,
      sequenceITS2_link,
      sequenceLengthITS2,
      coveragePercentITS2,
      NcbiIdentityITS2,
      NcbiCodeITS2,
      NcbiCodeITS2_link,
      speciesIdentificationResultITS2,
      sequenceRbCl,
      sequenceRbCl_link,
      sequenceLengthRbCl,
      coveragePercentRbCl,
      NcbiIdentityRbCl,
      NcbiCodeRbCl,
      NcbiCodeRbCl_link,
      speciesIdentificationResultRbCl,
      sequencePSB,
      sequencePSB_link,
      sequenceLengthPSB,
      coveragePercentPSB,
      NcbiIdentityPSB,
      NcbiCodePSB,
      NcbiCodePSB_link,
      speciesIdentificationResultPSB,
      sequenceMATK,
      sequenceMATK_link,
      sequenceLengthMATK,
      coveragePercentMATK,
      NcbiIdentityMATK,
      NcbiCodeMATK,
      NcbiCodeMATK_link,
      speciesIdentificationResultMATK
    } = this.state;

    const req = {
      guardCategory,
      sampleNumber,
      name,
      name_link,
      bankCode,
      bankcode_link,
      year_gatheringPlace,
      year_gatheringPlace_link,
      sequenceITS2,
      sequenceITS2_link,
      sequenceLengthITS2,
      coveragePercentITS2,
      NcbiIdentityITS2,
      NcbiCodeITS2,
      NcbiCodeITS2_link,
      speciesIdentificationResultITS2,
      sequenceRbCl,
      sequenceRbCl_link,
      sequenceLengthRbCl,
      coveragePercentRbCl,
      NcbiIdentityRbCl,
      NcbiCodeRbCl,
      NcbiCodeRbCl_link,
      speciesIdentificationResultRbCl,
      sequencePSB,
      sequencePSB_link,
      sequenceLengthPSB,
      coveragePercentPSB,
      NcbiIdentityPSB,
      NcbiCodePSB,
      NcbiCodePSB_link,
      speciesIdentificationResultPSB,
      sequenceMATK,
      sequenceMATK_link,
      sequenceLengthMATK,
      coveragePercentMATK,
      NcbiIdentityMATK,
      NcbiCodeMATK,
      NcbiCodeMATK_link,
      speciesIdentificationResultMATK
    };

    axios.post(req);
  };

  render() {
    let {
      guardCategory,
      sampleNumber,
      name,
      name_link,
      bankCode,
      bankcode_link,
      year_gatheringPlace,
      year_gatheringPlace_link,
      sequenceITS2,
      sequenceITS2_link,
      sequenceLengthITS2,
      coveragePercentITS2,
      NcbiIdentityITS2,
      NcbiCodeITS2,
      NcbiCodeITS2_link,
      speciesIdentificationResultITS2,
      sequenceRbCl,
      sequenceRbCl_link,
      sequenceLengthRbCl,
      coveragePercentRbCl,
      NcbiIdentityRbCl,
      NcbiCodeRbCl,
      NcbiCodeRbCl_link,
      speciesIdentificationResultRbCl,
      sequencePSB,
      sequencePSB_link,
      sequenceLengthPSB,
      coveragePercentPSB,
      NcbiIdentityPSB,
      NcbiCodePSB,
      NcbiCodePSB_link,
      speciesIdentificationResultPSB,
      sequenceMATK,
      sequenceMATK_link,
      sequenceLengthMATK,
      coveragePercentMATK,
      NcbiIdentityMATK,
      NcbiCodeMATK,
      NcbiCodeMATK_link,
      speciesIdentificationResultMATK
    } = this.state;

    let { handleInputChange, handleSubmit } = this;

    return (
      <Form onSubmit={handleSubmit}>
        <InputLink
          name="name"
          linkname="name_link"
          labelName="Название вида"
          value={name}
          linkValue={name_link}
          onChange={handleInputChange}
        />
        <Input
          name="guardCategory"
          labelName="Категория охраны"
          value={guardCategory}
          onChange={handleInputChange}
        />
        <Input
          name="sampleNumber"
          labelName="№ п/п образца"
          value={sampleNumber}
          onChange={handleInputChange}
        />
        <InputLink
          name="bankCode"
          labelName="Шифр банка"
          value={bankCode}
          linkname="bankCode_link"
          linkValue={bankcode_link}
          onChange={handleInputChange}
        />
        <InputLink
          labelName="Год, место сбора"
          name="year_gatheringPlace"
          linkname="year_gatheringPlace_link"
          value={year_gatheringPlace}
          linkValue={year_gatheringPlace_link}
          onChange={handleInputChange}
        />
        <hr />
        Референсная последовательность <strong>ITS2</strong>
        <hr />
        <InputLink
          labelName="Буквенный сиквенс (штрихкод)"
          name="sequenceITS2"
          linkname="sequenceITS2_link"
          value={sequenceITS2}
          linkValue={sequenceITS2_link}
          onChange={handleInputChange}
        />
        <Input
          name="sequenceLengthITS2"
          labelName="Длина сиквенса"
          type="number"
          value={sequenceLengthITS2}
          onChange={handleInputChange}
        />
        <Input
          name="coveragePercentITS2"
          labelName="% покрытия (сравнение  с NCBI)"
          type="number"
          value={coveragePercentITS2}
          onChange={handleInputChange}
        />
        <Input
          name="NcbiIdentityITS2"
          labelName="Идентичность с NCBI,%"
          type="number"
          value={NcbiIdentityITS2}
          onChange={handleInputChange}
        />
        <InputLink
          labelName="Код последовательности в NCBI"
          name="NcbiCodeITS2"
          linkname="NcbiCodeITS2_link"
          value={NcbiCodeITS2}
          linkValue={NcbiCodeITS2_link}
          onChange={handleInputChange}
        />
        <Input
          name="speciesIdentificationResultITS2"
          labelName="Результат видоидентификации"
          type="number"
          value={speciesIdentificationResultITS2}
          onChange={handleInputChange}
        />
        <hr />
        Референсная последовательность <strong>RbCl</strong>
        <hr />
        <InputLink
          labelName="Буквенный сиквенс (штрихкод)"
          name="sequenceRbCl"
          linkname="sequenceRbCl_link"
          value={sequenceRbCl}
          linkValue={sequenceRbCl_link}
          onChange={handleInputChange}
        />
        <Input
          name="sequenceLengthRbCl"
          labelName="Длина сиквенса"
          type="number"
          value={sequenceLengthRbCl}
          onChange={handleInputChange}
        />
        <Input
          name="coveragePercentRbCl"
          labelName="% покрытия (сравнение  с NCBI)"
          type="number"
          value={coveragePercentRbCl}
          onChange={handleInputChange}
        />
        <Input
          name="NcbiIdentityRbCl"
          labelName="Идентичность с NCBI,%"
          type="number"
          value={NcbiIdentityRbCl}
          onChange={handleInputChange}
        />
        <InputLink
          labelName="Код последовательности в NCBI"
          name="NcbiCodeRbCl"
          linkname="NcbiCodeRbCl_link"
          value={NcbiCodeRbCl}
          linkValue={NcbiCodeRbCl_link}
          onChange={handleInputChange}
        />
        <Input
          name="speciesIdentificationResultRbCl"
          labelName="Результат видоидентификации"
          type="number"
          value={speciesIdentificationResultRbCl}
          onChange={handleInputChange}
        />
        <hr />
        Референсная последовательность <strong>PSB</strong>
        <hr />
        <InputLink
          labelName="Буквенный сиквенс (штрихкод)"
          name="sequencePSB"
          linkname="sequencePSB_link"
          value={sequencePSB}
          linkValue={sequencePSB_link}
          onChange={handleInputChange}
        />
        <Input
          name="sequenceLengthPSB"
          labelName="Длина сиквенса"
          type="number"
          value={sequenceLengthPSB}
          onChange={handleInputChange}
        />
        <Input
          name="coveragePercentPSB"
          labelName="% покрытия (сравнение  с NCBI)"
          type="number"
          value={coveragePercentPSB}
          onChange={handleInputChange}
        />
        <Input
          name="NcbiIdentityPSB"
          labelName="Идентичность с NCBI,%"
          type="number"
          value={NcbiIdentityPSB}
          onChange={handleInputChange}
        />
        <InputLink
          labelName="Код последовательности в NCBI"
          name="NcbiCodePSB"
          linkname="NcbiCodePSB_link"
          value={NcbiCodePSB}
          linkValue={NcbiCodePSB_link}
          onChange={handleInputChange}
        />
        <Input
          name="speciesIdentificationResultPSB"
          labelName="Результат видоидентификации"
          type="number"
          value={speciesIdentificationResultPSB}
          onChange={handleInputChange}
        />
        <hr />
        Референсная последовательность <strong>MATK</strong>
        <hr />
        <InputLink
          labelName="Буквенный сиквенс (штрихкод)"
          name="sequenceMATK"
          linkname="sequenceMATK_link"
          value={sequenceMATK}
          linkValue={sequenceMATK_link}
          onChange={handleInputChange}
        />
        <Input
          name="sequenceLengthMATK"
          labelName="Длина сиквенса"
          type="number"
          value={sequenceLengthMATK}
          onChange={handleInputChange}
        />
        <Input
          name="coveragePercentMATK"
          labelName="% покрытия (сравнение  с NCBI)"
          type="number"
          value={coveragePercentMATK}
          onChange={handleInputChange}
        />
        <Input
          name="NcbiIdentityMATK"
          labelName="Идентичность с NCBI,%"
          type="number"
          value={NcbiIdentityMATK}
          onChange={handleInputChange}
        />
        <InputLink
          labelName="Код последовательности в NCBI"
          name="NcbiCodeMATK"
          linkname="NcbiCodeMATK_link"
          value={NcbiCodeMATK}
          linkValue={NcbiCodeMATK_link}
          onChange={handleInputChange}
        />
        <Input
          name="speciesIdentificationResultMATK"
          labelName="Результат видоидентификации"
          type="number"
          value={speciesIdentificationResultMATK}
          onChange={handleInputChange}
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
