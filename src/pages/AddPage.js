import React, { useState } from "react";
import { Grid } from "@mui/material";
import AddScheduleForm from "../components/AddScheduleForm";

function AddPage() {
  const [field, setField] = useState("schedule");

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
        <AddScheduleForm />
      </Grid>
    </Grid>
  );
}

export default AddPage;
