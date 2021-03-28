import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Categories from "../components/Categories";

import ListBikePage from "../components/ListBikePage";
import SuccessfulPage from "../components/SuccessfulPage"

import SmallBikeItems from "../components/ListBikePage/SmallBikeItems";
import MediumBikeItems from "../components/ListBikePage/MediumBikeItems";
import LargeBikeItems from "../components/ListBikePage/LargeBikeItems";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/categories" exact component={Categories} />
      <Route path="/small" exact component={ListBikePage} />
      <Route path="/medium" exact component={ListBikePage} />
      <Route path="/large" exact component={ListBikePage} />
      <Route path="/purchase_successful" exact component={SuccessfulPage} />
    </Switch>
  </Router>
);
