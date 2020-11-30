import React from "react"
import {useEffect, useState} from 'react'

const Product =({match})=>{
  console.log(match)
const [product, setProduct] =useState({})
useEffect(() => {
    fetchProduct();
  }, []);
const fetchProduct = async ()=>{
    const data = await fetch(`https://fakestoreapi.com/products/${match.params.id}`)
    const product = await data.json();
    //console.log(product)
    setProduct(product)
}
return(
  <div>
<h3>{product.title}</h3>
<img src={product.image}></img>
</div>)

}

export default Product;