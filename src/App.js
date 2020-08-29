import React from "react";
import { routes, Root } from "./routers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss'

export default function App() {
  return (
    <Router>
      <div>
        <Root />
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}
