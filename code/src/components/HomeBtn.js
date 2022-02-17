import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import { Button } from '@material-ui/core'
import products from '../reducer/products'

const HomeBtn = () => {

  const dispatch = useDispatch()

  return (
    <Link to='/'>
      <Button onClick={() => { dispatch(products.actions.setDisplayedData(null))}}>
        <HomeRoundedIcon />
      </Button>
    </Link>
  )
}

export default HomeBtn