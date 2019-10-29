import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

import { SPECIES_API, SPECIES_EXACT } from "../../constants/path";

const ExactSpeciesTable = ({ match }) => {
  const { params } = match;
  const [species, setSpecies] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${SPECIES_EXACT}/${params.speciesId}`);
      setSpecies(result.data.data);
    };
    fetchData();
  }, []);

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
  } = species;

  return (
    <Row>
      <Col>
        <Row>Описание образца</Row>
        <hr />
        <Row>
          Название вида:
          <span>
            <a target="_blank" href={name_link}>
              {name}
            </a>
          </span>
        </Row>
        <Row>
          Категория охраны: <span>{guard_category}</span>
        </Row>
        <Row>
          № п/п образца: <span>{sample_number}</span>
        </Row>
        <Row>
          Шифр банка:
          <span>
            <a target="_blank" href={bank_code_link}>
              {bank_code}
            </a>
          </span>
        </Row>
        <Row>
          Год, место сбора:
          <span>
            <a target="_blank" href={year_gathering_place_link}>
              {year_gathering_place}
            </a>
          </span>
        </Row>
        <hr />
        <Row>Референсная последовательность ITS2</Row>
        <hr />
        <Row>
          Буквенный сиквенс (штрихкод):
          <span>
            <a target="_blank" href={sequence_itst2_link}>
              {sequence__itst2}
            </a>
          </span>
        </Row>
        <Row>
          Длина сиквенса:
          <span>{sequence_length_itst2}</span>
        </Row>
        <Row>
          % покрытия (сравнение с NCBI):
          <span>{coverage_percent_itst2}</span>
        </Row>
        <Row>
          Идентичность с NCBI,%:
          {ncbi_identity_itst2}
        </Row>
        <Row>
          Код последовательности в NCBI:
          <span>
            <a target="_blank" href={ncbi_code_itst2_link}>
              {ncbi_code_itst2}
            </a>
          </span>
        </Row>
        <Row>
          Результат видоидентификации:
          {species_identification_result_itst2}
        </Row>
        <hr />
        <Row>Референсная последовательность rbcl</Row>
        <hr />
        <Row>
          Буквенный сиквенс (штрихкод):
          <span>
            <a target="_blank" href={sequence_rbcl_link}>
              {sequence_rbcl}
            </a>
          </span>
        </Row>
        <Row>
          Длина сиквенса:
          <span>{sequence_length_rbcl}</span>
        </Row>
        <Row>
          % покрытия (сравнение с NCBI):
          <span>{coverage_percent_rbcl}</span>
        </Row>
        <Row>
          Идентичность с NCBI,%:
          {ncbi_identity_rbcl}
        </Row>
        <Row>
          Код последовательности в NCBI:
          <span>
            <a target="_blank" href={ncbi_code_rbcl_link}>
              {ncbi_code_rbcl}
            </a>
          </span>
        </Row>
        <Row>
          Результат видоидентификации:
          {species_identification_result_rbcl}
        </Row>
        <hr />
        <Row>Референсная последовательность psb-trn</Row>
        <hr />
        <Row>
          Буквенный сиквенс (штрихкод):
          <span>
            <a target="_blank" href={sequence_psb_link}>
              {sequence_psb}
            </a>
          </span>
        </Row>
        <Row>
          Длина сиквенса:
          <span>{sequence_length_psb}</span>
        </Row>
        <Row>
          % покрытия (сравнение с NCBI):
          <span>{coverage_percent_psb}</span>
        </Row>
        <Row>
          Идентичность с NCBI,%:
          {ncbi_identity_psb}
        </Row>
        <Row>
          Код последовательности в NCBI:
          <span>
            <a target="_blank" href={ncbi_code_psb_link}>
              {ncbi_code_psb}
            </a>
          </span>
        </Row>
        <Row>
          Результат видоидентификации:
          {species_identification_result_psb}
        </Row>
        <hr />
        <Row>Референсная последовательность matK</Row>
        <hr />
        <Row>
          Буквенный сиквенс (штрихкод):
          <span>
            <a target="_blank" href={sequence_matk_link}>
              {sequence_matk}
            </a>
          </span>
        </Row>
        <Row>
          Длина сиквенса:
          <span>{sequence_length_matk}</span>
        </Row>
        <Row>
          % покрытия (сравнение с NCBI):
          <span>{coverag_percent_matk}</span>
        </Row>
        <Row>
          Идентичность с NCBI,%:
          {ncbi_identity_matk}
        </Row>
        <Row>
          Код последовательности в NCBI:
          <span>
            <a target="_blank" href={ncbi_code_matk_link}>
              {ncbi_code_matk}
            </a>
          </span>
        </Row>
        <Row>
          Результат видоидентификации:
          {species_identification_result_matk}
        </Row>
      </Col>
    </Row>
  );
};

export default ExactSpeciesTable;