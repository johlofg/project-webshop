import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    padding: '15px 0'
  },
  cardMedia: {
    height: 400,
    width: '100%',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',    
  },
  mainContainer: {
    marginTop: '100px'
  },
  cartCard: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%'
  },
  cartList: {
    marginTop: '100px',
    
  },
  cartCardMedia: {
    height: 80,
    width: '33%'
  },
  totalPrice: {
    marginTop: '5px'
  }
}))

export default useStyles