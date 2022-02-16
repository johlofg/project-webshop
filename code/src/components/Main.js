import React from 'react'
import { Typography, CssBaseline,  Container, AppBar, Toolbar } from '@material-ui/core'

import Menu from './Menu'
import useStyles from '../styles'

const Main = () => {
  
  const classes = useStyles()

  return (    
    <>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Menu />
        </Toolbar>
      </AppBar>
      <Container className={classes.mainContainer} maxWidth='md'>
        <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
          WebShop
        </Typography>        
      </Container>       
    </>         
  )
}

export default Main