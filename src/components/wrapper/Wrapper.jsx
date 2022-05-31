import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "Free Delivery from QAR 50",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Payment Secure System",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Shop With Confidence ",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "24/7 free Support ",
    
    },
  ]
  return (
    <>
      <section className='wrapper background pads'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle ico'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
