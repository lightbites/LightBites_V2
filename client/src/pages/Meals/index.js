import React, { useState } from "react";
import Header from "../../components/Header-Welcome";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MealCard from "../../components/Card";
import SimpleMenu from "../../components/Menu";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

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
  },
  button: {
    margin: "5px"
  }
}));

export default function Meals() {
  const classes = useStyles();
  const [items, setItems] = useState([]);

  fetch("https://lightbites.herokuapp.com/api/stock", {
    method: "GET"
  })
    .then(res => res.json())
    .then(data => {
      setItems(data);
    });

  const addToCart = (id, price) => {
    // console.log(id)
    // console.log(price)
    var quantity = 1;
    var url = "https://lightbites.herokuapp.com/api/cart/create";
    var data = { id, price, quantity };
    sessionStorage.setItem("myValueInLocalStorage", JSON.stringify(data));
    fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      // headers: {
      //   "Content-Type": "application/json",
      //   Accept: "application/json"
      // }
    })
      .then(res => res.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
  };

  return (
    <div>
      <Header />
      <Container fixed>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <p className={classes.paragraph}>
                Pick your meals for the week. Just click the cart icon to add
                meals to your cart.{" "}
              </p>
            </Grid>
            <Grid item xs={8}>
              <Box className={classes.box} />
            </Grid>
            <Link href="/cart">
              <Button color="primary" className={classes.button}>
                Go to Cart
              </Button>
            </Link>
          </Grid>
          {/* <div className={classes.menu}>
            <SimpleMenu />
          </div> */}
          <Grid container spacing={3}>
            {items.map(item => (
              <Grid item xs={3}>
                <MealCard
                  key={item.meal_id}
                  id={item.meal_id}
                  title={item.title1}
                  img={item.imageURL}
                  price={item.price}
                  cal={item.line06}
                  protein={item.line07}
                  carbs={item.line08}
                  fat={item.line09}
                  line11={item.line11}
                  line12={item.line12}
                  line13={item.line13}
                  line14={item.line14}
                  line15={item.line15}
                  line16={item.line16}
                  addToCart={addToCart.bind(addToCart)}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
}
