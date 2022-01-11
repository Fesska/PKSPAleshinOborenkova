import React from "react";
import SessionCard from "../components/SessionCard";
import { Container, Grid } from "@mui/material";

function Session() {
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
          <SessionCard />
          <SessionCard />
          <SessionCard />
        </Container>
      </Grid>
    </Grid>
  );
}

export default Session;
