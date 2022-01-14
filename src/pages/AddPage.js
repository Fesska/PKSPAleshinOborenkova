import React, { useState } from "react";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import AddScheduleForm from "../components/forms/AddScheduleForm";
import { makeStyles } from "@mui/styles";
import AddLecturerForm from "../components/forms/AddLecturerForm";
import AddSessionForm from "../components/forms/AddSessionForm";

const useStyles = makeStyles((theme) => ({
  control: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    minWidth: 200,
  },
}));

function AddPage() {
  const classes = useStyles();

  const [field, setField] = useState("schedule");

  if (field === "schedule")
    return (
      <Grid
        container
        spacing={0}
        direction={"column"}
        alignItems={"center"}
        justify={"center"}
        style={{ minHeight: "100vh" }}
      >
        <Grid item>
          <FormControl fullWidth style={{ marginTop: 15 }}>
            <InputLabel id={"typeLabel"}>Элемент для добавления</InputLabel>
            <Select
              className={classes.control}
              labelId="typeLabel"
              id="typeSelect"
              value={field}
              label="Type"
              onChange={(e) => setField(e.target.value)}
            >
              <MenuItem value={"schedule"}>Расписание</MenuItem>
              <MenuItem value={"session"}>Сессия</MenuItem>
              <MenuItem value={"lecturer"}>Преподаватель</MenuItem>
            </Select>
          </FormControl>

          <AddScheduleForm />
        </Grid>
      </Grid>
    );
  else if (field === "lecturer")
    return (
      <Grid
        container
        spacing={0}
        direction={"column"}
        alignItems={"center"}
        justify={"center"}
        style={{ minHeight: "100vh" }}
      >
        <Grid item>
          <FormControl fullWidth style={{ marginTop: 15 }}>
            <InputLabel id={"typeLabel"}>Элемент для добавления</InputLabel>
            <Select
              className={classes.control}
              labelId="typeLabel"
              id="typeSelect"
              value={field}
              label="Type"
              onChange={(e) => setField(e.target.value)}
            >
              <MenuItem value={"schedule"}>Расписание</MenuItem>
              <MenuItem value={"session"}>Сессия</MenuItem>
              <MenuItem value={"lecturer"}>Преподаватель</MenuItem>
            </Select>
          </FormControl>

          <AddLecturerForm />
        </Grid>
      </Grid>
    );
  else
    return (
      <Grid
        container
        spacing={0}
        direction={"column"}
        alignItems={"center"}
        justify={"center"}
        style={{ minHeight: "100vh" }}
      >
        <Grid item>
          <FormControl fullWidth style={{ marginTop: 15 }}>
            <InputLabel id={"typeLabel"}>Элемент для добавления</InputLabel>
            <Select
              className={classes.control}
              labelId="typeLabel"
              id="typeSelect"
              value={field}
              label="Type"
              onChange={(e) => setField(e.target.value)}
            >
              <MenuItem value={"schedule"}>Расписание</MenuItem>
              <MenuItem value={"session"}>Сессия</MenuItem>
              <MenuItem value={"lecturer"}>Преподаватель</MenuItem>
            </Select>
          </FormControl>

          <AddSessionForm />
        </Grid>
      </Grid>
    );
}

export default AddPage;
