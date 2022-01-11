import React from "react";
import { Card, Container, Typography } from "@mui/material";

function SessionCard() {
  return (
    <Container style={{ marginTop: `10px` }} fixed={"true"}>
      <Card
        square={"false"}
        style={{ marginTop: `5px`, backgroundColor: `#e5e5e5`, width: 400 }}
      >
        <Typography align={"center"} variant={"body1"} gutterBottom>
          06.02.2022
        </Typography>
        <Typography align={"center"} variant={"body1"} gutterBottom>
          09:30
        </Typography>
        <Typography align={"center"} variant={"body1"}>
          Проектирование клиент-серверных приложений
        </Typography>
      </Card>
    </Container>
  );
}

export default SessionCard;
