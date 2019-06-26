import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header-Welcome";
//import ProfileCard from "../../components/Profile-Card";
import useFetch from '../Cart/Hooks'

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
  },
  pContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  body: {
    width: '768px'
  }
}));

export default function Profile() {
  const [data, loading] = useFetch('https://lightbites.herokuapp.com/api/customers/');
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.pContainer}>
        <div className={classes.body}>
          <Grid className={classes.container} container spacing={3}>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                {
                  loading ? 'Your name' :  `${data[0].firstname} ${data[0].lastname}`
                }
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                Button 1
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                {
                  loading ? 'Your Address' : `${data[0].address1}`
                }
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                Button 2
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
              {
                loading ? 'Your City, State' : `${data[0].city}, ${data[0].state}`
              }
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                {
                  loading ? 'Your Zipcode' : `${data[0].zip}`
                }
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                Button 3
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}