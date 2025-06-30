import React from "react";
import './ProjectSection.css';

function ProjectSection(){
return(
    
<div className="project-container">
<div className="project-content">
        <h1>My projects</h1>
    <div className="cards">
        <div className="card">
            <h2>Shopping App</h2>
            <img src="shop.jpeg" alt="insert image"></img>
            <p>Created a full stack Shopppping app using Spring Boot & react.js.</p>
            <a href="#"><span className="more">see here</span></a>
        </div>
        <div className="card">
            <h2>Email template design</h2>
            <img src="email.jpeg" alt="insert image"></img>
            <p>Created responsive email templates using HTML/CSS/BootStrap.</p>
            <a href="#"><span className="more">see here</span></a>
        </div>
        <div className="card">
            <h2>Basics</h2>
            <img src="basic.jpeg" alt="insert image"></img>
            <p>Created To-do app, clock, weather forcast app etc </p>
            <a href="https://timer-app-ashy.vercel.app" target="_blank"><span className="more">more</span></a>
        </div>

        
    </div></div>
</div>);
}
export default  ProjectSection;