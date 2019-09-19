import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { v4 } from "uuid";

import { SPECIES_MIN } from "../../constants/path";

export const BasicTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(SPECIES_MIN);
      setData(result.data.data);
    };

    fetchData();
  }, []);
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Название вида</th>
          <th>Категория охраны</th>
          <th>№ п/п образца</th>
          <th>Шифр банка</th>
          <th>Год, место сбора</th>
          <th>addition</th>
        </tr>
      </thead>
      <tbody>
        {data.map(species => (
          <tr key={species.id}>
            <td>
              <a href={species.name_link}>{species.name}</a>
            </td>
            <td>{species.guard_category}</td>
            <td>{species.sample_number}</td>
            <td>
              <a href={species.bank_code_link}>{species.bank_code}</a>
            </td>
            <td>
              <a href={species.year_gathering_place_link}>
                {species.year_gathering_place}
              </a>
            </td>
            <td>
              <Link to={`species/${species.id}`}>
                <Button variant="secondary">more</Button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
