//Здесь все возможные роуты на сайте
import {
  LOGIN_ROUTE,
  SCHEDULE_ROUTE,
  SESSION_ROUTE,
  LECTURERS_ROUTE,
  ADD_ROUTE,
} from "../utils/consts";
import Login from "../pages/Login";
import Session from "../pages/Session";
import Lecturers from "../pages/Lecturers";
import AddPage from "../pages/AddPage";
import Schedule from "../pages/Schedule";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
];

export const privateRoutes = [
  {
    path: SCHEDULE_ROUTE,
    Component: Schedule,
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
    Component: Schedule,
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
    Component: AddPage,
  },
];
