import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import cart from '../reducer/cart'

const Cart = () => {
  const products = useSelector(store => store.cart.items)
  const totalPrice = useSelector(store => (
    store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
  ))
  
  const dispatch = useDispatch()

  return (

    <ul>
      {products.map((product) => (
        <div key={product.id}>
          <li>{product.title}</li>
          <li>{product.quantity}</li>
          <button type="button" onClick={() => dispatch(cart.actions.removeItemFromCart(product))}>-</button>
        </div>
      ))}
      <li>Total Price: {totalPrice}£</li>
    </ul>
  )
}

export default Cart