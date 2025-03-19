import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import a1 from "./Images/b1.jpeg";

const Home = () => {
  return (
    <div>
    <nav className="flex justify-between items-center px-10 py-5 shadow-md">
      <h1 className="text-2xl font-bold text-black">EDGECUT</h1>
      <ul className="flex space-x-6 text-lg">
        <li><Link to="/" className="hover:text-gray-500">HOME</Link></li>
        <li><Link to="/about" className="hover:text-gray-500">ABOUT</Link></li>
        <li><Link to="/furnitures" className="hover:text-gray-500">FURNITURES</Link></li>
        <li><Link to="/blog" className="hover:text-gray-500">BLOG</Link></li>
        <li><Link to="/contact" className="hover:text-gray-500">CONTACT US</Link></li>
        <li><Link to="/login" className="hover:text-gray-500">LOGIN</Link></li>
      </ul>
    </nav>

    <div>
      <img src={a1} alt="background" className="bg1"/>
     </div>
     </div>
     
  );
};



export default Home;
