import React from "react"
import "./style.css"
import TopCart from "./TopCart"
import { Link } from "react-router-dom"

const TopCate = () => {
  return (
    <>
      <section className='TopCate background pads20'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <i className='fa fa-list'></i>
              <h2>Top Categories</h2>
            </div>
            <div className='heading-right row '>
            <Link to='/'>
              <span>View all</span>
              <i className='fa-solid fa-caret-right'></i></Link>
            </div>
          </div>
          <TopCart />
        </div>
      </section>
    </>
  )
}

export default TopCate
