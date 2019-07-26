import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingLeft: "1%"
  },
  card: {
    maxWidth: 345
  },
  container: {
    marginTop: "5%"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  button: {
    ...theme.typography.button,
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
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
  heading: {
    fontFamily: "'Rancho', cursive",
    fontSize: "6.5rem"
  },

  cta: {
    marginTop: "2%"
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="lg">
        <Grid container spacing={3}>
          <br />

          <Grid item xs={6}>
            <h1 className={classes.heading}>Light Bites</h1>
            <div className={classes.cta}>
              <h4 className={classes.headline}>
                Our Mission is to provide our community with fresh, nutritious
                meal options for the busy lifestyle.
              </h4>
              <Divider />
              <p>
                Whether you're on the go or looking to get into shape, Light
                Bites has got you covered. It's as simple as choosing your meals
                for the week, placing a delivery, and now you have food pre-made
                for you without the fuss of going into a grocery store.
              </p>
              <br />
              <Link to="/signup">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Lets Get Started
                </Button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
