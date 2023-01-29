import React from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container">
        <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link to='/header' className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to='/about' className="nav-link">About Me</Link>
            </li>
            <li className="nav-item">
                <Link to='/services' className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
                <Link to='/contact' className="nav-link">Contact Me</Link>
            </li>
            </ul>
        </div>
    </div>
    </nav>
  )
}

export default Navbar
