import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./assets/styles/reset.scss";
import "./assets/styles/main.scss";
import App from "./App";

const app = (
  <BrowserRouter basename="/Mozzat">
    <App />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
