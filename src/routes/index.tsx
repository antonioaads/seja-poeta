import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Main from "../pages/Main";
import Soneto from "../pages/Soneto";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Main} exact />
    <Route path="/soneto" component={Soneto} exact />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
