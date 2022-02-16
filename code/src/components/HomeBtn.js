import React from 'react'
import { Link } from 'react-router-dom'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import { Button } from '@material-ui/core'

const HomeBtn = () => {
  return (
    <Link to='/'>
    <Button type='button'>
      <HomeRoundedIcon />
    </Button>
  </Link>
  )
}

export default HomeBtn