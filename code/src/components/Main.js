import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import Cart from './Cart'

import cart from '../reducer/cart'
import Menu from './Menu'

const ProductCard = styled.div`
height: 50vw;
width: 50vh;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid #000;
`
const Main = () => {

  const data = useSelector(store => store.products.displayedData)
  
  const dispatch = useDispatch() 
  
  return (    
      <div>
        <Menu />        
          {data.map(product => (
            <ProductCard key={product.id}>
            <p>{product.title}</p>
            <p>{product.price}</p>
            {/* <img src={product.image} alt="the product"/> */}
            <button 
              type="button"
              onClick={() => { dispatch(cart.actions.addItemToCart(product)) }}>
                Add to cart
              </button>
          </ProductCard>
          ))}  
        <Cart />         
      </div>         
  )
}

export default Main