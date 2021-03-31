import {Alert} from "@material-ui/lab";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  alertMsg: {
    width: "40%",
    height: "40px",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px"
  }
}));

const AlertNotification = ({ setDisplayNotification, notificationText, severity }) => {
  const classes = useStyles();
  
  return (
    <Alert
      severity={severity}
      className={classes.alertMsg}
      onClose={() => setDisplayNotification(false)}
    >
      { notificationText }
    </Alert>
  )
};

export default AlertNotification;
