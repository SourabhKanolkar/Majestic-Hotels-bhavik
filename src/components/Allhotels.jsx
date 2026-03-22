import React, { useState } from "react";
import hotels from "../data";
import { Link } from "react-router-dom";

export default function Allhotels() {
  const [selectedHotel, setSelectedHotel] = useState(null);

  return (
    <div style={{ background: "#111", minHeight: "100vh", padding: "50px 0" }}>
      <div className="container">

        <h2 style={{ color: "#d4af37", marginBottom: "40px" }}>
          All Hotels
        </h2>

        <div className="row">

          {hotels.map((hotel, index) => (
            <div className="col-md-4 mb-4" key={index}>

              {/* CARD */}
              <div
                className="card"
                onClick={() => setSelectedHotel(hotel)}
                style={{
                  background: "#1a1a1a",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  transition: "0.3s"
                }}
              >

                <img
                  src={hotel.image}
                  className="card-img-top"
                  style={{ height: "220px", objectFit: "cover" }}
                />

                <div className="card-body">
                  <h5>{hotel.name}</h5>
                  <p style={{ fontSize: "14px" }}>
                    {hotel.description}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>

      {/* MODAL */}
      {selectedHotel && (
        <div
          className="modal fade show"
          style={{ display: "block", background: "rgba(0,0,0,0.8)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div
              className="modal-content"
              style={{ background: "#1a1a1a", color: "white" }}
            >

              <div className="modal-header border-0">
                <h5 style={{ color: "#d4af37" }}>
                  {selectedHotel.name}
                </h5>

                <button
                  className="btn-close btn-close-white"
                  onClick={() => setSelectedHotel(null)}
                ></button>
              </div>

              <div className="modal-body">

                <img
                  src={selectedHotel.image}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    marginBottom: "15px"
                  }}
                />

                <p>{selectedHotel.description}</p>

                <div className="d-flex gap-2">

                  <a
                    href={selectedHotel.websiteUrl}
                    target="_blank"
                    className="btn"
                    style={{ background: "#d4af37", fontWeight: "bold" }}
                  >
                    View
                  </a>

                <Link className="btn btn-outline-light" to='/allhotels'>Check Availability</Link>

                </div>

              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}