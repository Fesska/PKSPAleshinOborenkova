import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import ScheduleCard from "./cards/ScheduleCard";

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
        <Typography align={"center"} variant={"h5"}>
          Понедельник
        </Typography>
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
      </Container>
      <Container>
        <Typography align={"center"} variant={"h5"}>
          Вторник
        </Typography>
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
      </Container>
      <Container>
        <Typography align={"center"} variant={"h5"}>
          Среда
        </Typography>
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
      </Container>
      <Container>
        <Typography align={"center"} variant={"h5"}>
          Четверг
        </Typography>
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
      </Container>
      <Container>
        <Typography align={"center"} variant={"h5"}>
          Пятница
        </Typography>
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
