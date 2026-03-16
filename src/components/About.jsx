import React from "react";
import { FaMapMarkedAlt, FaBus, FaUserTie } from "react-icons/fa";

function About() {
  return (
    <div>

      {/* HERO SECTION */}
      <section
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          position: "relative",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.65)",
          }}
        ></div>

        <div
          className="container text-light"
          style={{
            position: "relative",
            zIndex: 2,
            paddingTop: "150px",
          }}
        >
          <p style={{ color: "#d4af37", letterSpacing: "2px" }}>ABOUT</p>

          <h1 style={{ fontSize: "50px", fontWeight: "bold" }}>
            About Majestic Hotels
          </h1>

          <p style={{ maxWidth: "500px", color: "#ccc" }}>
            Majestic Group is one of the most recognized brands in the Indian Hospitality Industry, 
            owning and operating over 20,000 rooms across more than 216 hotels and resorts.
          </p>
        </div>
      </section>

      {/* WHY WE ARE BEST */}
      <section style={{ background: "#111", padding: "90px 0" }}>
        <div className="container">

          <div className="row align-items-center">

            {/* LEFT TEXT */}
            <div className="col-md-6 text-light">

              <h2
                style={{
                  fontWeight: "bold",
                  marginBottom: "20px",
                  color: "#d4af37",
                }}
              >
                Why We Are Best?
              </h2>

              <p style={{ color: "#ccc", marginBottom: "40px" }}>
                As a pioneer in the industry, Majestic Group has passed 7 years of accomplishment, 
                re-engineering each step of the value-chain to match the dynamism of the Indian hospitality market.
              </p>

              {/* FEATURE 1 */}
              <div className="d-flex mb-4">
                <FaMapMarkedAlt size={35} color="#d4af37" />
                <div style={{ marginLeft: "20px" }}>
                  <h5>Diverse Destinations</h5>
                  <p style={{ color: "#bbb", fontSize: "14px" }}>
                    We have empanelled state-of-the-art luxury properties, resorts, and 
                    serviced suites under Majestic Vacation to cater to the market.
                  </p>
                </div>
              </div>

              {/* FEATURE 2 */}
              <div className="d-flex mb-4">
                <FaBus size={35} color="#d4af37" />
                <div style={{ marginLeft: "20px" }}>
                  <h5>Seamless Integration</h5>
                  <p style={{ color: "#bbb", fontSize: "14px" }}>
                    Whether it’s hotels, air tickets, clubs, or B2B services, Majestic 
                    brings them together under one seamless platform.
                  </p>
                </div>
              </div>

              {/* FEATURE 3 */}
              <div className="d-flex">
                <FaUserTie size={35} color="#d4af37" />
                <div style={{ marginLeft: "20px" }}>
                  <h5>Curated Value</h5>
                  <p style={{ color: "#bbb", fontSize: "14px" }}>
                    Our flexible marketplace and membership plans allow access to premium services 
                    at attractive prices—enhancing lifestyle and convenience.
                  </p>
                </div>
              </div>

            </div>

            {/* RIGHT IMAGES */}
            <div className="col-md-6">

              <div style={{ position: "relative" }}>

                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                  alt="travel"
                  style={{
                    width: "60%",
                    borderRadius: "10px",
                  }}
                />

                <img
                  src="https://images.unsplash.com/photo-1526779259212-939e64788e3c"
                  alt="travel2"
                  style={{
                    width: "60%",
                    borderRadius: "10px",
                    position: "absolute",
                    bottom: "-40px",
                    right: "0",
                    border: "5px solid #111",
                  }}
                />

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CONTACT CTA SECTION */}
      <section
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1566073771259-6a8506099945')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "120px 0",
          position: "relative",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.75)",
            top: 0,
            left: 0,
          }}
        ></div>

        <div
          className="container text-center"
          style={{
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
              padding: "60px",
              borderRadius: "12px",
              maxWidth: "700px",
              margin: "auto",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 15px 40px rgba(0,0,0,0.6)",
            }}
          >
            <h2
              style={{
                fontWeight: "bold",
                marginBottom: "25px",
                color: "white",
              }}
            >
              If You Have Any Question <br /> You will Ask Us
            </h2>

            <button
              style={{
                background: "#d4af37",
                border: "none",
                padding: "12px 35px",
                color: "#111",
                fontWeight: "bold",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.background = "#c19b2e")}
              onMouseOut={(e) => (e.target.style.background = "#d4af37")}
            >
              CONTACT US
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;