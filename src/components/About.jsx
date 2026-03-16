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
            Experience luxury hospitality with elegant rooms, premium service,
            and unforgettable destinations across India.
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
                Majestic Hotels offers luxury accommodation with world-class
                facilities. Our mission is to provide comfort, elegance, and
                memorable travel experiences for every guest.
              </p>

              {/* FEATURE 1 */}
              <div className="d-flex mb-4">
                <FaMapMarkedAlt size={35} color="#d4af37" />
                <div style={{ marginLeft: "20px" }}>
                  <h5>Diverse Destinations</h5>
                  <p style={{ color: "#bbb", fontSize: "14px" }}>
                    Explore beautiful hotel locations across major cities and
                    tourist destinations.
                  </p>
                </div>
              </div>

              {/* FEATURE 2 */}
              <div className="d-flex mb-4">
                <FaBus size={35} color="#d4af37" />
                <div style={{ marginLeft: "20px" }}>
                  <h5>Adventure Time</h5>
                  <p style={{ color: "#bbb", fontSize: "14px" }}>
                    Enjoy exciting travel experiences with premium resort and
                    adventure packages.
                  </p>
                </div>
              </div>

              {/* FEATURE 3 */}
              <div className="d-flex">
                <FaUserTie size={35} color="#d4af37" />
                <div style={{ marginLeft: "20px" }}>
                  <h5>Guide Tour</h5>
                  <p style={{ color: "#bbb", fontSize: "14px" }}>
                    Our professional team helps you explore destinations with
                    expert guidance.
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
                    width: "80%",
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