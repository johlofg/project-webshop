import { createSlice } from "@reduxjs/toolkit"

const products = createSlice({
  name: "products",
  initialState: {
    category: null,
    displayedData: [],
  },
  reducers: {
    setCategory: (store, action) => {
      store.category = action.payload      
    },
    setDisplayedData: (store, action) => {
      store.displayedData = action.payload
    }
  }
})
export default products