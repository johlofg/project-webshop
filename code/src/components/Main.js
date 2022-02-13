import React, {useEffect, useState}  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import Cart from './Cart'

import cart from '../reducer/cart'

const ProductCard = styled.div`
height: 20vw;
width: 20vh;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid #000;
`


const Main = () => {
  const [data, setData] = useState([])

  const displayedCategory = useSelector(store => store.products.category)

  const dispatch = useDispatch()
  
  useEffect(() => {  
    fetch(`https://fakestoreapi.com/products/category/${displayedCategory}`)
    .then(res => res.json())
    .then(json => setData(json))    
  }, [displayedCategory])
  
  return (    
      <div>
        <h1>Hello world</h1>
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