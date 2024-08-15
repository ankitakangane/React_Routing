import React from 'react';
import Navbar from "./Navbar";
import home_img from "./home.jpg (2).png";

function Home() {
  return (
    <div>
        <Navbar/>
      <h1 className="product_title">Home</h1>
      <img src={home_img} className="product_img"/>
    </div>
  )
}

export default Home
