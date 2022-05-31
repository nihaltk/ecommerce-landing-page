import React, { useState } from "react"
import Img from "../../images/shops/1.jpg"

const ShopCart = ({ addToCart, shopItems }) => {
 const [count, setCount] = useState(0)
 const increment = () => {
   setCount(count + 1)
 }

 return (
   <>
     {shopItems.map((shopItems) => {
       return (
         <div className='product mtop'>
           <div className='img'>
             <span className='discount'>{shopItems.discount}% Off</span>
             <img src={Img} alt='' />
             <div className='product-like'>
               <label>{count}</label> <br />
               <i className='fa-regular fa-heart' onClick={increment}></i>
             </div>
           </div>
           <div className='product-details'>
             <h3>{shopItems.name}</h3>
             <div className='rate'>
               <i className='fa fa-star'></i>
               <i className='fa fa-star'></i>
               <i className='fa fa-star'></i>
               <i className='fa fa-star'></i>
               <i className='fa fa-star'></i>
             </div>
             <div className='price'>
               <h4>QAR {shopItems.price}.00 </h4>
               <button onClick={() => addToCart(shopItems)}>
                 <i className='fa fa-plus'></i>
               </button>
             </div>
           </div>
         </div>
       )
     })}
   </>
 )
}

export default ShopCart


