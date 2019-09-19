import React, { useState, useEffect } from "react";
import { SPECIES_API } from "../../constants/path";
import axios from "axios";

const ExactSpeciesTable = ({ match }) => {
  const { params } = match;
  const [species, setSpecies] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://localhost:8000/api/v1/species/${params.speciesId}`
      );
      setSpecies(result.data.data);
    };
    fetchData();
  }, []);

  return <div>{species ? <div>{species.name}</div> : "no"}</div>;
};

export default ExactSpeciesTable;
