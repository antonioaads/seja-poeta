import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Main from "../pages/Main";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Main} exact />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
