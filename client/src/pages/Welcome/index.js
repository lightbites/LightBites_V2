import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingLeft: "1%"
  },
  card: {
    maxWidth: 345,
  },
  container: {
    marginTop: "5%"
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
    float: "right",
    paddingRight: "5%",
    paddingTop: "5%",
    textAlign: "left",
    width: "25%"
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <br />
      <img src={require("../../Assets/Images/hero-image.png")} alt="intro"></img> 
      <div className={classes.cta}>
        
        <h4 className={classes.headline}>Our Mission is to provide our community with fresh, nutritious meal options for the busy lifestyle.</h4>
        <Divider/>
        <p>Whether you're on the go or looking to get into shape, Light Bites has got you covered. It's as simple as choosing your meals for the week, placing a delivery, and now you have food pre-made for you without the fuss of going into a grocery store.</p> 
        <br /><Link to="/signup"><Button variant="contained" color="primary" className={classes.button}>
            Lets Get Started
        </Button></Link></div>
      
      
      <Container className={classes.container} maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={12}>
            <h1 className={classes.text}>Want to know more about us?</h1>
          </Grid>
          <Grid item xs={6}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Chicken"
                  height="140"
                  image="https://img.buzzfeed.com/thumbnailer-prod-us-east-1/0ca67d7d194d4975830b45d6b61340c0/BFV12652_Hasselback_Chicken_4_Ways.jpg?output-quality=100&resize=900:*"
                  title="Chicken"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  Fajita Hasselback Chicken
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  This Grilled Hassleback Fajita Stuffed Chicken is stuffed with bell peppers and red onions then topped with tex mex cheese – it's a delicious and healthy weeknight dinner that comes together in a pinch!
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
          Add to your Week
                </Button>
                
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            
            <h6>Delivery Instructions</h6><br /> 
            <p>1. Please order Tuesday thru Saturday.</p><br />
            
            <p>2. Monday is cook , deliver & pickup day 4-7pm.</p><br />
            
            <p>3. Order from the corresponding week of the month: For example: Week one menu goes with Week One of the month.</p><br />
            
            <p>Please email us with questions; We are happy to help</p><br />
            <Link to="/signup"><Button variant="contained" color="primary" className={classes.button}>
            Start Your Delivery
            </Button></Link>
          
          </Grid>
          
        </Grid>
      </Container>
    </div>
  );
}