import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribe-container ">
      <div className="subscribe-content">
        <h1>Get In Touch</h1>
        <p>Subscribe us to get in touch and enjoy discount, promos and much!</p>
        <div className="subscribe-form">
          <input
            type="email"
            placeholder="Enter your email"
            className="subscribe-input"
          />
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div>
    </div>
  );
};
export default Subscribe;
