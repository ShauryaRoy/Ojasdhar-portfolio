import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";


function Navbar() {
  return (
    <>
      
      <div className="navbar-title   topnav" id="myTopnav" >
        
        <table className="navbar-table">
          <tr className="navbar-name">
            <th>
              <Link to="/">
                <p className="navbar-menu">Home</p>
              </Link>
            </th>
            <th >
              <Link to="/about">
                <p className="navbar-menu">About</p>
              </Link>
            </th>
            <th >
              <Link to="/work">
                <p className="navbar-menu">Work</p>
              </Link>
            </th>
            <th >
              <Link  to="/contact">
                <p  className="navbar-menu">Contact</p>
              </Link>
            </th>
          </tr>
        </table>
        
      </div>
      

    </>
  );
}

export default Navbar;
