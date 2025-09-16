import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
import logo1 from "../assets/Group.png"; // Adjust the path as necessary

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      variant="light"
      sticky="top"
      className="py-3 scalloped"
      expanded={expanded}>
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand>
          <Link to="/" onClick={() => setExpanded(false)}>
            <img src={logo1} alt="Logo" className="logo" />
          </Link>
        </Navbar.Brand>

        {/* Navbar Toggle */}
        <Navbar.Toggle
          className="toggle"
          aria-controls="navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />

        {/* Navbar Links and Button */}
        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav className="mx-auto text-center">
            {/* Navigation Links */}
            <a
              href="#courses"
              className="home"
              onClick={() => setExpanded(false)}>
              Courses
            </a>
            <a
              href="#skill"
              className="home"
              id="line"
              onClick={() => setExpanded(false)}>
              Skill
            </a>
            <a
              href="#Testimonials"
              className="home"
              onClick={() => setExpanded(false)}>
              Testimonials
            </a>
            <a
              href="#offer"
              className="home"
              onClick={() => setExpanded(false)}>
              Offers
            </a>
            <a
              href="#contact"
              className="home"
              onClick={() => setExpanded(false)}>
              Contact
            </a>
            <a href="#Doc" className="home" onClick={() => setExpanded(false)}>
              {/* Docs */}
            </a>
          </Nav>

          {/* Sign-Up Button */}
          <div className="btn-grid">
            <button className="signup mx-2" onClick={() => setExpanded(false)}>
              <Link
                to="/SignIn"
                className="textlink"
                onClick={() => setExpanded(false)}>
                Sign In
              </Link>
            </button>
            <button
              id="signup2"
              className=" mx-2"
              onClick={() => setExpanded(false)}>
              <Link
                to="/SignUp"
                className="text-white text-decoration-none"
                onClick={() => setExpanded(false)}>
                Free Trial
              </Link>
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
