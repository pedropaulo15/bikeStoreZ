import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SmallBikeCard from "./SmallBikeCard";
import MediumBikeCard from "./MediumBikeCard";
import LargeBikeCard from "./LargeBikeCard";

const useStyles = makeStyles(() => ({
  cards: {
    flex: 1,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    
  },
  container: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    width: "100%",
    position: "fixed"
  }
}));

const BikeSizeCards = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.container} >
      <Grid container>
        <Grid item xs={12}>
          <Grid
            container
            spacing={5}
            className={classes.cards}
          >
            <Grid item>
              <SmallBikeCard />
            </Grid>
            <Grid item>
              <MediumBikeCard />
            </Grid>
            <Grid item>
              <LargeBikeCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
};

export default BikeSizeCards;
