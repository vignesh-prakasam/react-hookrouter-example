import React from "react";
import './navbar.css';

const Navbar = () => {
    return (
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">Home</li>
          <li className="navbar-item">Products</li>
          <li className="navbar-item">Users</li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;