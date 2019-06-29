import React, { Component } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "./Admin/jumbotron/index.js";
import Container from "./Admin/container/index.js";
import Button from "@material-ui/core/Button";
import "./Admin/App.css";
var axios = require("axios");
// import { fade, makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import Badge from "@material-ui/core/Badge";
// import MenuItem from "@material-ui/core/MenuItem";
// import Menu from "@material-ui/core/Menu";
// import MenuIcon from "@material-ui/icons/Menu";
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import MailIcon from "@material-ui/icons/Mail";
// import NotificationsIcon from "@material-ui/icons/Notifications";
// import MoreIcon from "@material-ui/icons/MoreVert";

// var customerDB = require("https://lightbites.herokuapp.com/api/customers");
// var orderhistoryDB = require("https://lightbites.herokuapp.com/api/order_history");
// var ordersDB = require("https://lightbites.herokuapp.com/api/orders");
// var shoppingcartDB = require("https://lightbites.herokuapp.com/api/cart");
// var stockDB = require("https://lightbites.herokuapp.com/api/stock");
// var whatorderedDB = require("https://lightbites.herokuapp.com/api/wordered");

// console.log(customerDB)
// var db = require("../../../models");

// const useStyles = makeStyles(theme => ({
//   grow: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     display: "none",
//     [theme.breakpoints.up("sm")]: {
//       display: "block",
//     },
//   },
//   search: {
//     position: "relative",
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     "&:hover": {
//       backgroundColor: fade(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       marginLeft: theme.spacing(3),
//       width: "auto",
//     },
//   },
//   searchIcon: {
//     width: theme.spacing(7),
//     height: "100%",
//     position: "absolute",
//     pointerEvents: "none",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   inputRoot: {
//     color: "inherit",
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 7),
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: 200,
//     },
//   },
//   sectionDesktop: {
//     display: "none",
//     [theme.breakpoints.up("md")]: {
//       display: "flex",
//     },
//   },
//   sectionMobile: {
//     display: "flex",
//     [theme.breakpoints.up("md")]: {
//       display: "none",
//     },
//   },
// }));

class App extends React.Component {
  state = {
    containerBox: "Please choose a week to display. 'src/components/Admin/container/index.js'",
    containerName: ""
  }


  handleSubmit = e => { console.log("handleSubmit called")
    e.preventDefault();
    var url = "https://lightbites.herokuapp.com/api/customers/create";

    fetch("/api/adminRoutes/testRoute", {
      method: "POST", // or 'PUT'
      body: "", // data can be `string` or {object}!
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }).then(res => res.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error)); 
  };











  // thisWeek = (props) => {
  //   fetch("https://lightbites.herokuapp.com/api/stock")
  //     .then(res => res.json())
  //     .then((result) => {
  //       this.setState({
  //         containerBox: result[0].fulfillment_date,
  //         containerName: result[0].meal_id
  //       });
  //     },
  //     (error) => {
  //       this.setState({
  //         error
  //       });
  //     }
  //     );
  // };

  complete = (props) => {
    fetch("https://lightbites.herokuapp.com/api/wordered") 
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            containerBox: result[0].fulfillment_date,
            containerName: result[0].meal_id
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      );

    // fetch('https://lightbites.herokuapp.com/api/stock', {method: 'GET'}.then(res => res.json()).then(data => //Here is where you'd add a fetch with POST
    // this.setState({containerBox: "Complete", containerName: " "}); 
  };
  
  render(props) {
    return (
      <div className="App">
        <Jumbotron />
        <Container state = {this.state}/>
        <br />
        <br />
        <p>
 
        </p>
        <p>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={this.thisWeek}
          >
            this week 
          </Button>
        </p>
        <br />
        <br />
 
        <p>
          
        </p>
        <p>
          <Button 
            variant="contained" 
            color="primary"
            onClick={this.handleSubmit}
          >
            Complete!
          </Button>
        </p>
        <br />
        <br />
        <p>
          
        </p>
        <p>
          <Link to="/addStock"><Button variant="contained" color="primary">
          Add to inv
          </Button></Link>
        </p>
        <br />
        <br />
        <p>
          
        </p>
        <p>
          <Link to="/update"><Button variant="contained" color="primary">
            Mi fro inv
          </Button></Link>
        </p>
      </div>
    );
  }
}

export default App;

// nextWeek = (props) => {
// // db.sequelize.query("select SUM(wo.quantity), s.title from what_ordered wo left join Stock s on wo.meal_id = s.meal_id where wo.fulfillment_date = (SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1,08, DAYOFWEEK(CURDATE()))) DAY)) group by s.title;").then(([results, metadata]) => {   });
//   this.setState({containerBox: "y", containerName: " "}); 
// };


// removed next week as not MVP
// <p>
// db.sequelize.query("
//   select SUM(wo.quantity), s.title 
//   from what_ordered wo 
//   left join Stock s 
//     on wo.meal_id = s.meal_id 
//   where wo.fulfillment_date = (SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1,08, DAYOFWEEK(CURDATE()))) DAY)) 
//   group by s.title;
// ").then(([results, metadata]) => {   });        
// </p>
// <p>
// <Button variant="contained" 
//   color="primary"
//   onClick={this.nextWeek}
// >
//   next week
// </Button>
// </p>

// db.sequelize.query("
// select SUM(wo.quantity), s.title 
// from what_ordered wo 
// left join Stock s 
//   on wo.meal_id = s.meal_id 
// where wo.fulfillment_date = (SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1,08, DAYOFWEEK(CURDATE()))) DAY)) 
// group by s.title;
// ").then(([results, metadata]) => {   });

// scripts/wo-oh.js 

// button to route to add to inventory

// button to route to remove from inventory