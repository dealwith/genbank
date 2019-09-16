import React from "react";
import { Form } from "react-bootstrap";

import { InputLink, Input } from "./";

export const ReferenceSequenceInput = ({ referenceName }) => (
  <>
    <hr />
    Референсная последовательность <strong>{referenceName}</strong>
    <hr />
    <InputLink name="Буквенный сиквенс (штрихкод)" />
    <Input name="Длина сиквенса" />
    <Input name="% покрытия (сравнение  с NCBI)" />
    <Input name="Идентичность с NCBI,%" />
    <InputLink name="Код последовательности в NCBI" />
    <Input name="Результат видоидентификации" />
  </>
);
