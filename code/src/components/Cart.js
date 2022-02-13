import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import cart from '../reducer/cart'

const Cart = () => {
  const products = useSelector(store => store.cart.items)
  
  const dispatch = useDispatch()

  return (
    <ul>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
          <p>{product.quantity}</p>
          <button type="button" onClick={() => dispatch(cart.actions.removeItemFromCart(product))}>-</button>
        </div>
      ))}
    </ul>
  )
}

export default Cart