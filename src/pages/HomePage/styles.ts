import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles_HomePage = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: theme.spacing(20),
    },
    title: {
      textAlign: "center",
    },
  })
);
