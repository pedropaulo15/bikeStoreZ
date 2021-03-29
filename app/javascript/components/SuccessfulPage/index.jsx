import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { CheckCircle } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  notificationPage: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(5),
      width: theme.spacing(80),
      height: theme.spacing(65)
    },
    fontFamily: "Roboto",
    justifyContent: "center",
    alignItems: "center"
  },
  body: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  divider: {
    margin: "15px"
  },
  alertMsg: {
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5px"
  },
  successPage: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  }
}));

export default function SuccessfulPage() {
  const classes = useStyles();
  const [displayNotification, setDisplayNotification] = useState(true);
  
  return (
    <div className={classes.successPage}>
      {displayNotification && (
        <Alert
          severity="success"
          className={classes.alertMsg}
          onClose={() => setDisplayNotification(false)}
        >
          Purchase completed successfully!
        </Alert>
      )}
      <div className={classes.notificationPage}>
        <Paper elevation={6} className={classes.body}>
          <CheckCircle fontSize="large" />
          <Typography variant="h4" className="">
            Congratulations!
          </Typography>
          
          <Divider variant="middle" className={classes.divider} />
          
          <Typography variant="body1">
            You have just purchased an awesome bike!!!
          </Typography>
          
          <Divider variant="middle" className={classes.divider} />
          <Divider variant="middle" className={classes.divider} />
  
          <Link
            to={{ pathname: '/', state: { foo: 'bar' } }}
            className="btn btn-lg"
            role="button"
          >
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                console.log("Redirect user to Home Page");
              }}
              className={classes.formButton}
              size="small"
            >
              Back to home page
            </Button>
          </Link>
        </Paper>
      </div>
    </div>
  );
}
