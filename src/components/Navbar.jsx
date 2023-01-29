import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
export const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>
        <Link to={`/`} >Logo</Link>
      </h2>
     <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/new`} className='new-btn'>Novo post</Link>
        </li>
      </ul>
    </nav>
  );
};
