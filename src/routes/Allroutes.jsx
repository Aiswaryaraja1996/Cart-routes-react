import React from "react";
import { Route, Switch } from "react-router-dom";

import Allproducts from "../components/Allproducts";
import Home from "../components/Home";
import Productdetails from "../components/Productdetails";

function Allroutes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/allproducts">
        <Allproducts />
      </Route>
      <Route exact path="/productdetails/:id">
          <Productdetails/>
      </Route>
    </Switch>
  );
}

export default Allroutes;
