//Навигационная панель
import React from "react";
import { makeStyles } from "@mui/styles";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PeopleIcon from "@mui/icons-material/People";
import {
  LECTURERS_ROUTE,
  SCHEDULE_ROUTE,
  SESSION_ROUTE,
} from "../utils/consts";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

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
        background: "#f4f4f4",
      },
    },
  };
});

function Navbar() {
  const classes = useStyles();

  const menuItems = [
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
            <ListItem button key={item.text}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
}

export default Navbar;
