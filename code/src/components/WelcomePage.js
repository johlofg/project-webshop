import React from 'react'
import { Typography, CssBaseline, AppBar, Toolbar } from '@material-ui/core'

import Menu from './Menu'

const WelcomePage = () => {

  

  return (    
    <>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Menu />
        </Toolbar>
      </AppBar>      
        <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
          Webshop
        </Typography>
        <Typography variant='subtitle2' align='center' color='textSecondary' gutterBottom paragraph>
          WebShop WebShop WebShop WebShop WebShop WebShop WebShop WebShop WebShop WebShop WebShop WebShop WebShop WebShop WebShop WebShop WebShop 
        </Typography>        
    </>    
  )
}

export default WelcomePage
