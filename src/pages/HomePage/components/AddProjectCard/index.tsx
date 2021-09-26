import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useStyles_AddProjectCard } from "./styles";

export default function AddProjectCard() {
  const classes = useStyles_AddProjectCard();
  return (
    <Paper className={classes.container}>
      <Grid container alignContent="center" className={classes.gridContainer}>
        <Grid container justifyContent="center">
          <Grid item>
            <AddIcon fontSize="large" />
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item>
            <Typography>Add Project</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
