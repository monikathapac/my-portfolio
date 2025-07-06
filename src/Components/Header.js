import React from "react";
import "./Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <>
      <div className="header-div">



        <span className="name"> Monika's portfolio </span>
 <li>
        <NavLink to="/">Home</NavLink></li>
       
        <li>
          <a href="#about">About me</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact me</a>
        </li>
        <li>
        <NavLink to="/faq">FAQ</NavLink></li>
        <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} />
      </div>

      
    </>
  );
};

export default Header;
