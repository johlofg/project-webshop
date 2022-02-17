import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Typography, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Container, AppBar, Toolbar } from '@material-ui/core'

import HomeBtn from './HomeBtn'
import Menu from './Menu'
import Loading from './Loading'

import useStyles from '../styles'

import cart from '../reducer/cart'

const ProductPage = () => {
  const loading = useSelector(store => store.products.loading)
  const data = useSelector(store => store.products.displayedData)
  
  const dispatch = useDispatch() 

  const classes = useStyles()

  return (
    <Container className={classes.mainContainer} maxWidth='md'>    
      <CssBaseline />
      <AppBar>
          <Toolbar>
            <Menu />
            <HomeBtn />
          </Toolbar>
      </AppBar>
      <Container className={classes.cardContainer} maxWidth='md'>
        {loading && <Loading />}
        {!loading && (

          <Grid container spacing={4}>
          {data.map(product => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>                   
                <CardMedia                    
                  className={classes.cardMedia}                      
                  image={product.image}
                  title='Image title'
                  alt='product'
                  />                    
                <CardContent className={classes.cardContent}>
                  <Typography variant="body1" gutterBottom>{product.title}</Typography>
                  <Typography variant="body1" gutterBottom>{product.price} £</Typography>
                </CardContent>
                <CardActions>
                  <Button size='medium' color='primary' onClick={() => { dispatch(cart.actions.addItemToCart(product)) }}>
                    Add to cart
                  </Button>
                </CardActions>
              </Card>  
            </Grid>
          ))}                 
        </Grid>
      )}
      </Container> 
    </Container>
    
  )
}

export default ProductPage