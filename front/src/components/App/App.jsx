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
  const [show, setShow] = useState([show]);
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
          <div className={`alert g-alert ${alert.type}`}>
            {alert.message}
            <button
              className="g-alert__close"
              aria-labelledby="Close Notification"
            >
              <span className="g-hide-visually">Close</span>
              <svg className="g-alert__close-icon" viewBox="0 0 40 40">
                <path d="M 10,10 L 30,30 M 30,10 L 10,30"></path>
              </svg>
            </button>
          </div>
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
