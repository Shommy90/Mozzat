import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
import ReactModal from "react-modal";

import "./assets/styles/reset.scss";
import "./assets/styles/main.scss";
import App from "./App";
import ScrollMemory from "react-router-scroll-memory";

ReactModal.setAppElement("#root");

const app = (
  <HashRouter>
    <ScrollMemory />
    <App />
  </HashRouter>
);

ReactDOM.render(app, document.getElementById("root"));
