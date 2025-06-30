import React from "react";
import {useState} from "react";
import './AboutSection.css';

function AboutSection()
{
             const [activeSection, setActiveSection]=useState("section1");
             const[activeColor, setactiveColor]=useState("");


return(
<div>
  


    <div className="about-container">
        <div className="about-content">
      
         <div className="left">
          <h1>About me</h1>
          <span className="about-text" >I am a self-taught <b>Java developer</b> & I have one year experience in <b>front-end</b> designing of email templates using HTML & CSS.
          </span>
              </div>
          
          
          <div className="right">
          <div className="right-buttons">
        <button onMouseEnter={()=>setActiveSection("section1")}>Skills</button>
        <button  onClick={()=>setActiveSection("section2")}>Experience</button>
        <button  onMouseEnter={()=>setActiveSection("section3")}>Education</button>
        </div>
        
         <div className={`section ${activeSection === "section1" ? "active" : ""}`}>
            <ul>
<li><span><b>Programming language:</b> Java, JavaScript, HTML, CSS</span></li>
             <li><span><b>Framework:</b> SpringBoot, React.js</span></li>
                        <li><span><b>Database:</b> MySQL, JDBC</span></li>
                                    <li><span><b>Tools & IDEs:</b> VS Code, IntellJ IDEA, Maven, Postman</span></li>
           
           </ul>
            </div>


        
        <div class={`section ${activeSection === "section2" ? "active" : ""}`}         >
            <ul><li><span><b>ASP OL Media Pvt ltd (Pune) (03/22-02/23)</b></span></li>
          - Developed responsive email templates and front-end interface using HTML/CSS for user's end.<br></br>
          - Rendering for different Devices & browsers.<br></br>
          -Integrated with platforms like Mailchimp,Sendgrid.<div><br></br></div>
          <li><span><b>Peerlink(startup)</b></span></li>
          - Created FAQ & contacts page using typescript on top of HTML & CSS.
          
              </ul>
                </div>
                
                
                
                 <div class={`section${activeSection === "section3" ? "active" : ""}`}          >
          <ul>
          <li><span><b>Brainware group of University, Kolkata(2019-22)</b></span></li>
          -Bachelors of Technology, Civil engineering.CGPA: 8.5<br></br>
          
           -Participated in various sports and cultural activities.<br></br>
           -Member of Arts club<br></br>
           <br></br>
          <li><span>Ashoka polytechnic, Bangalore(2013-16)</span></li>
          <li><span>Army Public School, Shillong</span></li>
          </ul></div>
                
                
                
                
                
                
                
                </div>
        
        
        
        
        
        
        
        
        
        
        </div></div>
</div>
  );
}
export default  AboutSection;



///fix the color when active buuton is active