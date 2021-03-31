import BikeList from "../../BikeList";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";

const useStyles = makeStyles(() => ({
  pageTitle: {
    marginTop: "35px",
    marginBottom: "45px"
  }
}));

const Page = ({bikes, handleBuyBikeButton, purchaseStatus, bikeSize}) => {
  const classes = useStyles();
  
  return (
    <div className={classes.pageTitle}>
      <div className="vw-100 primary-color d-flex align-items-center justify-content-center margin-top">
        <div>
          <div className="container secondary-color">
            <h1 className="display-4">List of {bikeSize} inches bikes available</h1>
            <p className="lead">
              Here you can find the type and size of bike you need.
            </p>
            <Link
              to="/"
              className="btn btn-lg custom-button"
              role="button"
            >
              Back to Home page
            </Link>
            <hr className="my-4" />
          </div>
        </div>
      </div>
      <BikeList
        bikes={bikes}
        handleBuyBikeButton={handleBuyBikeButton}
        purchaseStatus={purchaseStatus}
      />
    </div>
  )
};

export default Page;
