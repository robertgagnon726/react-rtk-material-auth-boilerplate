import React, { useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Container,
  Paper,
  Avatar,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useStylesLoginPage } from "./styles";
import { Link } from "react-router-dom";
import TopLevelLoader from "../../components/progress/TopLevelLoader";
import { PageRoutes } from "../../global/types";
import { useAppDispatch, useAppSelector } from "../../init/hooks";
import { requestLogin } from "../../global/redux/authSlice";

export default function LoginPage() {
  const classes = useStylesLoginPage();
  const [nonRegisteredEmailError] = useState(false);
  const [wrongPassError] = useState(false);
  const dispatch = useAppDispatch();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const loading = useAppSelector((state) => state.auth.loading);

  const handleChange = (
    type: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormValues({
      ...formValues,
      [type]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(requestLogin(formValues));
  };

  return (
    <React.Fragment>
      <Container component="main" maxWidth="xs" className={classes.container}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form noValidate className={classes.form}>
            <TextField
              error={nonRegisteredEmailError}
              helperText={
                nonRegisteredEmailError
                  ? "We don't have that email in our system"
                  : null
              }
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={formValues.email}
              onChange={(e) => handleChange("email", e)}
            />
            <TextField
              error={wrongPassError}
              helperText={wrongPassError ? "Incorrect password" : null}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={formValues.password}
              onChange={(e) => handleChange("password", e)}
              autoComplete="current-password"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link to={PageRoutes.SignUp}>
                  Don&apos;t have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
      <TopLevelLoader open={loading} />
    </React.Fragment>
  );
}
