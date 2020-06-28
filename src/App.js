import React from "react";
import "./styles.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Default from "./components/Default";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route component={Default} />
      </Switch>
    </React.Fragment>
  );
}
