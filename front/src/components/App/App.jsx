import React from "react";
import "regenerator-runtime/runtime";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Header } from "../Header";
import { Main } from "../Main";
import { Aside } from "../Aside";
import { AddSpeciesForm } from "../Form";
import { BasicTable } from "../Tables";
import ExactSpeciesTable from "../Tables/ExactSpeciesTable";

export const App = () => {
  return (
    <Router>
      <Aside />
      <Main>
        <Header />
        <Route path="/" exact component={BasicTable} />
        <Route path="/species/:speciesId" component={ExactSpeciesTable} />
        <Route path="/add-species" component={AddSpeciesForm} />
      </Main>
    </Router>
  );
};
