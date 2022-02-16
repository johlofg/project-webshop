import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppBar, Toolbar, Container, Grid, Card, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
import Fab from '@mui/material/Fab';

import cart from '../reducer/cart'
import useStyles from '../styles'
import HomeBtn from './HomeBtn'


const Cart = () => {
  const products = useSelector(store => store.cart.items)
  const totalPrice = useSelector(store => (
    store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
    ))
    const totalPriceRounded = Math.round(totalPrice * 10) /10
  
  const dispatch = useDispatch()
  
  const classes = useStyles()

  return (
    <>
    <AppBar>
      <Toolbar>
        <HomeBtn />                 
      </Toolbar>
    </AppBar>
      <Container className={classes.cartList} maxWidth='sm'>
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid className={classes.cartGrid} item key={product.id}>
              <Card className={classes.cartCard}>
                <CardMedia
                  className={classes.cartCardMedia}
                  image={product.image}
                  title='Image title'
                  alt='product in cart'
                  />  
                <CardContent>
                  <Typography variant='h6' paragraph>{product.title}</Typography>
                  <Typography variant='subtitle2' paragraph>Quantity: {product.quantity}</Typography>
                </CardContent>
                <CardActions>
                  <Fab size='small' onClick={() => dispatch(cart.actions.removeItemFromCart(product))}>
                    <DeleteRoundedIcon />
                  </Fab>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Typography className={classes.totalPrice} variant='h4'>Total Price: {totalPriceRounded} £</Typography>
      </Container>
    </>
  )
}

export default Cart