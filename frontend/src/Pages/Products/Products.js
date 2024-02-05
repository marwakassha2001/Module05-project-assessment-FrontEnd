import { useState } from 'react'
import React from 'react'
import ProductCard from '../../Component/ProductCard/ProductCard'
import image1 from "../../Assests/images/shein Zip front suede biker jackets .jpg"
import style from "./Products.module.css"

function Products() {
    const productData = [
        {
          id: 1,
          title: "Shein Zip Front Suede Biker Jacket",
          price: "22$",
          imageUrl: "image1"
        },
        {
          id: 2,
          title: "Another Jacket",
          price: "25$",
          imageUrl: "image1"
        },
        {
            id: 3,
            title: "Another Jacket",
            price: "25$",
            imageUrl: "image1"
          },
          {
            id: 4,
            title: "Another Jacket",
            price: "25$",
            imageUrl: "image1"
          },
      ];
  return (
    <div className={style.pageWrapper}>
    <div className={style.cardContainer}>
      {productData &&
        productData.map((item) => (
       <ProductCard/>
        ))}
    </div>
    </div>
  )
}

export default Products
