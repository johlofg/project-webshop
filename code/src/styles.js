import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    padding: '15px 0'
  },
  cardMedia: {
    height: 200,
    width: '33%'   
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  }

}))

export default useStyles