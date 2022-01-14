import React, { useContext, useState } from "react";
import { Button, Container, FormControl, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { KeyboardArrowRight } from "@mui/icons-material";
import context from "../../index";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

const useStyles = makeStyles({
  field: {
    "&&": {
      marginTop: 20,
      marginBottom: 20,
      display: "block",
    },
  },
});

function AddLecturerForm() {
  const classes = useStyles();

  const [users, setUsers] = useState();

  const [lecturer, setLecturer] = useState("");
  const [subj, setSubj] = useState("");
  const [type, setType] = useState("");

  const [lecturerErr, setLecturerErr] = useState(false);
  const [subjErr, setSubjErr] = useState(false);
  const [typeErr, setTypeErr] = useState(false);

  const { db, auth } = useContext(context);
  const usersCollectionRef = collection(db, "users");

  const handleSubmit = (e) => {
    e.preventDefault();

    setLecturerErr(false);
    setSubjErr(false);
    setTypeErr(false);

    if (lecturer === "") {
      setLecturerErr(true);
    }
    if (subj === "") {
      setSubjErr(true);
    }
    if (type === "") {
      setTypeErr(true);
    }

    if (lecturer && subj && type) {
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

        const lecturerCollectionRef = collection(
          db,
          "groups/" + group + "/Lecturers"
        );

        await addDoc(lecturerCollectionRef, {
          name: lecturer,
          subjType: type,
          subject: subj,
        });
        console.log(lecturer, subj, type);
      };
      getData();
    }
  };

  return (
    <Container maxWidth={"xs"}>
      <form noValidate autoComplete={"off"} onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setLecturer(e.target.value)}
          style={{ width: 400 }}
          className={classes.field}
          label={"ФИО преподавателя"}
          variant={"outlined"}
          color={"secondary"}
          fullWidth
          required
          error={lecturerErr}
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
          onChange={(e) => setType(e.target.value)}
          style={{ width: 400 }}
          className={classes.field}
          label={"Тип занятий"}
          variant={"outlined"}
          color={"secondary"}
          fullWidth
          required
          error={typeErr}
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

export default AddLecturerForm;
