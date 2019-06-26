import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";

import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Redirect } from "react-router-dom";


const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [address3, setAddress3] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [signUp, setSignup] = useState(false);


  const handleSubmit = e => {
    e.preventDefault();
    // get our form data out of state
    setSignup(true);

    var url = "https://lightbites.herokuapp.com/api/customers/create";
    var data = {firstname, lastname, phonenumber, email, password, address1, address2, address3, city, state, zip};
    
    fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }).then(res => res.json())
      .then(response => {
        const json = JSON.stringify(response);
        console.log("Success:", json);
        sessionStorage.setItem(json, event.target.value);

      })
      .catch(error => console.error("Error:", error)); 
  };




  if (!signUp) {
    return (
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
              Sign up
          </Typography><br />
          <form className={classes.form} onSubmit={ handleSubmit } noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstname"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstname"
                  value={ firstname }
                  label="First Name"
                  onChange={ event => setFirstName(event.target.value) }
                  autoFocus
                /></Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  value={ lastname }
                  name="lastName"
                  autoComplete="lname"
                  onChange={ event => setLastName(event.target.value) }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="phoneNumber"
                  label="phonenumber"
                  value={ phonenumber }
                  name="phonenumber"
                  autoComplete="pnumber"
                  onChange={ event => setPhoneNumber(event.target.value) }
                /></Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  value={ email }
                  name="email"
                  autoComplete="email"
                  onChange={ event => setEmail(event.target.value) }
                /></Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  value={ password }
                  id="password"
                  autoComplete="current-password"
                  onChange={ event => setPassword(event.target.value) }
                /></Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="address1"
                  label="Address 1"
                  value={ address1 }
                  name="address1"
                  autoComplete="add1"
                  onChange={ event => setAddress1(event.target.value) }
                /></Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="address2"
                  label="Address 2"
                  value={ address2 }
                  name="address2"
                  autoComplete="add2"
                  onChange={ event => setAddress2(event.target.value) }
                /></Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="address3"
                  label="Address 3"
                  value={ address3 }
                  name="address3"
                  autoComplete="add3"
                  onChange={ event => setAddress3(event.target.value) }
                /></Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="city"
                  label="Address 3"
                  value={ city }
                  name="city"
                  autoComplete="city"
                  onChange={ event => setCity(event.target.value) }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="state"
                  label="State"
                  value={ state }
                  name="state"
                  autoComplete="state"
                  onChange={ event => setState(event.target.value) }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="zip"
                  label="Zip"
                  value={ zip }
                  name="zip"
                  autoComplete="zip"
                  onChange={ event => setZip(event.target.value) }
                />
              </Grid>
              <Grid item xs={12}>
              
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
                Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                    Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
         
      </Container>
    );
  }else if (signUp) {
    return <Redirect to="/profile" />;
  } }