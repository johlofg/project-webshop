import { createSlice } from "@reduxjs/toolkit"

const products = createSlice({
  name: "products",
  initialState: {
    category: null,
  },
  reducers: {
    setCategory: (store, action) => {
      store.category = action.payload
      console.log(action)
    }
  }
})
export default products