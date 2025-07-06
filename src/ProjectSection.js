import React from "react";
import "./ProjectSection.css";


function ProjectSection() {
  return (
   
    <div id="project">
     
      <div className="project-container">
        <div className="project-content">
          <h1>My projects</h1>
          <div className="cards">
            <div className="card">
              <h2>Shopping App</h2>
              <img src="shop.jpeg" alt="insert image"></img>
              <p>
                Created a full stack Shopppping app using Spring Boot &
                react.js.
              </p>
              <a href="#">
                <span className="more">Github link</span>
              </a>
            </div>
            <div className="card">
              <h2>My portfolio</h2>
              <img src="email.jpeg" alt="insert image"></img>
              <p>
                This portfolio that you seeing is one of my first one.
              </p>
              <a href="#home">
                <span className="more">Click</span>
              </a>
            </div>
            <div className="card">
              <h2>Weather app</h2>
              <img src="we.jpg" alt="insert image"></img>
              <p>Weather app using API </p>
              <a href="#" target="_blank">
                <span className="more">check here</span>
              </a>
            </div>
            <div className="card">
              <h2>Basics</h2>
              <img src="basic.jpeg" alt="insert image"></img>
              <p>Created To-do app, clock, weather forcast app etc </p>
              <a href="https://timer-app-ashy.vercel.app" target="_blank">
                <span className="more">check now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectSection;
