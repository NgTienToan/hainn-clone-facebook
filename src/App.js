import React from "react";
import { routes } from "./routers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen"
import './App.scss'

export default function App() {
  return (
    <>
      {
        0 ? (
          <Router>
            <div>
              <Switch>
                {routes.map((route, i) => (
                  <RouteWithSubRoutes key={i} {...route} />
                ))}
              </Switch>
            </div>
          </Router>
        ) : (
          <LoginScreen />
        )
      }
    </>
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
