import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import home_img from "./home.jpg (2).png";
import Footer from "../../components/footer/Footer";


function Home() {
  return (
    <div>
        <Navbar/>
      <h1 className="product_title">Home</h1>
      <img src={home_img} className="product_img"/>
      <Footer/>
    </div>
  )
}

export default Home
