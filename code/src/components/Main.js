import React, {useEffect, useState}  from 'react'
import { useSelector } from 'react-redux'

const Main = () => {
  const [data, setData] = useState([])

  const displayedCategory = useSelector(store => store.products.category)
  
useEffect(() => {  
  fetch(`https://fakestoreapi.com/products/category/${displayedCategory}`)
  .then(res => res.json())
  .then(json => setData(json))    
}, [displayedCategory])

return (    
      <div>
        <h1>Hello world</h1>
        {data.map(product => (
          <div key={product.id}>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <img src={product.image} alt="the product"/>
        </div>
        ))}
      </div>   
  )
}

export default Main