import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles_LayoutWrapper = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(1),
    },
  })
);
