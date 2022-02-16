import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, AppBar, Toolbar, Container, Grid, Card, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'

// import Menu from './Menu'
import cart from '../reducer/cart'
import useStyles from '../styles'
import Hambuger from './Hambuger'


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
        <Link to='/'>
          <Button type='button'>
            <HomeRoundedIcon />
          </Button>
        </Link> 
        <Hambuger />          
      </Toolbar>
    </AppBar>
      <Container className={classes.cartList} maxWidth='sm'>
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item key={product.id}>
              <Card className={classes.cartCard}>
                <CardMedia
                  className={classes.cartCardMedia}
                  image={product.image}
                  title='Image title'
                  alt='product in cart'
                  />  
                <CardContent>
                  <Typography variant='h5'>{product.title}</Typography>
                  <Typography variant='h6'>{product.quantity}</Typography>
                </CardContent>
                <CardActions>
                  <Button size='small' onClick={() => dispatch(cart.actions.removeItemFromCart(product))}>
                    <DeleteRoundedIcon />
                  </Button>
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