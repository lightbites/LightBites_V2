import React, {Fragment}  from "react";
import Header from '../../components/Header'
import Item from './Item'
import useFetch from './Hooks'

import Button from '@material-ui/core/Button'

function Loading() {
  return (
    <Item 
      imageUrl={'http://www.fillmurray.com/g/75/75'}
    />
  )
}

//TODO: Checkout Button
export default function Cart() {
  const [data, loading] = useFetch('https://lightbites.herokuapp.com/api/cart'); 
  const total = loading ? 0 : data.reduce((accumulator, currentValue)=>{
    return parseFloat(accumulator) + parseFloat(currentValue.price);
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
                />
              })
          )}
          <div style={{textAlign: 'center'}}>
              {loading ? 'Loading Total': `Total: $${total}`} <Button>Checkout</Button>
          </div>
        </main>
    </Fragment>
  )
}