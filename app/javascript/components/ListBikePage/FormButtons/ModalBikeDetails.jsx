import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  modalBody: {
    marginTop: "15px",
    marginBottom: "15px"
  },
  divider: {
    margin: "2px"
  }
}));

const ModalBikeDetails = ({ bike }) => {
  const classes = useStyles();
  
  return (
    <>
      <Typography variant="h4" id="simple-modal-title" className={classes.modalBody}>
        {bike.attributes.name}
      </Typography>
      
      <Divider variant="middle" className={classes.divider}/>
      
      <Typography variant="body1" id="simple-modal-description" className={classes.modalBody}>
        {bike.attributes.description}
      </Typography>
  
      <Divider variant="middle" className={classes.divider}/>
  
      <div className={classes.modalBody}>
        <Typography variant="h6">Wheel Size</Typography>
        <Typography variant="body1">* {bike.attributes.wheel_size} Inches</Typography>
      </div>
  
      <Divider variant="middle" className={classes.divider}/>
  
      <div className={classes.modalBody}>
        <Typography variant="h6">Rim Color</Typography>
        <Typography variant="body1">* {bike.attributes.rim_color}</Typography>
      </div>
  
      <Divider variant="middle" className={classes.divider}/>
  
      <div className={classes.modalBody}>
        <Typography variant="h6">Saddle Color</Typography>
        <Typography variant="body1">* {bike.attributes.saddle_color}</Typography>
      </div>
  
      <Divider variant="middle" className={classes.divider}/>
  
      <div className={classes.modalBody}>
        <Typography variant="h6">Price</Typography>
        <Typography variant="body1">$ {bike.attributes.price}</Typography>
      </div>
    </>
  )
};

export default ModalBikeDetails;
