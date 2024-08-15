import React from 'react';
import "./navbar.css"

function Navbar() {
  return (
    <div className="navbar">
      <span className="product_name">Deserts</span>
        
    <div className="navbar_links">
      <a href="/" className="link">
        Home
      </a>

      <a href="/about" className="link">
        About
      </a>

      <a href="/contact" className="link">
        Contact
      </a>
      </div>
    </div>
  )
}

export default Navbar
