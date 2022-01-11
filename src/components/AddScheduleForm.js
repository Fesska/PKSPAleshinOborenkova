import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  field: {
    "&&": {
      marginTop: 20,
      marginBottom: 20,
      display: "block",
    },
  },

  control: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    minWidth: 200,
  },
}));

function AddScheduleForm() {
  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [lecturer, setLecturer] = useState("");
  const [place, setPlace] = useState("");
  const [type, setType] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [week, setWeek] = useState(false);

  const [titleErr, setTitleErr] = useState(false);
  const [lecturerErr, setLecturerErr] = useState(false);
  const [placeErr, setPlaceErr] = useState(false);
  const [typeErr, setTypeErr] = useState(false);
  const [timeErr, setTimeErr] = useState(false);
  const [dateErr, setDateErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleErr(false);
    setLecturerErr(false);
    setPlaceErr(false);
    setTypeErr(false);
    setTimeErr(false);
    setDateErr(false);

    if (title === "") {
      setTitleErr(true);
    }
    if (lecturer === "") {
      setLecturerErr(true);
    }
    if (place === "") {
      setPlaceErr(true);
    }
    if (type === "") {
      setTypeErr(true);
    }
    if (time === "") {
      setTimeErr(true);
    }
    if (date === "") {
      setDateErr(true);
    }

    console.log(title, lecturer, place, type, time, date, week);
  };

  return (
    <Container maxWidth={"xs"}>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Добавить элемент
      </Typography>

      <form noValidate autoComplete={"off"} onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label={"Название"}
          variant={"outlined"}
          color={"secondary"}
          fullWidth
          required
          error={titleErr}
        />
        <TextField
          onChange={(e) => setLecturer(e.target.value)}
          className={classes.field}
          label={"Преподаватель"}
          variant={"outlined"}
          color={"secondary"}
          fullWidth
          required
          error={lecturerErr}
        />
        <TextField
          onChange={(e) => setPlace(e.target.value)}
          className={classes.field}
          label={"Кабинет / Дистант"}
          variant={"outlined"}
          color={"secondary"}
          fullWidth
          required
          error={placeErr}
        />

        <FormControl fullWidth>
          <InputLabel id={"typeLabel"}>Тип занятия</InputLabel>
          <Select
            className={classes.control}
            labelId="typeLabel"
            id="typeSelect"
            value={type}
            label="Type"
            onChange={(e) => setType(e.target.value)}
          >
            <MenuItem value={"lec"}>Лекция</MenuItem>
            <MenuItem value={"pz"}>Практика</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id={"timeLabel"}>Время</InputLabel>
          <Select
            className={classes.control}
            labelId="timeLabel"
            id="timeSelect"
            value={time}
            label="Time"
            onChange={(e) => setTime(e.target.value)}
          >
            <MenuItem value={"09:30 - 11:05"}>09:30 - 11:05</MenuItem>
            <MenuItem value={"11:15 - 12:50"}>11:15 - 12:50</MenuItem>
            <MenuItem value={"13:00 - 14:35"}>13:00 - 14:35</MenuItem>
            <MenuItem value={"15:10 - 16:45"}>15:10 - 16:45</MenuItem>
            <MenuItem value={"16:55 - 18:25"}>16:55 - 18:25</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id={"dayLabel"}>День недели</InputLabel>
          <Select
            className={classes.control}
            labelId="dayLabel"
            id="daySelect"
            value={date}
            label="Day"
            onChange={(e) => setDate(e.target.value)}
          >
            <MenuItem value={"mon"}>Понедельник</MenuItem>
            <MenuItem value={"tue"}>Вторник</MenuItem>
            <MenuItem value={"wed"}>Среда</MenuItem>
            <MenuItem value={"thur"}>Четверг</MenuItem>
            <MenuItem value={"frid"}>Пятница</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <FormControlLabel
            control={
              <Switch
                checked={week}
                onChange={(e) => setWeek(e.target.checked.valueOf())}
              />
            }
            label="Четная неделя"
          />
          <Button
            type={"submit"}
            color={"primary"}
            variant={"contained"}
            endIcon={<KeyboardArrowRight />}
            fullWidth
          >
            Добавить
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}

export default AddScheduleForm;
