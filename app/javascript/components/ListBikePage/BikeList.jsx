import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import FormControl from "@material-ui/core/FormControl";
import RimColorOptions from "./FormOptions/RimColorOptions";
import SaddleColorOptions from "./FormOptions/SaddleColorOptions";
import FormButtons from "./FormButtons";
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(3),
      width: "25ch",
    },
    marginTop: "20px"
  },
  bikeForm: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  avatar: {
    width: theme.spacing(30),
    height: theme.spacing(26),
    borderRadius: 8,
    marginTop: "20px",
    marginBottom: "10px"
  },
  formButtons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  formButton: {
    marginTop: "10px",
    marginBottom: "6px"
  },
  divider: {
    margin: "15px"
  }
}));

const BikeList = ({ bikes, handleBuyBikeButton }) => {
  const classes = useStyles();
  
  const avatarUrl = (url) => {
    if (url) {
      return url;
    } else {
      return 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';
    }
  };

  return (
    <div>
      {
        bikes.map( bike => {
          return (
            <form className={classes.root} noValidate autoComplete="off" key={bike.id}>
              <div>
                <div className={classes.bikeForm}>
                  <div className={classes.formButtons}>
                    <Typography variant="h6" component="h2">
                      { bike.attributes.name }
                    </Typography>
                    <Avatar
                      alt="Remy Sharp"
                      src={avatarUrl(bike.attributes.image_url)}
                      className={classes.avatar}
                      variant="square"
                    />
                  </div>
                  <FormControl component="fieldset">
                    { <RimColorOptions bike={bike} /> }
                    { <SaddleColorOptions bike={bike} />}
                  </FormControl>
                  <Typography variant="h5" component="h2">
                    $ { bike.attributes.price }
                  </Typography>
                  <div>
                    <FormButtons
                      handleBuyBikeButton={() => handleBuyBikeButton(bike)}
                      bike={bike}
                    />
                  </div>
                </div>
              </div>
              <Divider variant="middle" className={classes.divider} />
            </form>)
        })
      }
    </div>
  );
};

export default BikeList;
