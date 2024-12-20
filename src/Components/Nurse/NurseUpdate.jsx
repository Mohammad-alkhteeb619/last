import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const NurseForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Static nurse data
  const staticNurse = {
    name: "Yousef Samer",
    hireDate: "2021-01-15",
    department: "Human Resources",
    experience: "10 years",
    age: 30,
    phone: "+1 555-555-5555",
    gender: "Male",
    email: "john.doe@example.com",
    address: "123 Main Street, Cityville, Country",
    profileLink: "#",
  };

  // State to manage nurse data and form inputs
  const [nurse, setNurse] = useState(staticNurse);
  const [formData, setFormData] = useState(staticNurse);

  // Fetch nurse data based on ID
  useEffect(() => {
    axios
      .get(`http://192.168.100.4:5000/api/Staff/Nurse/${id}`)
      .then((response) => {
        const fetchedData = response.data.nurseCard || {};
        // Update both nurse and formData with fetched data
        setNurse({ ...staticNurse, ...fetchedData });
        setFormData({ ...staticNurse, ...fetchedData });
      })
      .catch((error) => {
        console.error("Error fetching nurse data:", error);
        // If fetch fails, retain static data
        setNurse(staticNurse);
        setFormData(staticNurse);
      });
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Information updated successfully!");
    console.log("Updated Nurse Info:", formData);
    navigate("/staff-update");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h3 className="mb-0">Edit Nurse Information</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {Object.entries(formData).map(([key, value]) =>
              key === "profileLink" ? null : (
                <div className="mb-3 row" key={key}>
                  <label
                    className="form-label text-capitalize col-sm-3 fw-bold"
                    htmlFor={key}
                  >
                    {key.replace(/([A-Z])/g, " $1")}
                  </label>
                  <div className="col-sm-9">
                    {key === "gender" ? (
                      <select
                        id={key}
                        name={key}
                        className="form-select"
                        value={value}
                        onChange={handleChange}
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    ) : key === "address" ? (
                      <textarea
                        id={key}
                        name={key}
                        className="form-control"
                        value={value}
                        onChange={handleChange}
                        rows="3"
                      />
                    ) : (
                      <input
                        type={key === "hireDate" ? "date" : "text"}
                        id={key}
                        name={key}
                        className="form-control"
                        value={value}
                        onChange={handleChange}
                      />
                    )}
                  </div>
                </div>
              )
            )}
            <button type="submit" className="btn btn-primary w-100 mt-4">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NurseForm;
