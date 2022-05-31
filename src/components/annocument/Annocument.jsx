import React from "react"
import { Link } from "react-router-dom"
import Img1 from "../../images/1.png"
import Img2 from "../../images/2.png"

const Annocument = () => {
  const mystyle = {
    width: "50%",
    padding:"10px",
    
  }
  const mystyle1 = {
    width: "50%",
    padding:"10px",
  }
  return (
    <>
      <section className='annocument background pads'>
        <div className='container d_flex grids'>
          <div className='img' style={mystyle}>
          <Link to='/'><img src= {Img1} width='100%' height='100%' className="br-4"/></Link>
          </div>
          <div className='img' style={mystyle1}>
          <Link to='/'><img src={Img2} width='100%' height='100%'  className="br-4"/></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Annocument
