import React, { useState } from "react";
import "regenerator-runtime/runtime";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";

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

import { alertActions } from "../../actions";
import { history } from "../../helpers";

const App = props => {
  const [show, setShow] = useState(true);
  const { alert } = props;

  history.listen((location, action) => {
    props.clearAlerts();
  });

  return (
    <Router history={history}>
      <Aside />
      <Header />
      <Main>
        {alert.message && (
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        )}
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
};

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

const connectedApp = connect(
  mapState,
  actionCreators
)(App);
export { connectedApp as App };
