import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SmallBikeCategory from "./SmallBikeCategory";
import MediumBikeCategory from "./MediumBikeCategory";
import LargeBikeCategory from "./LargeBikeCategory";
import { SMALL_BIKE_LIST, MEDIUM_BIKE_LIST, LARGE_BIKE_LIST } from "../const";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345
  },
  gridContainer: {
    flex: 1
  },
  control: {
    padding: theme.spacing(2)
  },
  wrapper: {
    flexGrow: 1
  }
}));

const Categories = () => {
  const classes = useStyles();
  
  return (
    <Grid container className={classes.wrapper}>
      <Grid item xs={12}>
        <Grid
          container
          spacing={5}
          alignItems="center"
          justify="space-evenly"
        >
          <Grid item xs={4}>
            <SmallBikeCategory />
          </Grid>
          <Grid item xs={4}>
            <MediumBikeCategory />
          </Grid>
          <Grid item xs={4}>
            <LargeBikeCategory />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Categories;
