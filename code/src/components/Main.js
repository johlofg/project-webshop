import React  from 'react'
import { useSelector } from 'react-redux'
import { CssBaseline,  Container, AppBar, Toolbar } from '@material-ui/core'

import useStyles from '../styles'

import Menu from './Menu'
import ProductPage from './ProductPage'
import WelcomePage from './WelcomePage'

const Main = () => {
  const displayWelcome  = useSelector(store => store.products.displayedData)
  
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
      {!displayWelcome && <WelcomePage />}
      {displayWelcome && <ProductPage />}  
      {console.log(displayWelcome)}            
      </Container>       
    </>         
  )
}

export default Main