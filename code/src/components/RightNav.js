import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import products from '../reducer/products'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;  
  
  li {
    padding: 18px 10px;
  } 
  
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #008060;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')}
    top: 0;
    right: 0; 
    height: 100vh;
    width: 200px;    
    margin-top: 0;
  }
`

const RightNav = ({open}) => { 
  
  const onHandleJewelery = () => {
    fetch(`https://fakestoreapi.com/products/category/jewelery`)
    .then(res => res.json())
    .then(json => dispatch(products.actions.setDisplayedData(json)))    
  }

  const onHandleMen = () => {
      fetch(`https://fakestoreapi.com/products/category/men's%20clothing`)
      .then(res => res.json())
      .then(json => dispatch(products.actions.setDisplayedData(json)))    
    }
    
    const onHandleWomen = () => {
      fetch(`https://fakestoreapi.com/products/category/women's%20clothing`)
      .then(res => res.json())
      .then(json => dispatch(products.actions.setDisplayedData(json)))    
    }
    
    const onHandleElectronics = () => {
      fetch(`https://fakestoreapi.com/products/category/electronics`)
      .then(res => res.json())
      .then(json => dispatch(products.actions.setDisplayedData(json)))    
    }
  const dispatch = useDispatch()

  return (  
    <Ul open={open}>
      <li>
        <button 
          type="button"
          onClick={onHandleMen}>    
          Mens clothing
        </button>
      </li>
      <li>
        <button 
          type="button"
          onClick={onHandleWomen}>
          Woman´s Clothing
        </button>
      </li>        
      <li>
        <button 
          type="button"
          onClick={onHandleJewelery}>
          Jewelery
        </button>
      </li>
      <li>
        <button 
          type="button"
          onClick={onHandleElectronics}>
          Electronics
        </button>
      </li>           
    </Ul> 
  )
}
export default RightNav