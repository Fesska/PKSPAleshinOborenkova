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
import { collection, getDocs, query, where } from "firebase/firestore";
import context from "../index";

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
  const { db } = useContext(context);
  const { setUserRights } = useContext(context);

  const usersCollectionRef = collection(db, "users");

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

        // Запрашиваем пользователя из коллекции users по совпадению поля UID
        const q = query(
          usersCollectionRef,
          where("UID", "==", auth.currentUser.uid)
        );

        // Запрашиваем права пользователя
        const getRights = async () => {
          const data = await getDocs(q);
          const userRef = data.docs.pop().data();
          const rights = userRef.rights;

          if (rights === "admin") setUserRights(true);
        };

        getRights();
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
            Войти в систему
          </Typography>

          <form noValidate autoComplete={"off"} onSubmit={handleSubmit}>
            <TextField
              onChange={(e) => setLogin(e.target.value)}
              className={classes.field}
              label={"Адрес электронной почты"}
              variant={"outlined"}
              color={"secondary"}
              fullWidth
              required
              error={loginErr}
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              className={classes.field}
              label={"Пароль"}
              variant={"outlined"}
              color={"secondary"}
              type={"password"}
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
                Войти
              </Button>
            </FormControl>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
