import React, {Fragment} from "react";
import Header from "../../components/Header-Welcome";
import Item from "./Item";
import useFetch from "./Hooks";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

function Loading() {
  return (
    <Item 
      imageUrl={"http://www.fillmurray.com/g/75/75"}
    />
  );
}

const useStyles = makeStyles(theme => ({
  checkoutContainer: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    width: "500px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
}));

export default function Cart() {
  const classes = useStyles();
  const [data, loading] = useFetch("https://lightbites.herokuapp.com/api/cart"); 
  
  function handleClick(e) {
    e.preventDefault();
    alert(`Your payment of $${total} has been paid. Your delivery will be sent out at the beginning of the week.`);
  }

  const total = loading ? 0 : data.reduce((accumulator, currentValue)=>{
    return parseFloat(accumulator) + parseFloat(currentValue.price * parseInt(currentValue.quantity));
  }, 0);
  return (
    <Fragment>
      <Header />
      <main>
        {loading ? (
          <Loading />
        ) : (
          data.map((item, index) => {
            console.log(item);
            return <Item
              key={index}
              mealid={item.meal_id}
              price={`$${item.price}`}
              quantity={item.quantity}
            />;
          })
        )}
        <Grid container justify={"center"}>
          <Paper className={classes.checkoutContainer}>
            {loading ? "Loading Total": `Total: $${total}`} <Button color="primary" variant="contained" onClick={handleClick}>Checkout</Button>
          </Paper>
        </Grid>
      </main>
    </Fragment>
  );
}