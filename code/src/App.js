import React from "react"
import { Provider } from "react-redux"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import products from "./reducer/products"
import cart from "./reducer/cart"

import Main from "./components/Main"
import Cart from "./components/Cart"

const reducer = combineReducers({
  products: products.reducer,
  cart: cart.reducer
})

const store = configureStore({ reducer })

const App = () => {
  
  return (
    <BrowserRouter>
      <Provider store={store}> 
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>      
      </Provider>
    </BrowserRouter>
  
  )
}
export default App