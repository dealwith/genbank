import React from "react";
import "regenerator-runtime/runtime";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Header } from "../Header";
import { Main } from "../Main";
import { Aside } from "../Aside";
import { AddSpeciesForm } from "../Form";

export const App = () => {
  return (
    <Router>
      <Aside />
      <Main>
        <Header />
        <Route path="/" exact component={AddSpeciesForm} />
      </Main>
    </Router>
  );
};
