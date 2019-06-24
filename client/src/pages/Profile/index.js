import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header-Welcome";
import ProfileCard from "../../components/Profile-Card";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '1em'
  },
  container: {
    marginTop: "5%"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  text: {
    textAlign: "left"
  }
}));

export default function Profile() {
  const classes = useStyles();
  ///fetch user here///
  return (
    <div className={classes.root}>
      <Header />
      
      <Grid className={classes.container} container spacing={3}>
        <Grid item xs={6}>
          <ProfileCard 
            lname="Jerome"
            fname="John"
            location={
              {
                city: "Austin",
                state: "TX",
                zip: "78731"
              }
            }
          />
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}