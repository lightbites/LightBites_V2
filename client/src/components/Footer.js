import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "20vh",
  },
  main: {
    marginTop: "10%",
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: "5%"
  },
  text: {
    textAlign: "center"
  }
}));

function StickyFooter(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <hr />
          <Typography variant="body1" className={classes.text}> {props.name} Created 2019</Typography>
         
        </Container>
      </footer>
    </div>
  );
}

export default connect(state => ({ name: state.users.name })) (StickyFooter);