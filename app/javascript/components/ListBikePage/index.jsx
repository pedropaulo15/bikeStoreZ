import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {Link, useLocation} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
    }
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
  },
  paper: {
    position: "absolute",
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    fontFamily: "Roboto"
  }
}));

export default function ListBikePage() {
  
  console.log(`Props: ${JSON.stringify(useLocation())}`);
  
  const [rimColorvalue, setRimColorValue] = useState("");
  const [saddleColorvalue, setSaddleColorValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const classes = useStyles();
  
  const handleRimColorChange = (event) => {
    setRimColorValue(event.target.value);
  };
  
  const handleSaddleColorChange = (event) => {
    setSaddleColorValue(event.target.value);
  };
  
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  
  const handleBuyBikeButton = () => {
    console.log(
      `Bike Details: Rim Color [${rimColorvalue}] and Saddle Color [${saddleColorvalue}]`
    );
    console.log("Redirect the user to Success page...");
  };
  
  const renderRimColorOption = () => {
    return (
      <div>
        <FormLabel component="legend">
          <h3>Rim Collor</h3>
        </FormLabel>
        <RadioGroup
          aria-label="rimColor"
          name="rimColor"
          value={rimColorvalue}
          onChange={handleRimColorChange}
        >
          <div>
            <FormControlLabel
              value="black"
              control={<Radio color="primary" />}
              label="Black"
            />
            <FormControlLabel
              value="blue"
              control={<Radio color="primary" />}
              label="Blue"
            />
            <FormControlLabel
              value="spotted"
              control={<Radio color="primary" />}
              label="Spotted"
            />
          </div>
        </RadioGroup>
      </div>
    );
  };
  
  const renderSaddleColorOption = () => {
    return (
      <div>
        <FormLabel component="legend">
          <h3>Saddle Collor</h3>
        </FormLabel>
        <RadioGroup
          aria-label="saddleColor"
          name="saddleColor"
          value={saddleColorvalue}
          onChange={handleSaddleColorChange}
        >
          <div>
            <FormControlLabel
              value="black"
              control={<Radio color="primary" />}
              label="Black"
            />
            <FormControlLabel
              value="blue"
              control={<Radio color="primary" />}
              label="Blue"
            />
            <FormControlLabel
              value="brown"
              control={<Radio color="primary" />}
              label="Brown"
            />
          </div>
        </RadioGroup>
      </div>
    );
  };
  
  const renderBuyButton = () => {
    return (
      <Link
        to={{ pathname: '/purchase_successful', state: { foo: 'bar' } }}
        className="btn btn-lg"
        role="button"
      >
        <div className={classes.formButtons}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleBuyBikeButton}
            className={classes.formButton}
            size="small"
          >
            Buy Bike
          </Button>
        </div>
      </Link>
    );
  };
  
  const renderSeeMoreDetailsButton = () => {
    const body = (
      <div className={classes.paper}>
        <Typography variant="h4" id="simple-modal-title">
          2018 TREK ALR 4 WSD LADIES 47CM
        </Typography>
        <Divider variant="middle" className={classes.divider} />
        <Typography variant="body1" id="simple-modal-description">
          Product Details Domane ALR 4 Disc the gateway to disc brake-equipped
          road bikes in our endurance line-up. It has all the trims that make it
          a fast, efficient and dependable ride – like an IsoSpeed decoupler and
          a full Shimano Tiagra drivetrain – with the added benefit of hydraulic
          disc brakes for additional tyre clearance and better stopping power in
          all weather conditions.
        </Typography>
        
        <Divider variant="middle" className={classes.divider} />
        
        <Typography variant="h6">Wheel Size</Typography>
        <Typography variant="body1">* 14 Inches</Typography>
        
        <Divider variant="middle" className={classes.divider} />
        
        <Typography variant="h6">Rim Color</Typography>
        <Typography variant="body1">* Black</Typography>
        <Typography variant="body1">* Blue</Typography>
        <Typography variant="body1">* Spotted</Typography>
        
        <Divider variant="middle" className={classes.divider} />
        
        <Typography variant="h6">Saddle Color</Typography>
        <Typography variant="body1">* Black</Typography>
        <Typography variant="body1">* Blue</Typography>
        <Typography variant="body1">* Brown</Typography>
        
        {renderBuyButton()}
      </div>
    );
    
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleOpenModal}
          className={classes.formButton}
          size="small"
        >
          See More Details
        </Button>
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          className={classes.bikeForm}
        >
          {body}
        </Modal>
      </div>
    );
  };
  
  const renderButtons = () => {
    return (
      <div>
        {renderBuyButton()}
        {renderSeeMoreDetailsButton()}
      </div>
    );
  };
  
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          {/* This div will have an id for each bike, so it can be passed to the handleBuyBikeButton */}
          <div className={classes.bikeForm}>
            <div className={classes.formButtons}>
              <Typography variant="h6" component="h2">
                2018 TREK ALR 4 WSD LADIES 47CM
              </Typography>
              <Avatar
                alt="Remy Sharp"
                src="https://i.ytimg.com/vi/yaqe1qesQ8c/maxresdefault.jpg"
                className={classes.avatar}
                variant="square"
              />
            </div>
            <FormControl component="fieldset">
              {renderRimColorOption()}
              {renderSaddleColorOption()}
            </FormControl>
            <Typography variant="h5" component="h2">
              $ 1.399,99
            </Typography>
            {renderButtons()}
          </div>
        </div>
        <Divider variant="middle" className={classes.divider} />
      </form>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          {/* This div will have an id for each bike, so it can be passed to the handleBuyBikeButton */}
          <div className={classes.bikeForm}>
            <div className={classes.formButtons}>
              <Typography variant="h6" component="h2">
                2018 TREK ALR 4 WSD LADIES 47CM
              </Typography>
              <Avatar
                alt="Remy Sharp"
                src="https://i.ytimg.com/vi/yaqe1qesQ8c/maxresdefault.jpg"
                className={classes.avatar}
                variant="square"
              />
            </div>
            <FormControl component="fieldset">
              {renderRimColorOption()}
              {renderSaddleColorOption()}
            </FormControl>
            <Typography variant="h5" component="h2">
              $ 1.399,99
            </Typography>
            {renderButtons()}
          </div>
        </div>
        <Divider variant="middle" className={classes.divider} />
      </form>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          {/* This div will have an id for each bike, so it can be passed to the handleBuyBikeButton */}
          <div className={classes.bikeForm}>
            <div className={classes.formButtons}>
              <Typography variant="h6" component="h2">
                2018 TREK ALR 4 WSD LADIES 47CM
              </Typography>
              <Avatar
                alt="Remy Sharp"
                src="https://i.ytimg.com/vi/yaqe1qesQ8c/maxresdefault.jpg"
                className={classes.avatar}
                variant="square"
              />
            </div>
            <FormControl component="fieldset">
              {renderRimColorOption()}
              {renderSaddleColorOption()}
            </FormControl>
            <Typography variant="h5" component="h2">
              $ 1.399,99
            </Typography>
            {renderButtons()}
          </div>
        </div>
        <Divider variant="middle" className={classes.divider} />
      </form>
    </div>
  );
}
