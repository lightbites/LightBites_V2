import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { connect } from "react-redux";
import { users } from "../reducers/users";
import actions from "../actions.js";
import { getRandomDog } from "../store.js";

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

  if(props.dog.loading) {
    return <div>Loading</div>;
  }
  if(props.dog.data && props.dog.data.message){
    return <img onClick={()=>props.getRandomDog()} src={props.dog.data.message} alt="dog"/>;
  }

  return (
    <div className={classes.root}>
      
      <footer 
        // onClick={()=>props.logout()}
        className={classes.footer}>
        <Container maxWidth="sm">
          <hr />
          <span onClick={()=>props.getRandomDog()}>test</span>
          <Typography 
            variant="body1" 
            className={classes.text}> 
            {props.name} Created 2019
          </Typography>
        </Container>
      </footer>
    </div>
  );
}

console.log(users);

//export default connect(state => ({ name: state.users.name })) (StickyFooter);

const mapDispatchToProps = dispatch => {
  return {
    getRandomDog: getRandomDog.action(dispatch),
    logout: payload => dispatch(actions.logout(payload))
  };
};

export default connect(function(state){
  return {
    name: state.users.name,
    dog: state.dog
  };
}, mapDispatchToProps)(StickyFooter);
