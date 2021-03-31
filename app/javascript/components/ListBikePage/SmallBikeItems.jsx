import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router';
import BikesApi from "../../api/BikesApi";
import PurchaseApi from "../../api/PurchaseApi";
import Page from "./FormOptions/Page";

export default function SmallBikeItems() {
  const [bikes, setBikes] = useState([]);
  const [purchaseStatus, setPurchaseStatus] = useState(0);
  
  useEffect(() => {
    BikesApi.getBikes()
      .then( resp => {
        const filteredBikes = resp.data.data.filter(function(bike) {
          return bike.attributes.wheel_size === 17;
        });
        setBikes( filteredBikes )
      })
      .catch( resp => console.error(resp) );
  }, [bikes.length]);
  
  const handleBuyBikeButton = (bike) => {
    const { price } = bike.attributes;
    
    const newPurchaseRecordPayload = {
      purchase: {
        paid_by: "VISA",
        total: price,
        bike_id: bike.id,
        user_id: 3
      }
    };
    
    PurchaseApi.addPurchases(newPurchaseRecordPayload)
      .then( resp => {
        if (resp.status === 201) {
          console.log(`New purchase has been created: ${JSON.stringify(resp)}`);
          setPurchaseStatus(resp.status);
        }
      })
      .catch( resp => console.error(resp) );
  };
  
  const renderPage = () => {
    if (purchaseStatus === 201) {
      return <Redirect to={'/purchase_successful'} />;
    } else {
      return (
        <Page
          bikes={bikes}
          handleBuyBikeButton={handleBuyBikeButton}
          purchaseStatus={purchaseStatus}
          bikeSize={17}
        />
      );
    }
  };
  
  return (
    <div>
      { renderPage() }
    </div>
  );
}
