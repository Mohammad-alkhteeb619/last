import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"; // Ensure axios is imported
import "bootstrap/dist/css/bootstrap.min.css";

const DoctorForm = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null); // Initialize with null to handle loading state
  const [formData, setFormData] = useState({}); // Initialize as empty object

  const navigate = useNavigate();
  console.log("====================================");
  console.log(formData.age);
  console.log("====================================");
  useEffect(() => {
    // Fetch doctor data based on the id from URL
    axios
      .get(`http://192.168.100.4:5000/api/Doctor/Doctor/${id}`)
      .then((response) => {
        setDoctor(response.data.doctorsCard); // Update doctor data on successful fetch
        setFormData(response.data.doctorsCard); // Set form data to fetched doctor info
      })
      .catch((error) => {
        console.error("Error fetching doctor data:", error);
      });
  }, [id]); // Dependency array ensures this effect runs when the id changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("information updated successfully!"); //trigger toast msg instead of alert msg
   
    navigate("/DoctorDetails"); // Navigate to another page after submit
  };

  if (!doctor) {
    return <div>Loading...</div>; // Render a loading state until the doctor data is fetched
  }

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h3 className="mb-0">Edit Doctor Information</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-3 row">
              <label
                className="form-label text-capitalize col-sm-3 fw-bold"
                htmlFor="name"
              >
                Name
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={formData.name || ""}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Hire Date Field */}
            <div className="mb-3 row">
              <label
                className="form-label text-capitalize col-sm-3 fw-bold"
                htmlFor="hireDate"
              >
                Hire Date
              </label>
              <div className="col-sm-9">
                <input
                  disabled
                  type="text"
                  id="hireDate"
                  name="hireDate"
                  className="form-control"
                  value={formData.hireDate || ""}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Department Field */}
            <div className="mb-3 row">
              <label
                className="form-label text-capitalize col-sm-3 fw-bold"
                htmlFor="department"
              >
                Department
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  id="department"
                  name="department"
                  className="form-control"
                  value={formData.department || ""}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Experience Field */}
            <div className="mb-3 row">
              <label
                className="form-label text-capitalize col-sm-3 fw-bold"
                htmlFor="experience"
              >
                Experience
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  id="experience"
                  name="experience"
                  className="form-control"
                  value={formData.experience || ""}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Age Field */}
            <div className="mb-3 row">
              <label
                className="form-label text-capitalize col-sm-3 fw-bold"
                htmlFor="age"
              >
                Age
              </label>
              <div className="col-sm-9">
                <input
                disabled
                  type="text"
                  id="age"
                  name="age"
                  className="form-control"
                  value={formData.age || ""}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Phone Field */}
            <div className="mb-3 row">
              <label
                className="form-label text-capitalize col-sm-3 fw-bold"
                htmlFor="phoneNumber"
              >
                Phone
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="form-control"
                  value={formData.phoneNumber || ""}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Gender Field */}
            <div className="mb-3 row">
              <label
                className="form-label text-capitalize col-sm-3 fw-bold"
                htmlFor="gender"
              >
                Gender
              </label>
              <div className="col-sm-9">
                <select
                  id="gender"
                  name="gender"
                  className="form-select"
                  value={formData.gender || ""}
                  onChange={handleChange}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>

            {/* Email Field */}
            <div className="mb-3 row">
              <label
                className="form-label text-capitalize col-sm-3 fw-bold"
                htmlFor="email"
              >
                Email
              </label>
              <div className="col-sm-9">
                <input
                disabled
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email || ""}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Address Field */}
            <div className="mb-3 row">
              <label
                className="form-label text-capitalize col-sm-3 fw-bold"
                htmlFor="address"
              >
                Address
              </label>
              <div className="col-sm-9">
                <textarea
                  id="address"
                  name="address"
                  className="form-control"
                  value={formData.address || ""}
                  onChange={handleChange}
                  rows="3"
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-4">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorForm;
