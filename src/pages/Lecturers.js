import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Grid } from "@mui/material";
import LecturerCard from "../components/LecturerCard";
import { collection, getDocs } from "firebase/firestore";
import { KeyboardArrowRight } from "@mui/icons-material";
import context from "../index";

function Lecturers() {
  const { db } = useContext(context);

  const [users, setUsers] = useState();
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  });

  const handleSubmit = () => {
    users.map((user) => {
      console.log(user.group, user.rights);
    });
  };

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
          <Button
            type={"submit"}
            color={"primary"}
            variant={"contained"}
            endIcon={<KeyboardArrowRight />}
            fullWidth
            onClick={handleSubmit}
          >
            Paste Data
          </Button>
          <LecturerCard />
          <LecturerCard />
          <LecturerCard />
          <LecturerCard />
        </Container>
      </Grid>
    </Grid>
  );
}

export default Lecturers;
