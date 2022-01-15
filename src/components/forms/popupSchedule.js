import React, { useState } from "react";
import {
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
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

function PopupSchedule(props) {
  const { header, openPopup, setOpenPopup, lecture, handleUpdate } = props;

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

    if (title && lecturer && place && type && time && date) {
      handleUpdate(title, lecturer, place, type, time, date, week);
    }
  };

  return (
    <Dialog open={openPopup}>
      <DialogTitle>
        <div style={{ display: "flex" }}>
          <Typography variant={"h6"} style={{ flexGrow: 1 }}>
            {header}
          </Typography>
          <Button
            type={"submit"}
            color={"primary"}
            variant={"contained"}
            onClick={() => {
              setOpenPopup(false);
            }}
          >
            X
          </Button>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <Container maxWidth={"xs"}>
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
                error={typeErr}
              >
                <MenuItem value={"Лекция"}>Лекция</MenuItem>
                <MenuItem value={"Практическая"}>Практическая</MenuItem>
                <MenuItem value={"Лабораторная"}>Лабораторная</MenuItem>
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
                error={timeErr}
              >
                <MenuItem value={"09:30 - 11:05"}>09:30 - 11:05</MenuItem>
                <MenuItem value={"11:20 - 12:55"}>11:20 - 12:55</MenuItem>
                <MenuItem value={"13:10 - 14:45"}>13:10 - 14:45</MenuItem>
                <MenuItem value={"15:25 - 17:00"}>15:25 - 17:00</MenuItem>
                <MenuItem value={"17:15 - 18:50"}>17:15 - 18:50</MenuItem>
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
                error={dateErr}
              >
                <MenuItem value={"Понедельник"}>Понедельник</MenuItem>
                <MenuItem value={"Вторник"}>Вторник</MenuItem>
                <MenuItem value={"Среда"}>Среда</MenuItem>
                <MenuItem value={"Четверг"}>Четверг</MenuItem>
                <MenuItem value={"Пятница"}>Пятница</MenuItem>
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
      </DialogContent>
    </Dialog>
  );
}

export default PopupSchedule;
