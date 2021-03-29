import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import BikeSizeCards from "../components/BikeSizeCards";
import SuccessfulPage from "../components/SuccessfulPage"
import SmallBikeItems from "../components/ListBikePage/SmallBikeItems";
import MediumBikeItems from "../components/ListBikePage/MediumBikeItems";
import LargeBikeItems from "../components/ListBikePage/LargeBikeItems";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/categories" exact component={BikeSizeCards} />
      <Route path="/small" exact component={SmallBikeItems} />
      <Route path="/medium" exact component={MediumBikeItems} />
      <Route path="/large" exact component={LargeBikeItems} />
      <Route path="/purchase_successful" exact component={SuccessfulPage} />
    </Switch>
  </Router>
);
