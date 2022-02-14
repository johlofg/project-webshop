import { createSlice } from "@reduxjs/toolkit"

const cart = createSlice({
  name: 'cart',
  initialState: {
    items: [],    
  },
  reducers: {
    addItemToCart: (store,action) => {
      const existingProduct = store.items.find((item) => item.id === action.payload.id)

      if (existingProduct) {
        existingProduct.quantity += 1
      } else {
        store.items.push({...action.payload,quantity: 1})
      }
    },
    removeItemFromCart: (store, action) => {
      const existingProduct = store.items.find((item) => item.id === action.payload.id)
      if (existingProduct && existingProduct.quantity === 1) {
        store.items = store.items.filter((item) => item.id !== action.payload.id)
      } else if (existingProduct) {
      existingProduct.quantity -= 1
    }
  }    
}
})

export default cart