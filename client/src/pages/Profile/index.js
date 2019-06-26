import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header-Welcome";
//import ProfileCard from "../../components/Profile-Card";
import useFetch from "../Cart/Hooks";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "1em",
    alignItems: "center"
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
  },
  pageContainer: {
    width: "500px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  }
}));

export default function Profile() {
  const [data, loading] = useFetch("https://lightbites.herokuapp.com/api/customers/");
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.pageContainer}>
        <Grid className={classes.container} container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>Name</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>Button</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>Address</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
            Button
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
            City, State
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>
            Zip
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
            Button
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}