import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header-Welcome";
//import ProfileCard from "../../components/Profile-Card";
import useFetch from "./ProfileHook";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

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
  pContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  body: {
    width: "768px"
  },
  card: {
    maxWidth: 345,
  }
}));

export default function Profile() {
  const [data, loading] = useFetch("https://lightbites.herokuapp.com/api/customers");
  const [info, searching] = useFetch("https://lightbites.herokuapp.com/api/orderhistory");
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.pContainer}>
        <div className={classes.body}>
          <Grid className={classes.container} container spacing={3}>
            
            
            
            
           
            <Grid item xs={6}>
              <Card className={classes.card}>
                <CardActionArea>
                  
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {
                        loading ? "Your name" : `${data.firstname} ${data.lastname}`
                      }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
            
                      {
                        loading ? "Your Address" : `${data.address1}`
                      } { }
                      {
                        loading ? "Your City, State" : `${data.city}, ${data.state}`
                      } { }
                      {
                        loading ? "Your Zipcode" : `${data.zip}`
                      }
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link href="/meals" variant="body2"><Button size="small" color="primary">
          Lets Start Your Order
                  </Button></Link>
              
                </CardActions>
              </Card>
              
            </Grid>
            <Grid item xs={6}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                Previous Orders
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {
                        searching ? "Your Orders" : `${info.meal_id}`
                      }
                    </Typography>
                  </CardContent>
                </CardActionArea>
                
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}