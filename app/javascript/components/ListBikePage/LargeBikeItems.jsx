import React, { useState, useEffect } from "react";
import BikeList from "./BikeList";
import BikesApi from "../../api/BikesApi";

export default function SmallBikeItems() {
  const [bikes, setBikes] = useState([]);
  
  useEffect(() => {
    BikesApi.getBikes()
      .then( resp => {
        const filteredBikes = resp.data.data.filter(function(bike) {
          return bike.attributes.wheel_size === 19;
        });
        setBikes( filteredBikes )
      })
      .catch( resp => console.log(resp) );
  }, [bikes.length]);
  
  const handleBuyBikeButton = (bike) => {
    // Create a new purchase on the DB and remove the bike from stock
    console.log(
      `handleBuyBikeButton: Buy bike button clicked for ${bike.attributes.name}`
    );
    console.log("Redirect the user to Success page...");
  };
  
  return (<BikeList bikes={bikes} handleBuyBikeButton={handleBuyBikeButton}/>);
}
