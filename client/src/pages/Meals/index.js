import React from "react";
import Header from "../../components/Header-Welcome";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MealCard from "../../components/Card";
import SimpleMenu from "../../components/Menu";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  box: {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1521986329282-0436c1f1e212?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80')",
    backgroundSize: "auto 500px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center right",
    height: "500px",
    marginTop: "20px"
  },
  paragraph: {
    marginTop: "20px"
  },
  menu: {
      float: "right",
      marginTop: 10
  }
}));
export default function Meals() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Container fixed>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <p className={classes.paragraph}>
                Bacon ipsum dolor amet ham hock leberkas beef landjaeger, corned
                beef picanha alcatra prosciutto rump burgdoggen beef ribs
                pastrami biltong. Ground round andouille tri-tip biltong ham
                bacon shankle shank landjaeger porchetta.{" "}
              </p>
            </Grid>
            <Grid item xs={8}>
              <Box className={classes.box} />
            </Grid>
          </Grid>
          <div className={classes.menu}>
            <SimpleMenu />
          </div>
          <Grid container spacing={3}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
              <Grid item xs={3}>
                <MealCard title="Keto Pizza" />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
}
