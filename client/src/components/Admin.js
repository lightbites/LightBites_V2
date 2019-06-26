import React from "react";
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
import Jumbotron from "./Admin/jumbotron/index.js";
import Container from "./Admin/container/index.js";
import Button from "@material-ui/core/Button";
import "./Admin/App.css";

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




function App() {
  return (
    <div className="App">
      <Jumbotron />
      <Container />
      <br />
      <br />
      <br />
      <br />
      <p>
        select SUM(wo.quantity) 
        , s.title 
        from what_ordered wo
        left join Stock s
          on wo.meal_id = s.meal_id
        where wo.fulfillment_date = CURDATE()
        group by s.title;
      </p>
      <p>
        <Button variant="contained" color="primary">
          this week 
        </Button>
      </p>
      <br />
      <br />
      <p>
        select SUM(wo.quantity)
        , s.title from what_ordered wo
        left join Stock s
          on wo.meal_id = s.meal_id
        where wo.fulfillment_date = (SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1,08, DAYOFWEEK(CURDATE()))) DAY)) 
        group by s.title;
      </p>
      <p>
        <Button variant="contained" color="primary">
          next week
        </Button>
      </p>
      <br />
      <br />
      <p>
        Build a query to pull all values from the what_ordered table and insert them into the order_history table
        select *
        from what_ordered
        where fulfillment_date = CURDATE()
        ;
      </p>
      <p>
        <Button variant="contained" color="primary">
          Complete!
        </Button>
      </p>
      <br />
      <br />
      <p>
        button to route to add to inventory
      </p>
      <p>
        <Button variant="contained" color="primary">
         Add to inv
        </Button>
      </p>
      <br />
      <br />
      <p>
        button to route to remove from inventory
      </p>
      <p>
        <Button variant="contained" color="primary">
          Mi fro inv
        </Button>
      </p>
    </div>
  );
}

export default App;