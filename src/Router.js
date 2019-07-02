import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home/index";
import About from "./pages/About/index";
import Gallery from "./pages/Gallery/index";
import Products from "./pages/Products/index";
import Contact from "./pages/Contact/index";
import B2B from "./pages/B2B/index";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/gallery" component={Gallery} />
    <Route path="/products" component={Products} />
    <Route path="/contact" component={Contact} />
    <Route path="/b2b" component={B2B} />
  </Switch>
);

export default Router;
