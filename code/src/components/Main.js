import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Typography, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Container } from '@material-ui/core'

import cart from '../reducer/cart'
import Menu from './Menu'
import useStyles from '../styles'


const Main = () => {

  const data = useSelector(store => store.products.displayedData)
  
  const dispatch = useDispatch() 
  
  const classes = useStyles()

  return (    
      <>
        <CssBaseline />
        <Container maxWidth="md">
          <Menu /> 
          <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
            WebShop
          </Typography> 
          
            <Container className={classes.cardContainer} maxWidth='md'>
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
                      <Typography variant="p" gutterBottom>{product.title}</Typography>
                      <Typography variant="p" gutterBottom>{product.price} £</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='small' color='primary' onClick={() => { dispatch(cart.actions.addItemToCart(product)) }}>
                        Add to cart
                      </Button>
                    </CardActions>
                  </Card>  
                </Grid>
          ))}                 
          </Grid>
          </Container> 
        </Container>       
      </>         
  )
}

export default Main