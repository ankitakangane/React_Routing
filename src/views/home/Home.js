import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import home_img from "./home.jpg (2).png";
import Footer from "../../components/footer/Footer";
import toast,{Toaster} from "react-hot-toast";


function Home() {
  return (
    <div>
        <Navbar/>
      <h1 className="product_title">Home</h1>
      <img src={home_img} className="product_img"/>
      <div className="butn_container">
      
      <button type="button" className="butn" onClick = { () => {
        toast.loading("Please wait !!!");
      }}>
        Load
      </button>

      <button type="button" className="butn" onClick = { () => {
        toast.success("Loaded Successfully...");
      }}>
        Finish
      </button>

      <button type="button" className="butn" onClick = { () => {
        toast.error("Failed to load");
      }}>
        Fail
      </button>
      </div>
      <Footer/>
      <Toaster/>
    </div>
  )
}

export default Home
