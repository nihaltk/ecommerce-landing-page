import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +974 50485697</label>
            <i className='fa fa-envelope'></i>
            <label> nihal@developer.com</label>
          </div>
          <div className='right row RText'>
            <label><a href="" className="color-white">FAQ</a></label>
            <label><a href="" className="color-white">Track Order</a></label>
            <label><a href="" className="color-white">Need Help</a></label>
            <label><a href="" className="color-white">QAR</a></label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
