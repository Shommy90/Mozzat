import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import "./assets/styles/reset.scss";
import "./assets/styles/main.scss";
import App from "./App";

const app = (
  <HashRouter>
    <App />
  </HashRouter>
);

ReactDOM.render(app, document.getElementById("root"));
