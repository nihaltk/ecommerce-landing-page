import React from "react"
import Ndata from "./Ndata"
import Img from "../../images/arrivals/1.jpg"

const Cart = () => {
  return (
    <>
      <div className='content grid product grid2s'>
        {Ndata.map((val, index) => {
          return (
            <div className='box' key={index}>
              <div className='img'>
                <img src={Img} alt='' />
              </div>
              <h4>{val.name}</h4>
              <span>QAR {val.price}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Cart
