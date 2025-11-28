import React from "react";
import myImage from "./img/1.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-image">
        <img src={myImage} alt="profile" />
      </div>
        <h1>Hello, I'm Rushikesh Upare</h1>
        <p>Full-Stack Developer | Java & React | SQL | Flutter | Digital Marketing </p>
        <a href="#projects" className="btn">View My Work</a>
      </div>

      {/* IMAGE SECTION */}
      
    </section>
  );
};

export default Hero;
