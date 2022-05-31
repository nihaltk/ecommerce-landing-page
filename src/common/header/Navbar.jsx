import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              <li>
                <Link to='/' className="active">home</Link>
              </li>
              <li>
                <Link to='/#'>About</Link>
              </li>
              <li>
                <Link to='/#'>shop</Link>
              </li>
              <li>
                <Link to='/#'>Blog</Link>
              </li>
              <li>
                <Link to='/#'>Sell</Link>
              </li>
              <li>
                <Link to='/#'>contact</Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
