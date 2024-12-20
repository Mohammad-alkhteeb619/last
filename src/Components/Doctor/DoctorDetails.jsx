import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DoctorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null); // Initialize doctor as null
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    
    axios
      .get(`http://192.168.100.4:5000/api/Doctor/Doctor/${id}`)
      .then((response) => {
        setDoctor(response.data.doctorsCard); 
      })
      .catch((error) => {
        console.error("Error fetching doctor data:", error);
      });
  }, [id]); 

  const handleDelete = () => {
    setShowDeleteModal(false);
    // Make a request to delete the doctor here
    alert("Doctor deleted successfully!");
    navigate("/Doctors"); // Redirect to Doctors list
  };

  // Conditional rendering if doctor is not loaded yet
  if (!doctor) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container my-5">
      <div className="card shadow-lg">
        <div className="card-header bg-primary text-white">
          <h2 className="mb-0">Doctor Details</h2>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">Name:</h5>
              <p>{doctor.name}</p>
            </div>
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">Hire Date:</h5>
              <p>{doctor.hireDate}</p>
            </div>
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">Department:</h5>
              <p>{doctor.department}</p>
            </div>
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">Experience:</h5>
              <p>{doctor.experience}</p>
            </div>
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">Age:</h5>
              <p>{doctor.age}</p>
            </div>
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">Phone:</h5>
              <p>{doctor.phoneNumber}</p>
            </div>
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">Gender:</h5>
              <p>{doctor.gender}</p>
            </div>
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">Email:</h5>
              <p>{doctor.email}</p>
            </div>
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">Address:</h5>
              <p>{doctor.address}</p>
            </div>
          </div>

          <div className="mt-4 d-flex gap-2">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate(`/doctor-update/${doctor.id}`)} // Navigate to the update page with the doctor's ID
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => setShowDeleteModal(true)} // Show delete modal
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
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{ display: "block" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  CONFIRM DELETION
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setShowDeleteModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete {doctor.name}'s record?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => setShowDeleteModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleDelete}
                >
                  Deletion
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorDetails;
