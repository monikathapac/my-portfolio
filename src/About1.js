import React from 'react';
import "./About1.css"

const About1 = () => {
  return (
    <div>
      <div id="home">
      <div className="bg-img">
        <div className="home-content">
          <div className='myimg'>
          <img src="/my.jpg" alt="my_img" ></img></div>
          <span>
          Hi, I am <b>Monika Thapa.</b>
          <br></br>Aspiring full-stack Java developer keen on learning new technologies & bulding projects.<br></br></span>
          <a className="btn" href="/MonikaThapaCV.pdf" download target="_blank">
            <button> Download CV</button>
          </a>
          <a
            className="btn"
            href="https://github.com/monikathapac"
            target="_blank"
          >
            <button> Visit Github</button>
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About1;
