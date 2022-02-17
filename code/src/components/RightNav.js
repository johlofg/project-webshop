import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { Button, } from '@material-ui/core'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'

import { onHandleJewelery, onHandleElectronics, onHandleMen, onHandleWomen } from '../reducer/products'

const BtnContainer = styled.ul`
display: none;  
list-style: none;

  li {
    padding: 40px 0px;
    margin-top: 40px; 
  }  

  @media (max-width: 599px); {
    display: flex;
    flex-flow: column nowrap;
    text-align: left;
    background-color: #3f51b5;
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
  
      const onJewelery = () => {
        dispatch(onHandleJewelery())
      }
      const onElectronics = () => {
        dispatch(onHandleElectronics())
      }
      const onMen = () => {
        dispatch(onHandleMen())
      }
      const onWomen = () => {
        dispatch(onHandleWomen())
      }        
        const dispatch = useDispatch()

    return ( 
      <Stack direction='column' divider={<Divider oriention='horizontal' flexItem />} spacing={1}> 
        <BtnContainer open={open}>        
          <li>
            <Button                        
              onClick={onMen}>    
              Mens clothing
            </Button> 
          </li>    
          <li>
            <Button
              onClick={onWomen}>
              Womans Clothing
            </Button>
          </li>    
          <li>
            <Button 
              onClick={onJewelery}>
              Jewelery
            </Button>        
          </li>    
          <li>
            <Button
              onClick={onElectronics}>
              Electronics
            </Button>                  
          </li>
        </BtnContainer>
      </Stack>
  ) 
}
export default RightNav