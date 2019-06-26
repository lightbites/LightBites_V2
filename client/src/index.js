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
import SimpleMenu from "./components/Menu";
<<<<<<< HEAD
import Checkout from './pages/Checkout'
=======
import Administration from "./components/Admin";
>>>>>>> b4fb82dc33fe28d969a1d00a55b42b995b314bce

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/signin" component={SignInSide} />
        <Route path="/administration" component={Administration} />
        <Route path="/signup" component={SignUp} />
        <Route path="/profile" component={Profile} />
        <Route path="/cart" component={Cart} />
        <Route path="/meals" component={Meals} />
        <Route path="/menu" component={SimpleMenu} /> {/* remove path before deploy */}
        <Route path="/checkout" component={Checkout} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
