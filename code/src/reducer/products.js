import { createSlice } from "@reduxjs/toolkit"

const products = createSlice({
  name: "products",
  initialState: {    
    displayedData: null, 
    loading: false       
  },
  reducers: {
    setDisplayedData: (store, action) => {
      store.displayedData = action.payload
    }, 
    setLoading: (store, action) => {
      store.loading = action.payload
    }
  }   
})

export const onHandleJewelery = (displayedData) => {
  return (dispatch) => {
    dispatch(products.actions.setLoading(true))
    fetch(`https://fakestoreapi.com/products/category/jewelery`)
    .then(res => res.json())
    .then(json => dispatch(products.actions.setDisplayedData(json)))
    .finally(() => dispatch(products.actions.setLoading(false))) 
  }
}

export const onHandleMen = (displayedData) => {
  return (dispatch) => {
    dispatch(products.actions.setLoading(true))
    fetch(`https://fakestoreapi.com/products/category/men's%20clothing`)
    .then(res => res.json())
    .then(json => dispatch(products.actions.setDisplayedData(json)))
    .finally(() => dispatch(products.actions.setLoading(false))) 
  }
}

export const onHandleWomen = (displayedData) => {
  return (dispatch) => {
    dispatch(products.actions.setLoading(true))
    fetch(`https://fakestoreapi.com/products/category/women's%20clothing`)
    .then(res => res.json())
    .then(json => dispatch(products.actions.setDisplayedData(json)))
    .finally(() => dispatch(products.actions.setLoading(false))) 
  }
}

export const onHandleElectronics = (displayedData) => {
  return (dispatch) => {
    dispatch(products.actions.setLoading(true))
    fetch(`https://fakestoreapi.com/products/category/electronics`)
    .then(res => res.json())
    .then(json => dispatch(products.actions.setDisplayedData(json)))
    .finally(() => dispatch(products.actions.setLoading(false))) 
  }
}

export default products