import React from "react";
import './navbar.css';
import { A } from "hookrouter";

const Navbar = () => {
    return (
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item"><A href="/home" className="invisible-link" >Home</A> </li>
          <li className="navbar-item"><A href="/products" className="invisible-link" >Products</A></li>
          <li className="navbar-item"><A href="/users" className="invisible-link" >Users</A></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;