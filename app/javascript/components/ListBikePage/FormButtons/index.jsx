import Button from "@material-ui/core/Button";
import React, {useState} from "react";
import ModalBikeDetails from "./ModalBikeDetails";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme) => ({
  bikeForm: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  formButtons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  formButton: {
    marginTop: "8px",
    marginBottom: "8px"
  },
  paper: {
    position: "absolute",
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    fontFamily: "Roboto",
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column"
  }
}));

const FormButtons = ({ handleBuyBikeButton, bike }) => {
  const [openModal, setOpenModal] = useState(false);
  const classes = useStyles();
  
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  
  const renderBuyButton = () => {
    return (
      <Button
        variant="contained"
        color="primary"
        onClick={handleBuyBikeButton}
        className={classes.formButton}
        size="small"
      >
        Buy Bike
      </Button>
    );
  };
  
  const renderModalBody = (
    <div className={classes.paper}>
      <ModalBikeDetails bike={bike} />
      
      { renderBuyButton() }
    </div>
  );
  
  const renderDetailsButton = () => {
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
          { renderModalBody }
        </Modal>
      </div>
    );
  };
  
  return (
    <div className={classes.formButtons} >
      { renderBuyButton() }
      { renderDetailsButton() }
    </div>
  );
};

export default FormButtons;
