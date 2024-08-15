import React from 'react';
import Navbar from "./Navbar";
import contact_img from "./contact.jpg (2).png"

function Contact() {
  return (
    <div>
            <Navbar/>
      <h1 className="product_title">Contact</h1>
      <img src={contact_img} className="product_img"/>
    </div>
  )
}

export default Contact
