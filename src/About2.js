import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import "./About2.css";

function About2() {
  const [activeSection, setActiveSection] = useState("section1");
  const [activeColor, setactiveColor] = useState("");

  return (
    <div id="about">
      <div className="about-container">
        <div className="about-content">
          <div className="left">
            <p className="name">About me</p>
            <span className="about-text">
              I am a self-taught <b>Java developer</b> & I have one year
              experience in <b>Front-end</b> designing of email templates using
              HTML & CSS.
            </span>
          </div>

          <div className="right">
            <div className="right-buttons">
              <button onMouseEnter={() => setActiveSection("section1")}>
                Skills
              </button>
              <button className="dot">
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
              </button>

              <button onClick={() => setActiveSection("section2")}>
                Experience
              </button>
              <button className="dot">
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
              </button>

              <button onMouseEnter={() => setActiveSection("section3")}>
                Education
              </button>
            </div>

            <div
              id="firstli"
              className={`section ${
                activeSection === "section1" ? "active" : ""
              }`}
            >
              <ul className="firstli">
                <li>
                  <span>
                    <b>Programming language:</b> Java, JavaScript, HTML, CSS
                  </span>
                </li>
                <li>
                  <span>
                    <b>Framework:</b> SpringBoot, React.js
                  </span>
                </li>
                <li>
                  <span>
                    <b>Database:</b> MySQL, JDBC
                  </span>
                </li>
                <li>
                  <span>
                    <b>Tools & IDEs:</b> VS Code, IntellJ IDEA, Maven, Postman,
                    Git/Github
                  </span>
                </li>
              </ul>
            </div>

            <div
              class={`section ${activeSection === "section2" ? "active" : ""}`}
            >
              <ul>
                <li className="main_li">
                  <span>
                    <b>ASP OL Media Pvt ltd (Pune) (03/22-02/23)</b>
                  </span>
                  <br></br>

                  <b>
                    Front-end Developer<br></br>
                  </b>

                  <li className="sub_li">
                    {" "}
                    Developed responsive email templates and front-end interface
                    using HTML/CSS for user's end.<br></br>
                  </li>
                  <li className="sub_li">
                    -Rendered for different Devices & browsers.<br></br>
                  </li>
                  <li className="sub_li">
                    Integrated with platforms like Mailchimp,Sendgrid.<br></br>
                  </li>
                </li>

                <li className="main_li">
                  {" "}
                  <span>
                    <b>Peerlink(startup)</b>
                  </span>
                </li>
                <li className="sub_li">
                  {" "}
                  Created FAQ & contacts page using Javascript on top of HTML &
                  CSS.
                </li>
              </ul>
            </div>

            <div
              class={`section${activeSection === "section3" ? "active" : ""}`}
            >
              <ul>
                <li>
                  <span>
                    <b>Brainware group of University, Kolkata(2019-22)</b>
                  </span>
                </li>
                -Bachelors of Technology, Civil engineering.CGPA: 8.5<br></br>
                -Participated in various sports and cultural activities.
                <br></br>
                -Member of Arts club<br></br>
                <br></br>
                <li>
                  <span>
                    <b>Ashoka polytechnic, Bangalore(2013-16)</b>
                  </span>
                </li>
                <li>
                  <span>
                    <b>Army Public School, Shillong</b>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About2;

