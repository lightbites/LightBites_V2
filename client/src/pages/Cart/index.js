import React, {Fragment} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Item from "./Item";
import useFetch from "./Hooks";

export default function Cart() {
  const [data, loading] = useFetch("https://lightbites.herokuapp.com/api/cart"); 

  return (
    <Fragment>
      <Header />
      <main>
        {loading ? (
          "Loading Your Cart..."
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
      </main>
      <Footer />
    </Fragment>
  );
}