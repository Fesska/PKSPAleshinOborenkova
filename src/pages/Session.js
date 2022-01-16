import React, { useContext, useState } from "react";
import SessionCard from "../components/cards/SessionCard";
import { Container, Grid } from "@mui/material";
import context from "../index";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

function Session() {
  const { db, auth } = useContext(context);
  const [userAuth] = useAuthState(auth);

  const [users, setUsers] = useState();
  const [exams, setExams] = useState([]);

  if (userAuth) {
    const getExams = async () => {
      const usersCollectionRef = collection(db, "users");

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

      const lec = await getDocs(sessionCollectionRef);
      setExams(lec.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getExams();
  }

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
