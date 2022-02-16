import React  from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import CategoryBtns from './CategoryBtns'
import Hambuger from './Hambuger';

const Menu = () => {   

  return (
    <>    
      <Link to='/Cart'>
        <Button type='button'>
          <ShoppingBasketIcon />  
        </Button>
      </Link> 
      <Hambuger />
      <CategoryBtns /> 
    </>
  )
}

export default Menu