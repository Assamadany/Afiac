import React from "react";
import "./Course..css";
import Frame25 from "../assets/Frame 25.png";
import Frame26 from "../assets/Frame 26.png";
import Frame27 from "../assets/Frame 27.png";
import Frame28 from "../assets/Frame 28.png";
import Frame from "../assets/Frame 36.png";

const Courses = () => {
  return (
    <div>
      <div className="courses-search">
        <h1 className="text">Search Courses</h1>
        <input
          type="text"
          name=""
          className="courses-input"
          placeholder="Search for over 50+ courses"
        />
        <button className="search">Search</button>
      </div>
      <div className="courses-container">
        <div className="courses-img">
          <img src={Frame} className="image" alt="" />
        </div>
        <div className="courses-text">
          <h1>
            <strong className="benefit">Benefits</strong> From Our Online <br />
            Learning
          </h1>
          <div className="degree">
            <div className="degree-img">
              <img src={Frame25} className="cap" alt="" />
            </div>
            <div className="degree-text">
              <h2 className="sub-title">Online Degrees</h2>
              <p>
                Earn accredited degree from the comfort of your home, <br />
                opening door to a world of possibilities
              </p>
            </div>
          </div>
          <div className="degree">
            <div className="degree-img">
              <img src={Frame26} className="cap" alt="" />
            </div>
            <div className="degree-text">
              <h2 className="sub-title">Short Courses</h2>
              <p>
                Earn accredited degree from the comfort of your home, <br />
                opening door to a world of possibilities
              </p>
            </div>
          </div>
          <div className="degree">
            <div className="degree-img">
              <img src={Frame27} className="cap" alt="" />
            </div>
            <div className="degree-text">
              <h2 className="sub-title">Training From Experts</h2>
              <p>
                Earn accredited degree from the comfort of your home, <br />
                opening door to a world of possibilities
              </p>
            </div>
          </div>
          <div className="degree">
            <div className="degree-img">
              <img src={Frame28} className="cap" alt="" />
            </div>
            <div className="degree-text">
              <h2 className="sub-title">1.5K+ For Video Courses</h2>
              <p>
                Earn accredited degree from the comfort of your home, <br />
                opening door to a world of possibilities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
