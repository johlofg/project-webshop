import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Button, } from '@material-ui/core'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'

import products from '../reducer/products'

const BtnContainer = styled.ul`
display: none;  
list-style: none;

  li {
    padding: 40px 0px;
    margin-top: 40px; 
  }  

  @media (max-width: 959px) {
    display: flex;
    flex-flow: column nowrap;
    text-align: left;
    background-color: #3f51b5;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')}
    transition-duration: 5s;    
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
    <Stack direction='column' divider={<Divider oriention='horizontal' flexItem />} spacing={1}> 
      <BtnContainer open={open}>        
          <li>
            <Button                        
              onClick={onHandleMen}>    
              Mens clothing
            </Button> 
          </li>
        
          <li>
            <Button
              onClick={onHandleWomen}>
              Womans Clothing
            </Button>
          </li>
        
          <li>
            <Button 
              onClick={onHandleJewelery}>
              Jewelery
            </Button>        
          </li>
        
          <li>
            <Button
              onClick={onHandleElectronics}>
              Electronics
            </Button>                  
          </li>
        </BtnContainer>
    </Stack>
  ) 
}
export default RightNav