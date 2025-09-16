import React from "react";
import "./Skill.css";
import first from "../assets/first.png";
import second from "../assets/second.png";
import third from "../assets/third.png";
const Skill = () => {
  return (
    <div>
      <div className="skill-container">
        <div className="skill-content">
          <h1>Our Popular Courses</h1>
          <p>
            Discover our most sought-after courses, carefully curated to meet
            the <br /> demand of today’s learners. Dive into engaging content
            crafted for <br /> success in every step of your educational journey
          </p>
        </div>
        <div className="skills-card">
          <div className="card-one">
            <img src={first} alt="" className="card-img" />
            <h2 className="card-title">Front-end Developer</h2>
            <p className="card-text">
              Master the art of crafting stunning and responsive user interfaces{" "}
              <br />
              with our comprehensive Front-end Development course. From HTML and{" "}
              <br />
              CSS to JavaScript frameworks, gain the skills to create seamless{" "}
              <br />
              web experiences that captivate users.
            </p>
            <button className="card-btn">View project</button>
          </div>
          <div className="card-two">
            <img src={second} alt="" className="card-img" />
            <h2 className="card-title">Back-end Developer</h2>
            <p className="card-text">
              Unlock the power behind dynamic web applications with our Back-end
              <br />
              Development course. Learn server-side programming, database
              management, and API integration to build robust and scalable web
              solutions that drive functionality and performance.
            </p>
            <button className="card-btn">View project</button>
          </div>
          <div className="card-three">
            <img src={third} alt="" className="card-img" />
            <h2 className="card-title">Full-stack Developer</h2>
            <p className="card-text">
              Become a versatile Full-stack Developer with our all-encompassing
              <br />
              course. Master both front-end and back-end technologies, gaining{" "}
              <br />
              the ability to design, develop, and deploy complete web
              applications from start to finish.
            </p>
            <button className="card-btn">View project</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
