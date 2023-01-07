import React from 'react'
import ProductCard from './ProductCard'

const Productlist = ({ProductData}) => {
  return (
   <>
   {ProductData?.map((data,index)=>( <ProductCard key={index} data={data}/>))}
    </>
  )
}

export default Productlist