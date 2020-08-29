import React from "react";
import UserScreen from "../screens/UserScreen";
import AboutScreen from "../screens/AboutScreen";
import HomeScreen from "../screens/HomeScreen";

import { Link } from "react-router-dom";
export const routes = [
  {
    path: "/",
    component: HomeScreen,
    exact: true,
  },
  {
    path: "/about",
    component: AboutScreen,
  },
  {
    path: "/users",
    component: UserScreen,
  },
];

export const Root = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </ul>
  );
};
