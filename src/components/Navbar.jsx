import React from "react";
import Logo from "../assets/logoM1.jpeg";
import { Link } from "react-router-dom";

export default function Navbar() {
  // Define our gold theme color
  const goldColor = "#D4AF37";

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark border-bottom py-2 shadow-sm"
        style={{ backgroundColor: "#000000", borderColor: "#333" }}
      >
        <div className="container">
          {/* 1. Logo on the Left */}
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src={Logo}
              alt="Majestic Logo"
              style={{
                height: "45px",
                width: "auto",
                objectFit: "contain",
                filter: "brightness(1.1)", // Slightly pops the logo details
              }}
            />
          </a>

          {/* Mobile Toggle Button (Gold) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            style={{ borderColor: goldColor }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* 2. Links in the Center & Button on the Right */}
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Links centered using mx-auto */}
            <ul className="navbar-nav mx-auto gap-4">
              <li className="nav-item">
                       <Link
                  className="nav-link d-flex align-items-center gap-2 text-white fw-medium"
                  to="/" // Use 'to' instead of 'href'
                  style={{ fontSize: "14px" }}
                >
                  <i
                    className="bi bi-person-bounding-box"
                    style={{ color: goldColor }}
                  ></i>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link d-flex align-items-center gap-2 text-white fw-medium"
                  to="/about" // Use 'to' instead of 'href'
                  style={{ fontSize: "14px" }}
                >
                  <i
                    className="bi bi-person-bounding-box"
                    style={{ color: goldColor }}
                  ></i>
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link d-flex align-items-center gap-2 text-white fw-medium"
                  to="/contact" // Use 'to' instead of 'href'
                  style={{ fontSize: "14px" }}
                >
                  <i
                    className="bi bi-person-bounding-box"
                    style={{ color: goldColor }}
                  ></i>
                  Contact
                </Link>
              </li>
               <li className="nav-item">
                <Link
                  className="nav-link d-flex align-items-center gap-2 text-white fw-medium"
                  to="/adminlogin" // Use 'to' instead of 'href'
                  style={{ fontSize: "14px" }}
                >
                  <i
                    className="bi bi-person-bounding-box"
                    style={{ color: goldColor }}
                  ></i>
                 Hotels
                </Link>
              </li>
            </ul>

            {/* 3. Gold Login Button */}
            {/* <div className="d-flex">
              <button
                className="btn d-flex align-items-center gap-2 px-3 py-1 text-black"
                style={{
                  borderRadius: "4px",
                  backgroundColor: goldColor,
                  border: `1px solid ${goldColor}`,
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                <i className="bi bi-person-fill"></i> Login/Sign Up
              </button>
            </div> */}
          </div>
        </div>
      </nav>
    </>
  );
}
