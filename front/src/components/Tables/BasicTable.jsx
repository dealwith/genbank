import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
    <>
      {data ? (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Название вида</th>
              <th>Семейство</th>
              <th>Категория охраны</th>
              <th>Год</th>
              <th>Место сбора</th>
              <th>addition</th>
            </tr>
          </thead>
          <tbody>
            {data.map(species => (
              <tr key={species.id}>
                {/* Название вида */}
                <td>
                  <a href={species.name_link}>{species.name}</a>
                </td>
                {/* Семейство */}
                <td>{species.id}</td>
                {/* Категория охраны */}
                <td>{species.sample_number}</td>
                {/* Год */}
                <td>
                  <a href={species.bank_code_link}>{species.bank_code}</a>
                </td>
                {/* Место сбора */}
                <td>
                  <a href={species.year_gathering_place_link}>
                    {species.year_gathering_place}
                  </a>
                </td>
                {/* addition */}
                <td>
                  <Link to={`species/${species.id}`}>
                    <Button variant="secondary">more</Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <h3>No data there</h3>
      )}
    </>
  );
};
