import React from "react";
import Logo from "../assets/logoM1.jpeg";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer style={{ background: "#111111", color: "#ddd", paddingTop: "60px" }}>
      <div className="container">

        <div className="row">

          {/* Logo Section */}
          <div className="col-md-3 mb-4">
            <img
              src={Logo}
              alt="logo"
              style={{ width: "180px", marginBottom: "15px" }}
            />
            <p style={{ fontSize: "14px" }}>
              Luxury hotel booking platform providing premium resorts and
              vacation experiences worldwide.
            </p>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h5 style={{ color: "#d4af37", marginBottom: "20px" }}>
              Contact Us
            </h5>

            <p>
              <FaPhoneAlt style={{ marginRight: "10px", color: "#d4af37" }} />
              +91 9876543210
            </p>

            <p>
              <FaEnvelope style={{ marginRight: "10px", color: "#d4af37" }} />
              info@majestichotels.com
            </p>

            <p style={{ fontSize: "14px" }}>
              <FaMapMarkerAlt
                style={{ marginRight: "10px", color: "#d4af37" }}
              />
              221 Luxury Avenue, Business Bay <br />
              Mumbai, Maharashtra, India
            </p>
          </div>

          {/* Terms */}
          <div className="col-md-3 mb-4">
            <h5 style={{ color: "#d4af37", marginBottom: "20px" }}>
              Terms Of Use
            </h5>

            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "10px" }}>Terms of Service</li>
              <li style={{ marginBottom: "10px" }}>Privacy Policy</li>
              <li style={{ marginBottom: "10px" }}>About Us</li>
              <li style={{ marginBottom: "10px" }}>Contact</li>
              <li style={{ marginBottom: "10px" }}>Cancellation Policy</li>
            </ul>
          </div>

          {/* Social + Newsletter */}
          <div className="col-md-3 mb-4">

            <h5 style={{ color: "#d4af37", marginBottom: "20px" }}>
              Follow Us
            </h5>

            <div style={{ marginBottom: "20px" }}>
              <FaFacebookF
                style={{ marginRight: "15px", cursor: "pointer" }}
              />
              <FaYoutube
                style={{ marginRight: "15px", cursor: "pointer" }}
              />
              <FaInstagram
                style={{ marginRight: "15px", cursor: "pointer" }}
              />
              <FaLinkedinIn style={{ cursor: "pointer" }} />
            </div>

            <h6 style={{ marginBottom: "10px" }}>Get Updates & More</h6>

            <div className="d-flex">
              <input
                type="email"
                placeholder="Enter Your Mail"
                className="form-control"
                style={{
                  borderRadius: "4px 0 0 4px",
                  border: "none",
                }}
              />

              <button
                style={{
                  background: "#d4af37",
                  border: "none",
                  padding: "8px 15px",
                  fontWeight: "bold",
                  borderRadius: "0 4px 4px 0",
                }}
              >
                Submit
              </button>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid #333",
            marginTop: "40px",
            padding: "20px 0",
            textAlign: "center",
            fontSize: "14px",
          }}
        >
          © 2026 Copyright Majestic Hotels. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;