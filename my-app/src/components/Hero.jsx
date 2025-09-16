import React from "react";
import "./Hero.css";
import hero from "../assets/hero-man (1) 1.png";
import student from "../assets/10k+ online student.png";
import online from "../assets/50+ online courses.png";
import coinbase from "../assets/Coinbase.png";
import airbnb from "../assets/Airbnb.png";
import meta from "../assets/Meta Platforms, Inc..png";
import adobe from "../assets/Adobe.png";
import amazon from "../assets/Clip path group.png";

const Hero = () => {
  return (
    <>
      <div className="py-5 container">
        <div className="hero-flex">
          <div>
            <h1 className="hero-heading">
              Discover your <br />
              skill in a new <br />
              and unique way
            </h1>
            <p className="hero-para">
              Explore a transformative approach to skill development on our
              online
              <br />
              learning platform. Uncover a new realm of learning experiences and
              <br />
              elevate your expertise in a unique ways
            </p>
            <button className="hero-btn">Enroll Now</button>
            <button className="hero-btn">Learn More</button>
          </div>

          {/* img section  */}
          <div className="hero-border">
            <div className="hero-img-sec-color">
              <div>
                <img src={online} alt="" className="hero-student" />
              </div>
              <div>
                <img src={hero} alt="" className="hero-img" />
              </div>
              <div>
                <img src={student} alt="" className="hero-online" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* companies section  */}
      <div className="hero-companies-section py-2">
        <marquee behavior="" direction="" scrllmount="10">
          <img src={coinbase} alt="" className="hero-companieshero-companies" />
          <img src={airbnb} alt="" className="hero-companies" />
          <img src={meta} alt="" className="hero-companies" />
          <img src={adobe} alt="" className="hero-companies" />
          <img src={amazon} alt="" className="hero-companies" />
        </marquee>
      </div>
    </>
  );
};

export default Hero;
