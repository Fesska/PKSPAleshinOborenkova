import React, { useContext, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button, Container, FormControl, TextField } from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";
import context from "../../index";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";

const useStyles = makeStyles({
  field: {
    "&&": {
      marginTop: 20,
      marginBottom: 20,
      display: "block",
    },
  },
});

function AddSessionForm() {
  const classes = useStyles();

  const [users, setUsers] = useState();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [subj, setSubj] = useState("");
  const [format, setFormat] = useState("");

  const [dateErr, setDateErr] = useState(false);
  const [subjErr, setSubjErr] = useState(false);
  const [timeErr, setTimeErr] = useState(false);
  const [formatErr, setFormatErr] = useState(false);

  const { db, auth } = useContext(context);
  const usersCollectionRef = collection(db, "users");

  const handleSubmit = (e) => {
    e.preventDefault();

    setDateErr(false);
    setSubjErr(false);
    setTimeErr(false);
    setFormatErr(false);

    if (subj === "") {
      setSubjErr(true);
    }
    if (time === "") {
      setTimeErr(true);
    }
    if (date === "") {
      setDateErr(true);
    }
    if (format === "") {
      setFormatErr(true);
    }

    if (subj && time && date && format) {
      const getData = async () => {
        const q = query(
          usersCollectionRef,
          where("UID", "==", auth.currentUser.uid)
        );
        const data = await getDocs(usersCollectionRef);

        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

        const user = await getDocs(q);
        const userRef = user.docs.pop().data();
        const group = userRef.group;

        const sessionCollectionRef = collection(
          db,
          "groups/" + group + "/Session"
        );

        await addDoc(sessionCollectionRef, {
          dateExam: date,
          format: format,
          subject: subj,
          timeExam: time,
        });
        console.log(date, subj, time, format, group);
      };

      getData();
    }
  };

  return (
    <Container maxWidth={"xs"}>
      <form noValidate autoComplete={"off"} onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setDate(e.target.value)}
          style={{ width: 400 }}
          className={classes.field}
          label={"Дата"}
          variant={"outlined"}
          color={"secondary"}
          fullWidth
          required
          error={dateErr}
        />
        <TextField
          onChange={(e) => setTime(e.target.value)}
          style={{ width: 400 }}
          className={classes.field}
          label={"Время"}
          variant={"outlined"}
          color={"secondary"}
          fullWidth
          required
          error={timeErr}
        />
        <TextField
          onChange={(e) => setSubj(e.target.value)}
          style={{ width: 400 }}
          className={classes.field}
          label={"Предмет"}
          variant={"outlined"}
          color={"secondary"}
          fullWidth
          required
          error={subjErr}
        />
        <TextField
          onChange={(e) => setFormat(e.target.value)}
          style={{ width: 400 }}
          className={classes.field}
          label={"Аудитория/Дистант"}
          variant={"outlined"}
          color={"secondary"}
          fullWidth
          required
          error={formatErr}
        />

        <FormControl fullWidth>
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

export default AddSessionForm;
