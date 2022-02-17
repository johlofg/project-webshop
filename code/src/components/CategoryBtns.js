import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, ButtonGroup, Box } from '@material-ui/core'

import { onHandleJewelery, onHandleElectronics, onHandleMen, onHandleWomen } from '../reducer/products'

const CategoryBtns = () => { 

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
    <Box component='div' sx={{ display:{ xs:'none', sm:'block', md:'block', lg:'block', xl:'block' } }}>
      <ButtonGroup fullWidth variant='contained' aria-label='outlined category buttons' color='primary' > 
            <Button              
              onClick={onMen}>    
              Mens clothing
            </Button>
            <Button              
              onClick={onWomen}>
              Womans Clothing
            </Button> 
            <Button              
              onClick={onJewelery}>
              Jewelery
            </Button>                 
            <Button              
              onClick={onElectronics}>
              Electronics
            </Button>               
      </ButtonGroup>
    </Box>
  )
}
export default CategoryBtns