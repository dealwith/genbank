import React from "react";
import { render } from "react-dom";

import { App } from "./components/App/App";
import "./styles/app.scss";
import "normalize.css";

const root = document.getElementById("root");
render(<App />, root);
