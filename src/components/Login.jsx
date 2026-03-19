
import React, { useState } from "react";
import Logo from "../assets/logoM1.jpeg";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div
      style={{
        background: "#0a0a0a",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "#111",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 0 20px rgba(212,175,55,0.2)"
        }}
      >
        {/* Logo */}
        <div className="text-center mb-4">
          {/* <img
            src={Logo}
            alt="logo"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "5",
              objectFit: "cover",
              border: "2px solid #d4af37"
            }}
          /> */}
          <h3 style={{ color: "#d4af37", marginTop: "10px" }}>
            Majestic Group
          </h3>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label style={{ color: "#ccc" }}>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your email"
              style={{
                background: "#1a1a1a",
                border: "1px solid #333",
                color: "white"
              }}
              required
            />
          </div>

          <div className="mb-3">
            <label style={{ color: "#ccc" }}>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your password"
              style={{
                background: "#1a1a1a",
                border: "1px solid #333",
                color: "white"
              }}
              required
            />
          </div>

          <div className="d-flex justify-content-between mb-3">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" style={{ color: "#aaa", marginLeft: "5px" }}>
                Remember me
              </label>
            </div>

            {/* <span style={{ color: "#d4af37", cursor: "pointer", fontSize: "14px" }}>
              Forgot Password?
            </span> */}
          </div>

          <button
            type="submit"
            className="btn w-100"
            style={{
              background: "#d4af37",
              color: "#000",
              fontWeight: "bold"
            }}
          >
            Login
          </button>

        </form>

        {/* Divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "20px 0",
            color: "#777"
          }}
        >
          {/* <hr style={{ flex: 1, borderColor: "#333" }} />
          <span style={{ margin: "0 10px" }}>OR</span>
          <hr style={{ flex: 1, borderColor: "#333" }} /> */}
        </div>

       
        {/* <p className="text-center" style={{ color: "#aaa" }}>
          Don’t have an account? 
          <span style={{ color: "#d4af37", cursor: "pointer" }}>
            Sign Up
          </span>
        </p> */}
      </div>
    </div>
  );
}

