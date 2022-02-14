import { createSlice } from "@reduxjs/toolkit"

const products = createSlice({
  name: "products",
  initialState: {    
    displayedData: [],        
  },
  reducers: {
    setDisplayedData: (store, action) => {
      store.displayedData = action.payload
    } 
  }   
})
export default products