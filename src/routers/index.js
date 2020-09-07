import UserScreen from "../screens/UserScreen";
import AboutScreen from "../screens/AboutScreen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
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
  {
    path: "/login",
    component: LoginScreen
  }
];
