import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import BikeSizeCards from "../components/BikeSizeCards";
import SuccessfulPage from "../components/SuccessfulPage"
import SmallBikeItems from "../components/ListBikePage/SmallBikeItems";
import MediumBikeItems from "../components/ListBikePage/MediumBikeItems";
import LargeBikeItems from "../components/ListBikePage/LargeBikeItems";
import AdminPage from "../components/Admin/AdminPage";
import NewBikeForm from "../components/Admin/Forms/NewBikeForm";
import NewSupplierForm from "../components/Admin/Forms/NewSupplierForm";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/admin_page" exact component={AdminPage} />
      <Route path="/add_bike" exact component={NewBikeForm} />
      <Route path="/add_supplier" exact component={NewSupplierForm} />
      <Route path="/bike_sizes" exact component={BikeSizeCards} />
      <Route path="/small" exact component={SmallBikeItems} />
      <Route path="/medium" exact component={MediumBikeItems} />
      <Route path="/large" exact component={LargeBikeItems} />
      <Route path="/purchase_successful" exact component={SuccessfulPage} />
    </Switch>
  </Router>
);
