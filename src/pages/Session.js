import React, { useContext, useEffect, useState } from "react";
import SessionCard from "../components/cards/SessionCard";
import { Container, Grid } from "@mui/material";
import context from "../index";
import { collection, getDocs, query, where } from "firebase/firestore";

function Session() {
  const { db, auth } = useContext(context);

  const [users, setUsers] = useState();
  const [exams, setExams] = useState([]);

  const usersCollectionRef = collection(db, "users");

  const q = query(usersCollectionRef, where("UID", "==", auth.currentUser.uid));

  const getExams = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    const user = await getDocs(q);
    const userRef = user.docs.pop().data();
    const group = userRef.group;

    const sessionCollectionRef = collection(db, "groups/" + group + "/Session");

    const lec = await getDocs(sessionCollectionRef);
    setExams(lec.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getExams();
  });

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
          {exams.map((exam) => (
            <div key={exam.id}>
              <SessionCard exam={exam} />
            </div>
          ))}
        </Container>
      </Grid>
    </Grid>
  );
}

export default Session;
