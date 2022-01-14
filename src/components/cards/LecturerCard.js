import React from "react";
import { Card, Container, Typography } from "@mui/material";

function LecturerCard({ lecturer }) {
  return (
    <Container style={{ marginTop: `10px` }} fixed={true}>
      <Card
        square={false}
        style={{ marginTop: `5px`, backgroundColor: `#e5e5e5`, width: 400 }}
      >
        <Typography align={"center"} variant={"body1"} gutterBottom>
          {lecturer.name}
        </Typography>
        <Typography align={"center"} variant={"body1"} gutterBottom>
          {lecturer.subject}
        </Typography>
        <Typography align={"center"} variant={"body2"}>
          {lecturer.subjType}
        </Typography>
      </Card>
    </Container>
  );
}

export default LecturerCard;
