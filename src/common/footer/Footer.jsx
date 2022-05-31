import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>Ecommerce</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li><Link to='/#' className="color-white">Our Stores</Link></li>
              <li><Link to='/#' className="color-white">Terms & Conditions</Link></li>
              <li><Link to='/#' className="color-white">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li><Link to='/#' className="color-white">How to Buy </Link></li>
              <li><Link to='/#' className="color-white">Track Your Order </Link></li>
              <li><Link to='/#' className="color-white">Returns & Refunds </Link></li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li><Link to='/#' className="color-white">ABC B-903, Doha, Qatar </Link></li>
              <li><Link to='/#' className="color-white">Email: nihal@developer.com</Link></li>
              <li><Link to='/#' className="color-white">Phone: +974 5048 5697</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
