import React from 'react'
import  { products } from '../../../../core/constants'

export default function Products() {  
  return (
    <div className='flex'>
      <input type="text" />
      <div><h1>Hello</h1></div>
      <div>
        {products.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <p>{item.newprice}</p>
            <p>{item.oldPrice}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>


  )
}
