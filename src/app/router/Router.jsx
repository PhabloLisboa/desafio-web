import React, { useState, useEffect } from "react";
import routes from "./routerConfigs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ExternalLayout from "../layout/external";
import InternalLayout from "../layout/internal";
import { useSelector } from "react-redux";

export default function RouterMounted() {
  const logged = useSelector((state) => state.Auth.logged);
  const Layout = logged ? InternalLayout : ExternalLayout;
  return (
    <Router>
      <Switch>
        <Layout>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} exact>
              {route.component()}
            </Route>
          ))}
        </Layout>
      </Switch>
    </Router>
  );
}
