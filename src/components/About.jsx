import React from 'react';
import about from "../images/about.svg";

const About = () => {
  return (
    <div className="container">
      <h2 className="title">เกี่ยวกับเรา</h2>
      <img src={about} alt="about" />
    </div>
  )
}

export default About