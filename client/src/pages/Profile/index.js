import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header-Welcome";
import ProfileCard from "../../components/Profile-Card";
import useFetch from "../Cart/Hooks";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "1em"
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
  const [data, loading] = useFetch("https://lightbites.herokuapp.com/api/customers/");
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      
      <Grid className={classes.container} container spacing={3}>
        <Grid item xs={6}>
          {
            loading ? <ProfileCard /> :
              <ProfileCard 
                fname={data[0].firstname}
                lname={data[0].lastname}
                email={data[0].email}
                location={
                  {
                    city: data[0].city,
                    state: data[0].state,
                    zip: data[0].zip
                  }
                }
              />
          }
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