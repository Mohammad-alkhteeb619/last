import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  // Handle form input changes
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", { email, password });

      if (response.data.success) {
        setLoginStatus("Login successful!");
      } else {
        setLoginStatus("Invalid email or password.");
      }
    } catch (error) {
      setLoginStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div
      className="container-fluid vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: "linear-gradient(to bottom, #f8f9fa, #e9ecef)",
      }}
    >
      <div
        className="row w-75 g-0 rounded-3 shadow-lg flex-column flex-md-row"
        style={{ maxWidth: "1200px" }}
      >
        {/* Tagline */}
        <div
          className="text-center w-100 p-3"
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            color: "#007bff",
            marginBottom: "1rem",
          }}
        >
          Connect, Care, Cure: Your Path to Health Starts Here
        </div>

        {/* Left Column - Form */}
        <div className="col-md-6 d-flex flex-column justify-content-center p-5 bg-white rounded-3">
          <h1 className="text-center text-primary mb-4">Log In</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control rounded-3"
              id="exampleInputEmail1"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your information with anyone else.
            </small>
          </div>
          <div className="mb-4">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-3"
              id="exampleInputPassword1"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="d-grid">
            <button
              type="button"
              className="btn rounded-3"
              style={{
                backgroundColor: "#007bff",
                borderColor: "#007bff",
                color: "white",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
              onClick={handleLogin}
            >
              Log In
            </button>
          </div>

          {/* Display login status */}
          {loginStatus && (
            <div
              className="mt-3 text-center"
              style={{
                color: loginStatus === "Login successful!" ? "green" : "red",
              }}
            >
              {loginStatus}
            </div>
          )}
        </div>

        {/* Right Column - Image */}
        <div className="col-md-6 d-none d-md-block">
          <div
            className="h-100 w-100"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255,0), rgba(255, 255, 255,0)), url('/undraw_medicine_b1ol.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "0 10px 10px 0",
              minHeight: "500px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
