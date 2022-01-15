import React, { useContext, useState } from "react";
import { Container, Grid } from "@mui/material";
import LecturerCard from "../components/cards/LecturerCard";
import { collection, getDocs, query, where } from "firebase/firestore";
import context from "../index";

function Lecturers() {
  const { db, auth } = useContext(context);

  const [users, setUsers] = useState();
  const [lecturers, setLecturers] = useState([]);

  const usersCollectionRef = collection(db, "users");

  const q = query(usersCollectionRef, where("UID", "==", auth.currentUser.uid));

  const getLecturers = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    const user = await getDocs(q);
    const userRef = user.docs.pop().data();
    const group = userRef.group;

    const lecturersCollectionRef = collection(
      db,
      "groups/" + group + "/Lecturers"
    );

    const lec = await getDocs(lecturersCollectionRef);
    setLecturers(lec.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  getLecturers();

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
        <Container>
          {lecturers.map((lecturer) => (
            <div key={lecturer.id}>
              <LecturerCard lecturer={lecturer} />
            </div>
          ))}
        </Container>
      </Grid>
    </Grid>
  );
}

export default Lecturers;
