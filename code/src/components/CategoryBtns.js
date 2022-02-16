import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, ButtonGroup, Box } from '@material-ui/core'
import { Link } from 'react-router-dom'

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
    <Box component='div' sx={{ display:{ xs:'none', sm:'none', md:'block', lg:'block', xl:'block' } }}>
      <ButtonGroup variant='contained' aria-label='outlined category buttons' color='secondary'>
        <Link to='/products'>  
          <Button 
            type="button"
            onClick={onHandleMen}>    
            Mens clothing
          </Button>
        </Link>
        <Link to='/products'>          
          <Button 
            type="button"
            onClick={onHandleWomen}>
            Woman´s Clothing
          </Button> 
          </Link>
        <Link to='/products'>         
          <Button 
            type="button"
            onClick={onHandleJewelery}>
            Jewelery
          </Button>
          </Link> 
        <Link to='/products'>      
          <Button 
            type="button"
            onClick={onHandleElectronics}>
            Electronics
          </Button> 
          </Link>        
      </ButtonGroup>
    </Box>
  )
}
export default CategoryBtns