// Все маршруты, по которым можно переходить

import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { LOGIN_ROUTE, SCHEDULE_ROUTE } from "../utils/consts";
import { privateRoutes, protectedRoutes, publicRoutes } from "./routes";
import { useAuthState } from "react-firebase-hooks/auth";
import context from "../index";

function AppRouter() {
  const { auth } = useContext(context);
  const { userRights } = useContext(context);
  const [userAuth] = useAuthState(auth);

  return userAuth ? (
    userRights ? (
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
