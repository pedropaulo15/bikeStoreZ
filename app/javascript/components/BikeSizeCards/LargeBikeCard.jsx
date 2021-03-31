import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";

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

const smallBikeCategory = () => {
  const classes = useStyles();
  
  return (
    <Card className={classes.card}>
      <Link
        to={{ pathname: 'large', state: { foo: 'bar' } }}
        className="btn btn-lg"
        role="button"
      >
        <CardActionArea>
          <br />
          <CardMedia
            component="img"
            alt="19 Inches Bike"
            height="140"
            image="https://ibkbike.com/5600-medium_default/hotwalk-carbon-specialized-satin-chamaleon-carbon.jpg"
            title="19 Inches Bike"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              21 Inches Bikes
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Here you can find good options of bikes for you kid, you have come
              to the right place.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default smallBikeCategory;
