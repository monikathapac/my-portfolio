import react from "react";
import "./FAQ.css";
import { Link } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Footer";

function FAQ() {
  return (
    <div className="faq-container">
      <Header/>
      <h1>FAQ</h1>

      <p>QUESTION:</p>
      <span>Which tools ,IDEs, & framework is used in this website? </span>
      <p>ANSWER:</p>
      <span>
        I used React.js framework on top of HTML/CSS & Javascript.<br></br>For{" "}
        <b>Fonts</b>: Google fonts<br></br> For <b>Icons</b>: Fontawesome
      </span>
      <br></br>
      <span>
        This is hosted on <b>Vercel.</b>
      </span>
      <br></br>
      <br></br>
       <br></br>

      <Link to="/" ><button>Back to home</button></Link>
     
      <br></br>
       <br></br>
        <br></br>
         <br></br>
          <br></br>
           <br></br>
            <br></br>
             <br></br>
              <br></br>
               <br></br>

      <Footer/>
    </div>
  );
}
export default FAQ;
