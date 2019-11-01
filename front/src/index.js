import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.scss";

import { store } from "./helpers";
import { App } from "./components/App/App";

const root = document.getElementById("root");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
