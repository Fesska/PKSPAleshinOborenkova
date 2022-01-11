import React from "react";
import { Container, Grid } from "@mui/material";
import LecturerCard from "../components/LecturerCard";

function Lecturers() {
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
