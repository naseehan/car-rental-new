import React, { useState } from 'react'
import { Link } from "react-router-dom"
import carLogo from "../assets/images/navbar/car-logo.png"

function Navbar() {

const [nav, setNav] = useState(false)

const openNav = () => {
    setNav(!nav)
}


  return (
<>
<nav>

{/* for mobile */}
<div className={`mobile-nav ${nav ? "open-nav" : ""}`}>
    <div className="mobile-nav-close" onClick={openNav}>
    <i class="fa-regular fa-x fa-xl"></i>
    </div>
    <ul className="mobile-navbar-links">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/models">
                Models
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/team">
                Our Team
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
</div>



<div className="navbar-full">
    <div className="nav-logo">
        <img src={carLogo} alt="img" />
    </div>
        <ul>
            <li>
                <Link to="/">
                Home
                </Link>
            </li>
            <li>
                <Link to="/about">
                About
                </Link>
            </li>
            <li>
                <Link to="/models">
                Vehicle Models
                </Link>
            </li>
            <li>
                <Link to="/testimonials">
                Testimonials
                </Link>
            </li>
            <li>
                <Link to="/team">
                Our Team
                </Link>
            </li>
            <li>
                <Link to="/contact">
                Contact
                </Link>
            </li>
        </ul>
  
    <div className="nav-buttons commen-btn">
        <a href="/">Login</a>
        <button>Register</button>
    </div>


{/* for mobile */}
<div className="mobile-hamb" onClick={openNav}>
<i class="fa-solid fa-bars fa-xl"></i>
</div>

</div>
</nav>
</>
  )
}

export default Navbar