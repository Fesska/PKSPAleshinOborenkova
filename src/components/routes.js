//Здесь все возможные роуты на сайте
import {
  LOGIN_ROUTE,
  SCHEDULE_ROUTE,
  SESSION_ROUTE,
  LECTURERS_ROUTE,
  ADD_ROUTE,
  REFACTOR_ROUTE,
} from "../utils/consts";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Session from "../pages/Session";
import Lecturers from "../pages/Lecturers";

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
    Component: Session,
  },
  {
    path: LECTURERS_ROUTE,
    Component: Lecturers,
  },
];

export const protectedRoutes = [
  {
    path: SCHEDULE_ROUTE,
    Component: Home,
  },
  {
    path: SESSION_ROUTE,
    Component: Session,
  },
  {
    path: LECTURERS_ROUTE,
    Component: Lecturers,
  },
  {
    path: ADD_ROUTE,
    Component: Home,
  },
  {
    path: REFACTOR_ROUTE,
    Component: Home,
  },
];
