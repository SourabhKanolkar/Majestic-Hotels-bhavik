import React from 'react'
import hotels from '../data';


export default function Allhotels() {
  return (
<div>
        <div style={{ background: "#111", minHeight: "100vh", padding: "50px 0" }}>
      <div className="container">

        <h2 style={{ color: "#d4af37", marginBottom: "40px" }}>
          All Hotels 
        </h2>

        <div className="row">

          {hotels.map((hotel, index) => (
            <div className="col-md-4 mb-4" key={index}>

              <div
                className="card"
                style={{
                  background: "#1a1a1a",
                  color: "white",
                  border: "none"
                }}
              >

                <img
                  src={hotel.image}
                  className="card-img-top"
                  style={{ height: "220px", objectFit: "cover" }}
                />

                <div className="card-body">

                  <h5 className="card-title">{hotel.name}</h5>

                  <p style={{ fontSize: "14px" }}>
                    {hotel.description}
                  </p>

                  {/* <button
                    className="btn me-2"
                    style={{ background: "#d4af37", fontWeight: "bold" }}
                  >
                    <a style={{textDecoration:"none"}} href={hotel.websiteUrl}>View</a>
                  </button> */}

                  {/* <button
                    className="btn btn-outline-light"
                  >
                    Check Availability
                  </button> */}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
      
    </div>
  )
}
