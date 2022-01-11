import React from "react";
import { Container, Grid } from "@mui/material";
import ScheduleCard from "./ScheduleCard";

function Schedule() {
  return (
    <Grid
      container
      direction={"row"}
      style={{ marginLeft: 240 }}
      columns={5}
      wrap={"nowrap"}
    >
      <Container>
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
      </Container>
      <Container>
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
      </Container>
      <Container>
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
      </Container>
      <Container>
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
      </Container>
      <Container>
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
      </Container>
    </Grid>
  );
}

export default Schedule;
