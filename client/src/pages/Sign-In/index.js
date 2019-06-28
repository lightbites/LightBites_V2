import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../components/Header-Welcome";
import { Redirect } from "react-router-dom";

function LoveFood() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Learn to love Food Again"}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1556911259-f9849ab65850?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=100)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignInSide() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const credentialCheck = e => {
    e.preventDefault();
    fetch("https://lightbites.herokuapp.com/api/customers", {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        for (let i = 0; i < data.length; i++) {
          const emailSearch = data[i].email;
          const passSearch = data[i].password;

          console.log("--" + email);
          console.log("--" + password);

          console.log(emailSearch);
          console.log(passSearch);
          if (email === emailSearch && password === passSearch) {
            setLogin(true);
            //Load the user data in to sessionStorage
            return sessionStorage.setItem("myValueInLocalStorage", JSON.stringify(data[i]));
          } else if (i === (data.length - 1)) { //Check to see if we've hit the last item in the data array
            return alert(
              "Email and/or Password entered is incorrect. Please try again."
            );
          }
        }
      });
  };

  if (!login) {
    return (
      <div>
        <Header />
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  value={email}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  onChange={e => setEmail(e.target.value)}
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  value={password}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  onChange={e => setPassword(e.target.value)}
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={credentialCheck}
                >
                  Sign In
                </Button>

                <Grid container>
                  <Grid item xs />
                  <Grid item>
                    <Link href="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Box mt={5}>
                  <LoveFood />
                </Box>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  } else if (login) {
    return <Redirect to="/profile" />;
  }
}
