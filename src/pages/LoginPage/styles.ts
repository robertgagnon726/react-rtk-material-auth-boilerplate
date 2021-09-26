import { makeStyles } from "@material-ui/core";

export const useStylesLoginPage = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(4),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  googleLoginButton: {
    marginTop: 10,
    width: "100%",
    backgroundColor: "#4285f4",
    "& a": {
      color: "white",
      textDecoration: "none",
    },
  },
  container: {
    marginTop: theme.spacing(4),
  },
}));
