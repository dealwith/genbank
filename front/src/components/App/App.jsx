import React, { useEffect, useState } from "react";
import axios from "axios";
import "regenerator-runtime/runtime";

export const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      return axios
        .get("http://localhost:9000/api/v1/genes")
        .then(result => setData(result.data.data));
    };
    fetchData();
  }, []);

  return (
    <ul>
      {data.map(obj => (
        <li key={obj.id}>{obj.title}</li>
      ))}
    </ul>
  );
};
