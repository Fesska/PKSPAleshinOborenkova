import React, { useContext, useEffect, useState } from "react";
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

function Schedule() {
  const { db, auth } = useContext(context);
  const [userAuth] = useAuthState(auth);

  const [users, setUsers] = useState();
  const [week, setWeek] = useState(false);
  const [schMon, setSchMon] = useState([]);
  const [schTue, setSchTue] = useState([]);
  const [schWed, setSchWed] = useState([]);
  const [schThu, setSchThu] = useState([]);
  const [schFri, setSchFri] = useState([]);
  const [schMonUp, setSchMonUp] = useState([]);
  const [schTueUp, setSchTueUp] = useState([]);
  const [schWedUp, setSchWedUp] = useState([]);
  const [schThuUp, setSchThuUp] = useState([]);
  const [schFriUp, setSchFriUp] = useState([]);
  const [schMonDown, setSchMonDown] = useState([]);
  const [schTueDown, setSchTueDown] = useState([]);
  const [schWedDown, setSchWedDown] = useState([]);
  const [schThuDown, setSchThuDown] = useState([]);
  const [schFriDown, setSchFriDown] = useState([]);

  const usersCollectionRef = collection(db, "users");
  const q = query(usersCollectionRef, where("UID", "==", auth.currentUser.uid));

  const handleUpdate = async (id) => {};

  useEffect(() => {
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

        // Запросы для верхней недели
        const queryMonUp = query(
          scheduleCollectionRef,
          where("dayOfWeek", "==", "Понедельник"),
          where("upOrDown", "==", false)
        );
        const queryTueUp = query(
          scheduleCollectionRef,
          where("dayOfWeek", "==", "Вторник"),
          where("upOrDown", "==", false)
        );
        const queryWedUp = query(
          scheduleCollectionRef,
          where("dayOfWeek", "==", "Среда"),
          where("upOrDown", "==", false)
        );
        const queryThuUp = query(
          scheduleCollectionRef,
          where("dayOfWeek", "==", "Четверг"),
          where("upOrDown", "==", false)
        );
        const queryFriUp = query(
          scheduleCollectionRef,
          where("dayOfWeek", "==", "Пятница"),
          where("upOrDown", "==", false)
        );

        // Запросы для нижней недели
        const queryMonDown = query(
          scheduleCollectionRef,
          where("dayOfWeek", "==", "Понедельник"),
          where("upOrDown", "==", true)
        );
        const queryTueDown = query(
          scheduleCollectionRef,
          where("dayOfWeek", "==", "Вторник"),
          where("upOrDown", "==", true)
        );
        const queryWedDown = query(
          scheduleCollectionRef,
          where("dayOfWeek", "==", "Среда"),
          where("upOrDown", "==", true)
        );
        const queryThuDown = query(
          scheduleCollectionRef,
          where("dayOfWeek", "==", "Четверг"),
          where("upOrDown", "==", true)
        );
        const queryFriDown = query(
          scheduleCollectionRef,
          where("dayOfWeek", "==", "Пятница"),
          where("upOrDown", "==", true)
        );

        // Расписание для верхней недели
        const monUp = await getDocs(queryMonUp);
        setSchMonUp(monUp.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

        const tueUp = await getDocs(queryTueUp);
        setSchTueUp(tueUp.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

        const wedUp = await getDocs(queryWedUp);
        setSchWedUp(wedUp.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

        const thuUp = await getDocs(queryThuUp);
        setSchThuUp(thuUp.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

        const friUp = await getDocs(queryFriUp);
        setSchFriUp(friUp.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

        // Расписание для нижней недели
        const monDown = await getDocs(queryMonDown);
        setSchMonDown(
          monDown.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );

        const tueDown = await getDocs(queryTueDown);
        setSchTueDown(
          tueDown.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );

        const wedDown = await getDocs(queryWedDown);
        setSchWedDown(
          wedDown.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );

        const thuDown = await getDocs(queryThuDown);
        setSchThuDown(
          thuDown.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );

        const friDown = await getDocs(queryFriDown);
        setSchFriDown(
          friDown.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      };
      getSchedule();

      if (week) {
        setSchMon(schMonDown);
        setSchTue(schTueDown);
        setSchWed(schWedDown);
        setSchThu(schThuDown);
        setSchFri(schFriDown);
      } else {
        setSchMon(schMonUp);
        setSchTue(schTueUp);
        setSchWed(schWedUp);
        setSchThu(schThuUp);
        setSchFri(schFriUp);
      }
    }
  }, [
    usersCollectionRef,
    db,
    q,
    userAuth,
    week,
    schMonDown,
    schTueDown,
    schWedDown,
    schThuDown,
    schFriDown,
    schMonUp,
    schTueUp,
    schWedUp,
    schThuUp,
    schFriUp,
  ]);

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
          label="Четная неделя"
        />
      </FormControl>
      <Container>
        <Typography align={"center"} variant={"h5"}>
          Понедельник
        </Typography>
        {schMon
          .sort((a, b) => {
            if (a.number > b.number) return 1;
            else return -1;
          })
          .map((lecture) => (
            <div key={lecture.id}>
              <ScheduleCard lecture={lecture} handleUpdate={handleUpdate} />
            </div>
          ))}
      </Container>
      <Container>
        <Typography align={"center"} variant={"h5"}>
          Вторник
        </Typography>
        {schTue
          .sort((a, b) => {
            if (a.number > b.number) return 1;
            else return -1;
          })
          .map((lecture) => (
            <div key={lecture.id}>
              <ScheduleCard lecture={lecture} handleUpdate={handleUpdate} />
            </div>
          ))}
      </Container>
      <Container>
        <Typography align={"center"} variant={"h5"}>
          Среда
        </Typography>
        {schWed
          .sort((a, b) => {
            if (a.number > b.number) return 1;
            else return -1;
          })
          .map((lecture) => (
            <div key={lecture.id}>
              <ScheduleCard lecture={lecture} handleUpdate={handleUpdate} />
            </div>
          ))}
      </Container>
      <Container>
        <Typography align={"center"} variant={"h5"}>
          Четверг
        </Typography>
        {schThu
          .sort((a, b) => {
            if (a.number > b.number) return 1;
            else return -1;
          })
          .map((lecture) => (
            <div key={lecture.id}>
              <ScheduleCard lecture={lecture} handleUpdate={handleUpdate} />
            </div>
          ))}
      </Container>
      <Container>
        <Typography align={"center"} variant={"h5"}>
          Пятница
        </Typography>
        {schFri
          .sort((a, b) => {
            if (a.number > b.number) return 1;
            else return -1;
          })
          .map((lecture) => (
            <div key={lecture.id}>
              <ScheduleCard lecture={lecture} handleUpdate={handleUpdate} />
            </div>
          ))}
      </Container>
    </Grid>
  );
}

export default Schedule;
