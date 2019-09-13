import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { App } from "./components/App/App";
import "./styles/app.scss";

const root = document.getElementById("root");
render(<App />, root);
