// Все маршруты, по которым можно переходить

import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { LOGIN_ROUTE, SCHEDULE_ROUTE } from "../utils/consts";
import { privateRoutes, protectedRoutes, publicRoutes } from "./routes";

function AppRouter() {
  const user = true;
  const rights = false;
  return user ? (
    rights ? (
      <Switch>
        {protectedRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact={true} />
        ))}
        <Redirect to={SCHEDULE_ROUTE} />
      </Switch>
    ) : (
      <Switch>
        {privateRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact={true} />
        ))}
        <Redirect to={SCHEDULE_ROUTE} />
      </Switch>
    )
  ) : (
    <Switch>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact={true} />
      ))}
      <Redirect to={LOGIN_ROUTE} />
    </Switch>
  );
}

export default AppRouter;
