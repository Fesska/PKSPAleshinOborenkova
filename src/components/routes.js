//Здесь все возможные роуты на сайте
import {
  LOGIN_ROUTE,
  SCHEDULE_ROUTE,
  SESSION_ROUTE,
  LECTURERS_ROUTE,
} from "../utils/consts";
import Login from "./Login";
import Home from "./Home";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
];

export const privateRoutes = [
  {
    path: SCHEDULE_ROUTE,
    Component: Home,
  },
  {
    path: SESSION_ROUTE,
    Component: Home,
  },
  {
    path: LECTURERS_ROUTE,
    Component: Home,
  },
];
