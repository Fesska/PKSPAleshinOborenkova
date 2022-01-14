import React from "react";
import { Card, Container, Typography } from "@mui/material";

function SessionCard({ exam }) {
  return (
    <Container style={{ marginTop: `10px` }} fixed={true}>
      <Card
        square={false}
        style={{ marginTop: `5px`, backgroundColor: `#e5e5e5`, width: 400 }}
      >
        <Typography align={"center"} variant={"body1"} gutterBottom>
          {exam.dateExam}
        </Typography>
        <Typography align={"center"} variant={"body1"} gutterBottom>
          {exam.timeExam}
        </Typography>
        <Typography align={"center"} variant={"body1"}>
          {exam.subject}
        </Typography>
      </Card>
    </Container>
  );
}

export default SessionCard;
