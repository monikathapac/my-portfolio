import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import "./FooterSection.css";
function Footer() {
  return (
    <div div id="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3>Monika's portfolio</h3>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Rewiew</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#contact">Contact me</a>
            </li>

            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-text">
        Made with{" "}
        <FontAwesomeIcon icon={fasHeart} style={{ color: "#f03838" }} /> by
        Monika Thapa
      </div>
    </div>
  );
}

export default Footer;

//add a chat bot
