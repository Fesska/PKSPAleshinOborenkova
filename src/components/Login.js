//Страница логина
import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  field: {
    "&&": {
      marginTop: 20,
      marginBottom: 20,
      display: "block",
    },
  },
});

function Login() {
  const classes = useStyles();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loginErr, setLoginErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginErr(false);
    setPasswordErr(false);

    if (login === "") {
      setLoginErr(true);
    }
    if (password === "") {
      setPasswordErr(true);
    }

    console.log(login, password);
  };

  return (
    <Container maxWidth={"xs"}>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Login
      </Typography>

      <form noValidate autoComplete={"off"} onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setLogin(e.target.value)}
          className={classes.field}
          label={"E-mail"}
          variant={"outlined"}
          color={"secondary"}
          fullWidth
          required
          error={loginErr}
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          className={classes.field}
          label={"Password"}
          variant={"outlined"}
          color={"secondary"}
          fullWidth
          required
          error={passwordErr}
        />
        <FormControl fullWidth>
          <Button
            type={"submit"}
            color={"primary"}
            variant={"contained"}
            endIcon={<KeyboardArrowRight />}
            fullWidth
          >
            Submit
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}

export default Login;
