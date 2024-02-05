import React from 'react'
import style from "./ProductCard.module.css"
import image from "../../Assests/images/shein Zip front suede biker jackets .jpg"


export default function ProductCard() {
  return (
    <div className={style.card}>
        <div className={style.imageSec}><img src={image} alt="Product" /></div>
        <div className={style.details}>
        <span className={style.title}>jackets</span>
        <span className={style.price}>22$</span>
      </div>
    </div>
  )
}
