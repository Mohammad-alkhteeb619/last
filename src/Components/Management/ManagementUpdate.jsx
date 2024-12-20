import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const staffForm = () => {
  const { id } = useParams(); // Get staff id from the URL params
  const navigate = useNavigate();
  const [staff, setstaff] = useState(null); // Initialize staff state
  const [formData, setFormData] = useState({}); // Initialize form data

  useEffect(() => {
    // Fetch staff data by id
    axios
      .get(`http://192.168.100.4:5000/api/staff/${id}`)
      .then((response) => {
        setstaff(response.data.staffData); // Set staff data
        setFormData(response.data.staffData); // Initialize form with fetched data
      })
      .catch((error) => {
        console.error("Error fetching staff data:", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send updated data to the server
    axios
      .put(`http://192.168.100.4:5000/api/staff/${id}`, formData)
      .then((response) => {
        alert("Information updated successfully!");
        navigate("/staff-update"); // Redirect after successful update
      })
      .catch((error) => {
        console.error("Error updating staff data:", error);
      });
  };

  if (!staff) {
    return <div>Loading...</div>; // Render loading state until data is fetched
  }

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h3 className="mb-0">Edit Staff Information</h3>
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
                        value={value || ""}
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
                        value={value || ""}
                        onChange={handleChange}
                        rows="3"
                      />
                    ) : (
                      <input
                        type={key === "hireDate" ? "date" : "text"}
                        id={key}
                        name={key}
                        className="form-control"
                        value={value || ""}
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

export default staffForm;
