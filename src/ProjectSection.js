import React from "react";
import "./ProjectSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faCartShopping,
  faClock,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

function ProjectSection() {
  return (
    <div id="project">
      <div className="project-container">
        <div className="project-content">
          <h1>My projects</h1>
          <div className="cards">
            <div className="card">
              <h2>Shopping App</h2>
              <FontAwesomeIcon icon={faCartShopping} className="my_icon" />
              <p>
                Created a full stack Shopping app using Spring Boot, with
                features like auction & filters.
              </p>
              <a href="#">
                <span className="more">Github link</span>
              </a>
            </div>
            <div className="card">
              <h2>Weather app</h2>
              <FontAwesomeIcon icon={faSun} className="my_icon" />
              <p>
                Weather app using Javascript APIs on top of HTML/CSS. Gives you
                real time weather, temperature & overall climate of that place.{" "}
              </p>
              <a href="https://weather-app-i226.vercel.app" target="_blank">
                <span className="more">check now</span>
              </a>
            </div>
            <div className="card">
              <h2>My portfolio</h2>

              <FontAwesomeIcon icon={faAddressCard} className="my_icon" />
              <p>This portfolio that you seeing is one of my first one.</p>
              <a href="#home">
                <span className="more">Click</span>
              </a>
            </div>

            <div className="card">
              <h2>Timer watch</h2>

              <FontAwesomeIcon icon={faClock} className="my_icon" />
              <p>Real time watch with timer, calculator etc</p>
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
