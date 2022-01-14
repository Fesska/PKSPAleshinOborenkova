//Навигационная панель
import React, { useContext } from "react";
import { makeStyles } from "@mui/styles";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PeopleIcon from "@mui/icons-material/People";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  ADD_ROUTE,
  LECTURERS_ROUTE,
  REFACTOR_ROUTE,
  SCHEDULE_ROUTE,
  SESSION_ROUTE,
} from "../utils/consts";
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useHistory, useLocation } from "react-router-dom";
import { KeyboardArrowRight } from "@mui/icons-material";
import context from "../index";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    title: {
      padding: theme.spacing(2),
    },
    active: {
      "&&": {
        background: "#e5e5e5",
      },
    },
  };
});

function Navbar() {
  const { auth } = useContext(context);
  const { userRights, setUserRights } = useContext(context);
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  let menuItems;

  if (userRights) {
    menuItems = [
      {
        text: "Расписание",
        icon: <VisibilityIcon color={"primary"} />,
        path: SCHEDULE_ROUTE,
      },
      {
        text: "Сессия",
        icon: <CollectionsBookmarkIcon color={"primary"} />,
        path: SESSION_ROUTE,
      },
      {
        text: "Преподаватели",
        icon: <PeopleIcon color={"primary"} />,
        path: LECTURERS_ROUTE,
      },
      {
        text: "Изменить",
        icon: <EditIcon color={"primary"} />,
        path: REFACTOR_ROUTE,
      },
      {
        text: "Добавить",
        icon: <AddCircleIcon color={"primary"} />,
        path: ADD_ROUTE,
      },
    ];
  } else {
    menuItems = [
      {
        text: "Расписание",
        icon: <VisibilityIcon color={"primary"} />,
        path: SCHEDULE_ROUTE,
      },
      {
        text: "Сессия",
        icon: <CollectionsBookmarkIcon color={"primary"} />,
        path: SESSION_ROUTE,
      },
      {
        text: "Преподаватели",
        icon: <PeopleIcon color={"primary"} />,
        path: LECTURERS_ROUTE,
      },
    ];
  }

  return (
    <Drawer
      className={classes.drawer}
      variant={"permanent"}
      anchor={"left"}
      classes={{ paper: classes.drawerPaper }}
    >
      <div>
        <Typography variant={"h5"} className={classes.title}>
          Schedule App
        </Typography>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <Button
          type={"submit"}
          color={"primary"}
          variant={"contained"}
          endIcon={<KeyboardArrowRight />}
          onClick={() => {
            auth.signOut();
            setUserRights(false);
          }}
          fullWidth
        >
          Выйти
        </Button>
      </div>
    </Drawer>
  );
}

export default Navbar;
