import React from "react"
import { Provider } from "react-redux"
import { combineReducers, configureStore } from "@reduxjs/toolkit"

import products from "./reducer/products"
import cart from "./reducer/cart"

import Main from "./components/Main"
import CategoryBtns from './components/CategoryBtns'

const reducer = combineReducers({
  products: products.reducer,
  cart: cart.reducer
})

const store = configureStore({ reducer })

const App = () => {
  return (
    <Provider store={store}>
      <CategoryBtns />
      <Main />
    </Provider>
  )
}
export default App