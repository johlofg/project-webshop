import React from 'react'
import { useDispatch } from 'react-redux'

import products from '../reducer/products'

const CategoryBtns = () => { 
  
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
    <div>
      <button 
        type="button"
        onClick={onHandleMen}>    
        Mens clothing
      </button>          
      <button 
        type="button"
        onClick={onHandleWomen}>
        Woman´s Clothing
      </button>          
      <button 
        type="button"
        onClick={onHandleJewelery}>
        Jewelery
      </button>       
      <button 
        type="button"
        onClick={onHandleElectronics}>
        Electronics
      </button>         
    </div>
  )
}
export default CategoryBtns