import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button, Container, FormControl, TextField } from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";

const useStyles = makeStyles({
  field: {
    "&&": {
      marginTop: 20,
      marginBottom: 20,
      display: "block",
    },
  },
});

function AddSessionForm() {
  const classes = useStyles();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [subj, setSubj] = useState("");

  const [dateErr, setDateErr] = useState(false);
  const [subjErr, setSubjErr] = useState(false);
  const [timeErr, setTimeErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setDateErr(false);
    setSubjErr(false);
    setTimeErr(false);

    if (subj === "") {
      setSubjErr(true);
    }
    if (time === "") {
      setTimeErr(true);
    }
    if (date === "") {
      setDateErr(true);
    }

    console.log(date, subj, time);
  };

  return (
    <Container maxWidth={"xs"}>
      <form noValidate autoComplete={"off"} onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setDate(e.target.value)}
          style={{ width: 400 }}
          className={classes.field}
          label={"Дата"}
          variant={"outlined"}
          color={"secondary"}
          fullWidth
          required
          error={dateErr}
        />
        <TextField
          onChange={(e) => setTime(e.target.value)}
          style={{ width: 400 }}
          className={classes.field}
          label={"Время"}
          variant={"outlined"}
          color={"secondary"}
          fullWidth
          required
          error={timeErr}
        />
        <TextField
          onChange={(e) => setSubj(e.target.value)}
          style={{ width: 400 }}
          className={classes.field}
          label={"Предмет"}
          variant={"outlined"}
          color={"secondary"}
          fullWidth
          required
          error={subjErr}
        />

        <FormControl fullWidth>
          <Button
            type={"submit"}
            color={"primary"}
            variant={"contained"}
            endIcon={<KeyboardArrowRight />}
            fullWidth
          >
            Добавить
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}

export default AddSessionForm;
