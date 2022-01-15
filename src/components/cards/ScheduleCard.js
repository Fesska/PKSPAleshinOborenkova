import React from "react";
import { Card, Container, Divider, Grid, Typography } from "@mui/material";

function ScheduleCard({ lecture, handleClick, setCurrentLecture }) {
  return (
    <Container style={{ marginTop: `10px` }} fixed={true}>
      <Card
        square={false}
        style={{
          marginTop: `5px`,
          backgroundColor: `#e5e5e5`,
          width: 300,
        }}
        onClick={() => {
          setCurrentLecture(lecture);
          handleClick();
        }}
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
              {lecture.timeBegining}
            </Typography>
            <Typography align={"left"} marginLeft={2} variant={"body2"}>
              {lecture.timeEnd}
            </Typography>
          </Grid>
          <Divider orientation={"vertical"} flexItem />
          <Grid container marginRight={1} marginLeft={0} direction={"column"}>
            <Grid flex item>
              <Typography align={"center"} variant={"body1"}>
                {lecture.subject}
              </Typography>
            </Grid>
            <Grid flex item>
              <Typography align={"center"} variant={"body2"}>
                {lecture.type}
              </Typography>
            </Grid>
            <Grid flex item>
              <Typography align={"center"} variant={"body2"} color={"#77b546"}>
                {lecture.format}
              </Typography>
            </Grid>
            <Grid flex item>
              <Typography align={"center"} variant={"body1"}>
                {lecture.lecturer}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}

export default ScheduleCard;
