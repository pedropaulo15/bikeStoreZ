import React from "react";
import { Link } from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  buttons: {
    flex: 1,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
  }
}));

const AdminPage = () => {
  const classes = useStyles();
  
  return (
    <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container secondary-color">
          <h1 className="display-4">What do you want to do?</h1>
          <p className="lead">
            Since you are an admin, you can add new bikes to the inventory and/or add new supplier for bike parts.
          </p>
          <hr className="my-4" />
          <div className={classes.buttons}>
            <Link
              to="/add_bike"
              className="btn btn-lg custom-button"
              role="button"
            >
              Add Bike
            </Link>
            <Link
              to="/add_supplier"
              className="btn btn-lg custom-button"
              role="button"
            >
              Add Supplier
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AdminPage;
