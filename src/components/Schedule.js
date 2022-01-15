import React, { useContext, useState } from "react";
import {
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Switch,
  Typography,
} from "@mui/material";
import ScheduleCard from "./cards/ScheduleCard";
import context from "../index";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import PopupSchedule from "./forms/popupSchedule";

function Schedule() {
  const { db, auth } = useContext(context);
  const [userAuth] = useAuthState(auth);

  const [users, setUsers] = useState();
  const [week, setWeek] = useState(false);
  const [schedule, setSchedule] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [currentLecture, setCurrentLecture] = useState();

  const usersCollectionRef = collection(db, "users");
  const q = query(usersCollectionRef, where("UID", "==", auth.currentUser.uid));

  const handleClick = () => {
    setOpenPopup(true);
  };

  const switchNumber = (time) => {
    switch (time) {
      case "09:30":
        return 1;
      case "11:20":
        return 2;
      case "13:10":
        return 3;
      case "15:25":
        return 4;
      case "17:15":
        return 5;
      default:
        return 0;
    }
  };

  const handleUpdate = (title, lecturer, place, type, time, date, week) => {
    const timeStart = time.split(" - ")[0];
    const timeEnd = time.split(" - ")[1];
    const number = switchNumber(timeStart);
    console.log(
      date,
      place,
      lecturer,
      number,
      title,
      timeStart,
      timeEnd,
      type,
      week
    );
  };

  if (userAuth) {
    const getSchedule = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      const user = await getDocs(q);
      const userRef = user.docs.pop().data();
      const group = userRef.group;

      const scheduleCollectionRef = collection(
        db,
        "groups/" + group + "/Schedule"
      );

      const scheduleRef = await getDocs(scheduleCollectionRef);
      setSchedule(
        scheduleRef.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getSchedule();
  }

  return (
    <Grid
      container
      direction={"row"}
      style={{ marginLeft: 240 }}
      columns={5}
      wrap={"nowrap"}
    >
      <FormControl>
        <FormControlLabel
          style={{ marginLeft: 10 }}
          control={
            <Switch
              checked={week}
              onChange={(e) => setWeek(e.target.checked.valueOf())}
            />
          }
          label="Неделя"
        />
      </FormControl>
      <Container>
        <Typography align={"center"} variant={"h5"}>
          Понедельник
        </Typography>
        {schedule
          .filter(
            (lecture) =>
              lecture.upOrDown === week && lecture.dayOfWeek === "Понедельник"
          )
          .sort((a, b) => {
            if (a.number > b.number) return 1;
            else return -1;
          })
          .map((lecture) => (
            <div key={lecture.id}>
              <ScheduleCard
                lecture={lecture}
                handleClick={handleClick}
                setCurrentLecture={setCurrentLecture}
              />
            </div>
          ))}
      </Container>
      <Container>
        <Typography align={"center"} variant={"h5"}>
          Вторник
        </Typography>
        {schedule
          .filter(
            (lecture) =>
              lecture.upOrDown === week && lecture.dayOfWeek === "Вторник"
          )
          .sort((a, b) => {
            if (a.number > b.number) return 1;
            else return -1;
          })
          .map((lecture) => (
            <div key={lecture.id}>
              <ScheduleCard
                lecture={lecture}
                handleClick={handleClick}
                setCurrentLecture={setCurrentLecture}
              />
            </div>
          ))}
      </Container>
      <Container>
        <Typography align={"center"} variant={"h5"}>
          Среда
        </Typography>
        {schedule
          .filter(
            (lecture) =>
              lecture.upOrDown === week && lecture.dayOfWeek === "Среда"
          )
          .sort((a, b) => {
            if (a.number > b.number) return 1;
            else return -1;
          })
          .map((lecture) => (
            <div key={lecture.id}>
              <ScheduleCard
                lecture={lecture}
                handleClick={handleClick}
                setCurrentLecture={setCurrentLecture}
              />
            </div>
          ))}
      </Container>
      <Container>
        <Typography align={"center"} variant={"h5"}>
          Четверг
        </Typography>
        {schedule
          .filter(
            (lecture) =>
              lecture.upOrDown === week && lecture.dayOfWeek === "Четверг"
          )
          .sort((a, b) => {
            if (a.number > b.number) return 1;
            else return -1;
          })
          .map((lecture) => (
            <div key={lecture.id}>
              <ScheduleCard
                lecture={lecture}
                handleClick={handleClick}
                setCurrentLecture={setCurrentLecture}
              />
            </div>
          ))}
      </Container>
      <Container>
        <Typography align={"center"} variant={"h5"}>
          Пятница
        </Typography>
        {schedule
          .filter(
            (lecture) =>
              lecture.upOrDown === week && lecture.dayOfWeek === "Пятница"
          )
          .sort((a, b) => {
            if (a.number > b.number) return 1;
            else return -1;
          })
          .map((lecture) => (
            <div key={lecture.id}>
              <ScheduleCard
                lecture={lecture}
                handleClick={handleClick}
                setCurrentLecture={setCurrentLecture}
              />
            </div>
          ))}
      </Container>
      <PopupSchedule
        header={"Изменить расписание"}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        lecture={currentLecture}
        handleUpdate={handleUpdate}
      />
    </Grid>
  );
}

export default Schedule;
