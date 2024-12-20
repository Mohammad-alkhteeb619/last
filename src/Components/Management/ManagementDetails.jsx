import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const staffDetails = ({ staff }) => {
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = async () => {
    setShowDeleteModal(false);
    try {
      const response = await axios.delete(
        `http://192.168.100.4:5000/api/Staff/staff/${staff.id}`
      );
      if (response.status === 200) {
        alert("staff deleted successfully!");
        navigate("/staffs"); // Redirect to the staffs list page
      }
    } catch (error) {
      console.error("Error deleting staff:", error);
      alert("Failed to delete staff. Please try again.");
    }
  };

  return (
    <div className="container my-5">
      <div className="card shadow-lg">
        <div className="card-header bg-primary text-white">
          <h2 className="mb-0">staff Details</h2>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">Name:</h5>
              <p>{staff.name}</p>
            </div>
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">
                {staff.message == null ? "Hire Date" : "Admission Date"}:
              </h5>
              <p>{staff.hireDate || staff.admissionDate}</p>
            </div>
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">Department:</h5>
              <p>{staff.department}</p>
            </div>
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">
                {staff.message == null ? "Experience" : "PCD staff"}:
              </h5>
              <p>{staff.experience || staff.pcdstaff}</p>
            </div>
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">Age:</h5>
              <p>{staff.age}</p>
            </div>
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">Phone:</h5>
              <p>{staff.phone}</p>
            </div>
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">Gender:</h5>
              <p>{staff.gender}</p>
            </div>
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">Email:</h5>
              <p>{staff.email}</p>
            </div>
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">Address:</h5>
              <p>{staff.address}</p>
            </div>
          </div>

          <div className="mt-4 d-flex gap-2">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate("/staff-update")}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => setShowDeleteModal(true)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{ display: "block" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">CONFIRM DELETION</h1>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowDeleteModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete {staff.name}'s record?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowDeleteModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleDelete}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Example usage of staffDetails
const samplestaff = {
  id: 1, // Added ID for fetching
  name: "Dr. John Doe staff",
  hireDate: "2021-01-15",
  department: "Cardiology",
  experience: "10 years",
  age: 45,
  phone: "+1 555-555-5555",
  gender: "Male",
  email: "john.doe@example.com",
  address: "123 Main Street, Cityville, Country",
  profileLink: "#",
};

export default function App() {
  return <staffDetails staff={samplestaff} />;
}
