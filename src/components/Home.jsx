import React from "react";
import { FaBed, FaConciergeBell, FaMapMarkerAlt } from "react-icons/fa";
import { FaHandshake, FaHeadset, FaMobileAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [city, setCity] = useState("");
const navigate = useNavigate();
  return (
    <div>

      {/* HERO SECTION */}
      <section
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          position: "relative",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.65)",
          }}
        ></div>

        <div
          className="container text-center"
          style={{
            position: "relative",
            zIndex: 2,
            paddingTop: "120px",
            color: "white",
          }}
        >
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              letterSpacing: "2px",
            }}
          >
            Majestic Hotels
          </h1>

          <p style={{ color: "#d4af37", marginBottom: "40px" }}>
            Experience Luxury & Comfort
          </p>

          {/* SEARCH BOX */}
          <div
            className="row justify-content-center"
            style={{
              background: "white",
              borderRadius: "8px",
              padding: "20px",
              maxWidth: "900px",
              margin: "auto",
            }}
          >
            {/* City */}
            <div className="col-md-3">
              <label className="form-label text-dark">City</label>
              <input
  type="text"
  className="form-control"
  placeholder="Enter City"
  value={city}
  onChange={(e) => setCity(e.target.value)}
/>
            </div>

            {/* Check in */}
            <div className="col-md-2">
              <label className="form-label text-dark">Check-in</label>
              <input type="date" className="form-control" />
            </div>

            {/* Check out */}
            <div className="col-md-2">
              <label className="form-label text-dark">Check-out</label>
              <input type="date" className="form-control" />
            </div>

            {/* Guests */}
            <div className="col-md-3">
              <label className="form-label text-dark">Guests</label>
              <select className="form-control">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="col-md-2 d-flex align-items-end">
              <button
  className="btn w-100"
  style={{
    backgroundColor: "#d4af37",
    color: "black",
    fontWeight: "bold",
  }}
  onClick={() => navigate(`/hotels/${city}`)}
>
  Search
</button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section style={{ background: "#111", color: "white", padding: "80px 0" }}>
        <div className="container text-center">
          <h2 style={{ color: "#d4af37", marginBottom: "40px" }}>
            Why Choose Majestic Hotels
          </h2>

          <div className="row">

            <div className="col-md-4">
                <FaBed size={45} color="#d4af37"  style={{marginBottom:"15px"}} />
              <h4>Luxury Rooms</h4>
              <p>
                Experience world-class comfort with beautifully designed luxury
                suites.
              </p>
            </div>

            <div className="col-md-4">
                 <FaConciergeBell size={45} color="#d4af37"  style={{marginBottom:"15px"}} />
              <h4>Premium Service</h4>
              <p>
                Our professional staff ensures a memorable and comfortable stay.
              </p>
            </div>

            <div className="col-md-4">
                <FaMapMarkerAlt size={45} color="#d4af37" style={{marginBottom:"15px"}} />
              <h4>Best Locations</h4>
              <p>
                Our hotels are located in prime destinations across India.
              </p>
            </div>

          </div>
        </div>
      </section>
      
         <section style={{ background: "#111111", padding: "80px 0" }}>
        <div className="container text-center text-light">

          <h2  style={{ fontWeight: "bold", marginBottom: "10px",color:"rgb(212, 175, 55)" }}>
            Features Pages
          </h2>

          <p className=" mb-5 text-light">
            Join us as Vendor, enjoy our premium hotel services and more
          </p>

          <div className="row">

            {/* Card 1 */}
            <div className="col-md-4 mb-4">
              <div
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1566073771259-6a8506099945')",
                  height: "350px",
                  backgroundSize: "cover",
                  borderRadius: "10px",
                  position: "relative",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.4)",
                    borderRadius: "10px",
                  }}
                ></div>

                <div style={{ zIndex: 2 }}>
                  <h4>Luxury Room Booking</h4>
                  <button className="btn btn-light mt-3">Click Here</button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4 mb-4">
              <div
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
                  height: "350px",
                  backgroundSize: "cover",
                  borderRadius: "10px",
                  position: "relative",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.4)",
                    borderRadius: "10px",
                  }}
                ></div>

                <div style={{ zIndex: 2 }}>
                  <h4>Premium Resort Packages</h4>
                  <button className="btn btn-light mt-3">Click Here</button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4 mb-4">
              <div
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb')",
                  height: "350px",
                  backgroundSize: "cover",
                  borderRadius: "10px",
                  position: "relative",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.4)",
                    borderRadius: "10px",
                  }}
                ></div>

                <div style={{ zIndex: 2 }}>
                  <h4>Special Offers</h4>
                  <button className="btn btn-light mt-3">Click Here</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section style={{ background: "#111111", padding: "90px 0" }}>
  <div className="container text-center text-light">

    {/* PARTNERS SECTION */}
    <h2
      style={{
        fontWeight: "bold",
        marginBottom: "10px",
        color: "#d4af37",
      }}
    >
      Exchange Partner Clubs
    </h2>

    <p className="mb-5 text-light">Exchange</p>

    <div className="row justify-content-center align-items-center mb-5">

      {/* Partner 1 */}
      <div className="col-md-3 mb-4">
        <img
          src="https://backend.passclub.in/Images/AddPages/Sidharth_2/638786764567086738_temp.png"
          alt="Funplicity"
          height={134}
          style={{ marginBottom: "10px" }}
        />
        <h6>Funplicity Club</h6>
      </div>

      {/* Partner 2 */}
      <div className="col-md-3 mb-4">
        <img
          src="https://backend.passclub.in/Images/AddPages/Sidharth_2/638695396066845795_temp.png"
          alt="Lions Den"
          height={134}
          style={{ marginBottom: "10px" }}
        />
        <h6>Lions Den Club</h6>
      </div>

      {/* Partner 3 */}
      <div className="col-md-3 mb-4">
        <img
          src="https://backend.passclub.in/Images/AddPages/Sidharth_2/638786764567086738_temp.png"
          alt="Club Embark"
          height={134}
          style={{ marginBottom: "10px" }}
        />
        <h6>Club Embark</h6>
      </div>

    </div>

    {/* WHY CHOOSE US */}
    <h2
      style={{
        fontWeight: "bold",
        marginBottom: "10px",
        marginTop:"20px",
        color: "#d4af37",
      }}
    >
      Why Choose Us
    </h2>

    <p className="mb-5 text-light">
      These popular destinations have a lot to offer
    </p>

    <div className="row">

      {/* Feature 1 */}
      <div className="col-md-4 mb-4">
        <FaHandshake size={45} color="#d4af37" />
        <h5 className="mt-3">Vendors can Sell / Barter</h5>
        <p style={{ fontSize: "14px", color: "#ccc" }}>
          You can list, sell, or barter/exchange your unsold inventory to earn
          Passcoins and avail services in return.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="col-md-4 mb-4">
        <FaHeadset size={45} color="#d4af37" />
        <h5 className="mt-3">Customer Care 24/7</h5>
        <p style={{ fontSize: "14px", color: "#ccc" }}>
          Enjoy worry-free services knowing that our support team is always
          available to help you anytime.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="col-md-4 mb-4">
        <FaMobileAlt size={45} color="#d4af37" />
        <h5 className="mt-3">Easy & Quick Booking</h5>
        <p style={{ fontSize: "14px", color: "#ccc" }}>
          Use secure payment gateway and club exchange options to quickly book
          your next hotel or service.
        </p>
      </div>

    </div>

  </div>
</section>

    </div>
  );
}

export default Home;