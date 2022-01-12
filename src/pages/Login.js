//Страница логина
import React, { useContext, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { context } from "../index";

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
  const { auth } = useContext(context);
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

    signInWithEmailAndPassword(auth, login, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        console.log(login, password);
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  };

  return (
    <Container maxWidth={"xs"}>
      <Grid
        container
        style={{ height: window.innerHeight - 150 }}
        alignItems={"center"}
        justify={"center"}
      >
        <Grid
          style={{ width: window.innerWidth }}
          alignItems={"center"}
          /*direction={"column"}*/
        >
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
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
