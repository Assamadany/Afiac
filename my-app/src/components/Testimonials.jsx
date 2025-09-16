import React from "react";
import "./Testimonials.css";
import TestimonialOne from "../assets/Testimonial-1.png";
import TestimonialTwo from "../assets/Testimonial-2.png";
import TestimonialThree from "../assets/Testimonial-3.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Testimonials = () => {
  return (
    <div>
      <div className="testimonials-container">
        <div className="testimonials-content">
          <h1>Students Testimonials</h1>
          <p>
            Here’s what our student have to say about their transformative
            learning <br /> experience, real stories, real growth. Discover
            firsthand the impact our <br />
            courses have had on their lives.
          </p>
        </div>
        <div className="testimonials-card">
          <div className="testimonial-one">
            <img src={TestimonialOne} alt="" className="testimonial-img" />
          </div>
          <div className="testimonial-two">
            <img src={TestimonialTwo} alt="" className="testimonial-img" />
          </div>
          <div className="testimonial-three">
            <img src={TestimonialThree} alt="" className="testimonial-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
