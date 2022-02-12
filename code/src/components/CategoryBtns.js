import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import products from '../reducer/products'

const CategoryBtns = () => {
  const [category, setChosenCategory] = useState("")
  
  const dispatch = useDispatch()

  const onHandleCategory = (event) => {
    setChosenCategory(event.target.value)
  }
  dispatch(products.actions.setCategory(category))

  return (
    <div>
      <button onClick={onHandleCategory} 
        value="men's%20clothing">
          Mens clothing
      </button>
      <button onClick={onHandleCategory} 
        value="jewelery"   
      >Jewelery
      </button>
    </div>
  )
}
export default CategoryBtns