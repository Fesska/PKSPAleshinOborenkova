import React from "react";
import { Card, Container, Divider, Grid, Typography } from "@mui/material";

function ScheduleCard() {
  return (
    <Container style={{ marginTop: `10px` }} fixed={"true"}>
      <Card
        square={"false"}
        style={{ marginTop: `5px`, backgroundColor: `#e5e5e5`, width: 400 }}
      >
        <Grid container columns={2} marginTop={1} wrap={"nowrap"}>
          <Grid flex item marginRight={2}>
            <Typography
              align={"left"}
              gutterBottom
              marginTop={3}
              marginLeft={2}
              variant={"body2"}
            >
              02:28
            </Typography>
            <Typography align={"left"} marginLeft={2} variant={"body2"}>
              14:88
            </Typography>
          </Grid>
          <Divider orientation={"vertical"} flexItem />
          <Grid flex item marginRight={1} marginLeft={1}>
            <Typography align={"center"} variant={"h5"}>
              Проектирование клиент-серверных приложений
            </Typography>
            <Typography align={"center"} variant={"body2"}>
              (Лекция)
            </Typography>
            <Typography align={"center"} variant={"body2"} color={"#77b546"}>
              Дистанционно
            </Typography>
            <Typography align={"center"} variant={"body1"}>
              Городничев М. Г.
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}

export default ScheduleCard;
