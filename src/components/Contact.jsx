import React from "react";
import { FaGlobe, FaPhoneAlt, FaBriefcase } from "react-icons/fa";

function Contact() {
  return (
    <div style={{ background: "#0f0f0f", color: "#fff", padding: "60px 0" }}>
      <div className="container">

        {/* PAGE TITLE */}
        <h2 style={{ color: "#d4af37", marginBottom: "40px" }}>
          Contact Us
        </h2>

        {/* CONTACT CARDS */}
        <div className="row text-center mb-5">

          <div className="col-md-4 mb-3">
            <div
              style={{
                border: "1px solid #333",
                padding: "30px",
                borderRadius: "10px",
                background: "#1a1a1a",
              }}
            >
              <FaGlobe size={40} color="#d4af37" />
              <h5 className="mt-3">Connect with us</h5>
              <p style={{ fontSize: "14px", color: "#ccc" }}>
                {/* 221 Luxury Avenue, Business Bay <br /> */}
                Mumbai, Maharashtra, India
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div
              style={{
                border: "1px solid #333",
                padding: "30px",
                borderRadius: "10px",
                background: "#1a1a1a",
              }}
            >
              <FaPhoneAlt size={40} color="#d4af37" />
              <h5 className="mt-3">Call Us</h5>
              <p style={{ color: "#ccc" }}>+91 9876543210</p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div
              style={{
                border: "1px solid #333",
                padding: "30px",
                borderRadius: "10px",
                background: "#1a1a1a",
              }}
            >
              <FaBriefcase size={40} color="#d4af37" />
              <h5 className="mt-3">Drop a Mail</h5>
              <p style={{ color: "#ccc" }}>info@majestichotels.com</p>
            </div>
          </div>

        </div>

        {/* MAP + FORM */}
        <div className="row">

          {/* GOOGLE MAP */}
          <div className="col-md-6 mb-4">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Mumbai&output=embed"
              width="100%"
              height="500"
              style={{
                border: "0",
                borderRadius: "10px",
              }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* CONTACT FORM */}
          <div className="col-md-6">

            <div
              style={{
                background: "#1a1a1a",
                padding: "30px",
                borderRadius: "10px",
                border: "1px solid #333",
              }}
            >
              <h4 style={{ color: "#d4af37", marginBottom: "20px" }}>
                Drop Us a Line
              </h4>

              <form>

                <div className="row mb-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                    />
                  </div>

                  <div className="col">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mobile No."
                    />
                  </div>

                  <div className="col">
                    <select className="form-control">
                      <option>Select Title</option>
                      <option>Mr</option>
                      <option>Mrs</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn w-100"
                  style={{
                    background: "#d4af37",
                    color: "#000",
                    fontWeight: "bold",
                    padding: "12px",
                    borderRadius: "30px",
                  }}
                >
                  Submit
                </button>

              </form>
            </div>

          </div>
        </div>

        {/* FAQ */}
        <div className="mt-5">

          <h3 style={{ color: "#d4af37", marginBottom: "20px" }}>
            Frequently Asked Questions
          </h3>

          <div className="accordion" id="faqAccordion">

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq1"
                >
                  What is Majestic Hotels?
                </button>
              </h2>

              <div id="faq1" className="accordion-collapse collapse">
                <div className="accordion-body">
                  Majestic Hotels is a luxury hotel booking platform offering
                  premium resorts and travel experiences.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq2"
                >
                  How do I book a hotel?
                </button>
              </h2>

              <div id="faq2" className="accordion-collapse collapse">
                <div className="accordion-body">
                  Simply search for your destination, select a hotel, and
                  complete the booking process.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq3"
                >
                  Can I cancel my booking?
                </button>
              </h2>

              <div id="faq3" className="accordion-collapse collapse">
                <div className="accordion-body">
                  Yes. Cancellation policies depend on the hotel you book.
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Contact;