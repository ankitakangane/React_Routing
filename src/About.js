import React from 'react';
import Navbar from "./Navbar";
import about_img from "./about.jpg (2).png"

function About() {
  return (
    <div>
     <Navbar/>
      <h1 className="product_title">About</h1>
      <img src={about_img } className="product_img"/>
    </div>
  )
}

export default About
