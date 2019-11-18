import React, { useState } from "react";
import "regenerator-runtime/runtime";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { Alert } from "react-bootstrap";

import { Header } from "../Header";
import { Main } from "../Main";
import { Aside } from "../Aside";
import { AddSpeciesForm } from "../Form";
import { BasicTable } from "../Tables";
import { ExactSpeciesTable } from "../Tables";
import { Login } from "../Auth";
import { Registrate } from "../Auth";
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
      <Main>
        <Header />
        {alert.message && (
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        )}
        <Switch>
          <Route path="/" exact component={BasicTable} />
          <Route path="/species/:speciesId" component={ExactSpeciesTable} />
          <Route path="/add-species" component={AddSpeciesForm} />
          <Route path="/login" component={Login} />
          <Route path="/registrate" component={Registrate} />
          <Redirect from="*" to="/" />
        </Switch>
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
