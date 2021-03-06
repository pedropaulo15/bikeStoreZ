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

const Home = () => {
  const classes = useStyles();
  
  return (
    <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container secondary-color">
          <h1 className="display-4">Welcome to the Bike Store</h1>
          <p className="lead">
            Here you can find the type and size of bike you need.
          </p>
          <hr className="my-4" />
          <p className="lead">What type of user are you?</p>
          <div className={classes.buttons}>
            <Link
              to="/bike_sizes"
              className="btn btn-lg custom-button"
              role="button"
            >
              Customer
            </Link>
            <Link
              to="/admin_page"
              className="btn btn-lg custom-button"
              role="button"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;
