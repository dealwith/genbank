import React, { useEffect, useState } from "react";
import axios from "axios";
import "regenerator-runtime/runtime";

import { Header } from "../Header";
import { Main } from "../Main";
import Aside from "../Aside/Aside";

export const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      return axios
        .get("http://localhost:5000/api/v1/genes")
        .then(result => setData(result.data.data));
    };
    fetchData();
  }, []);

  return (
    <>
      <Aside />
      <Main>
        <Header>asdasd</Header>
        <ul>
          {data
            ? data.map(obj => <li key={obj.id}>{obj.title}</li>)
            : "no data"}
        </ul>
      </Main>
    </>
  );
};
