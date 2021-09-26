import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useStyles_HomePage } from "./styles";
import { typographyVariantMapping } from "../../theme/typographyVariantMapping";
import AddProjectCard from "./components/AddProjectCard";

export default function HomePage() {
  const classes = useStyles_HomePage();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography
          variant="h3"
          variantMapping={typographyVariantMapping}
          className={classes.title}
        >
          Projects
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <AddProjectCard />
      </Grid>
    </Grid>
  );
}
