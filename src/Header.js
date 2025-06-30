import React from "react";
import './Header.css';

function Header(){
return (
    <>
    <div className="header-div">

        <span className="name"> Monika's portfolio </span>
        
         <li className="one"><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Service</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contact">Contact me</a></li>
            
        
        
    </div></>
);}



export default Header;