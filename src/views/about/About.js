import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import about_img from "./about.jpg (2).png";
import Footer from "./Footer";

function About() {
  return (
    <div>
     <Navbar/>
      <h1 className="product_title">About</h1>
      <img src={about_img } className="product_img"/>
      <Footer/>
    </div>
  )
}

export default About
