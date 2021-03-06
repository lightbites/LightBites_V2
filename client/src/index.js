import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";
import Welcome from "./pages/Welcome";
import SignInSide from "./pages/Sign-In";
import SignUp from "./pages/Sign-Up";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Meals from "./pages/Meals";
import Notfound from "./notfound";
import Checkout from "./pages/Checkout";
import Administration from "./components/Admin";
import addToStock from "./components/addToStock";
import updateStock from "./components/updateStock";

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/signin" component={SignInSide} />
        <Route path="/signup" component={SignUp} />
        <Route path="/profile" component={Profile} />
        <Route path="/cart" component={Cart} />
        <Route path="/meals" component={Meals} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/admin" component={Administration} />
        <Route path="/addStock" component={addToStock} />
        <Route path="/update" component={updateStock} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
