import React from "react";
import "regenerator-runtime/runtime";
import { Router, Route, Redirect, Switch } from "react-router-dom";

import { Header } from "../Header";
import { Main } from "../Main";
import { Aside } from "../Aside";
import { AddSpeciesForm } from "../Form";
import { BasicTable } from "../Tables";
import { ExactSpeciesTable } from "../Tables";
import { Login } from "../Auth";
import { Registrate } from "../Auth";
import { Footer } from "../Footer";
import { Users } from "../Users";
import { Notification } from "../Notification";

import { history } from "../../helpers";

export const App = props => (
  <Router history={history}>
    <Aside />
    <Header />
    <Main>
      <Notification />
      <Switch>
        <Route path="/" exact component={BasicTable} />
        <Route path="/species/:speciesId" component={ExactSpeciesTable} />
        <Route path="/add-species" component={AddSpeciesForm} />
        <Route path="/login" component={Login} />
        <Route path="/registrate" component={Registrate} />
        <Route path="/users" component={Users} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </Main>
  </Router>
);
