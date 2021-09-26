import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles_AddProjectCard = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: theme.spacing(20),
      "&:hover": {
        cursor: "pointer",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
      },
    },
    gridContainer: {
      height: "100%",
    },
  })
);
