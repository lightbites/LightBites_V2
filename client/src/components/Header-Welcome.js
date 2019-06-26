import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles"; 
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: "none",
  },
  root: {
    flexGrow: 1,
    paddingLeft: "1%"
  },
  card: {
    maxWidth: 345,
  },
  container: {
    marginTop: "1%"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  button: {
    ...theme.typography.button,
    margin: theme.spacing(1),
  },
  input: {
    display: "none",
  },

  text: {
    textAlign: "center",
    fontFamily: "'Lora', serif"
  },
  headline: {
    textAlign: "left",
    fontFamily: "'Lora', serif",
    lineHeight: "160%"
  },

  cta: {
    marginTop: "2%"
  },
  center: {
    alignContent: "center"
  }
}));

export default function Header() {
  const classes = useStyles();

     
 

  return (
    <header>
      <Container className={classes.container} maxWidth="lg">
        <Grid container spacing={3}>
        
          <Grid item xs={2} className={classes.center}>
            
            
          </Grid>
          <Grid item xs={2} className={classes.center}>
            <Link to="/signin"><Button variant="contained" color="secondary" className={classes.button}>
        Sign In
            </Button></Link>
            
          </Grid>
          <Grid item xs={2} className={classes.center}>
            
            <Link to="/signup"><Button variant="contained" color="secondary" className={classes.button}>
        Sign Up
            </Button></Link>
            
          </Grid>
          
          <Grid item xs={2} className={classes.center}>
           
            <Link to="/profile"><Button variant="contained" color="secondary" className={classes.button}>
        My Profile
            </Button></Link>
          </Grid>
          <Grid item xs={2} className={classes.center}>
            
            
          </Grid>
        </Grid>
      </Container>
      <hr />
    </header>
   
  );
}