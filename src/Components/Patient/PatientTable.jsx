import { useState } from "react";
import Filter from "../GeneralBlock/Filter";
import { useNavigate } from "react-router-dom";

export default function () {
  const Navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    admissionDate: "",
    department: "",
    pcdName: "",
    age: "",
    phone: "",
    gender: "",
    email: "",
    address: "",
  });

  const handleDeleteClick = (item) => {
    setSelectedItem(item); // Store the item to be deleted
    setShowDeleteModal(true); // Show the confirmation modal
  };

  const handleDeleteConfirm = () => {
    console.log("Deleted item:", selectedItem);
    setShowDeleteModal(false);
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
  };

  const handleEditClick = (item) => {
    setSelectedItem(item); // Store the item to be edited
    setFormData({ ...item }); // Pre-fill the form with the item data
    setShowEditModal(true); // Show the edit modal
  };

  const handleEditSubmit = () => {
    console.log("Updated item:", formData);
    setShowEditModal(false); // Close the modal after submission
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <Filter />
      <table className="table table-hover">
        <thead>
          <tr className="table-primary">
            <th scope="col">Name</th>
            <th scope="col">Admission Date</th>
            <th scope="col">Department</th>
            <th scope="col">PCD Name</th>
            <th scope="col">Age</th>
            <th scope="col">Phone</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">Details</th>
            <th scope="col">Address</th>
            <th scope="col">Profile</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-light" style={{ cursor: "pointer" }}>
            <td>John Doe</td>
            <td>2024-11-20</td>
            <td>Cardiology</td>
            <td>Dr. Smith</td>
            <td>30</td>
            <td>123-456-7890</td>
            <td>Male</td>
            <td>johndoe@example.com</td>
            <td>Details</td>
            <td>123 Main St</td>
            <td>Profile</td>
            <td>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <div className="dropdown">
                  <button
                    className="btn btn-info dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Manage
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() =>
                          handleEditClick({
                            name: "John Doe",
                            admissionDate: "2024-11-20",
                            department: "Cardiology",
                            pcdName: "Dr. Smith",
                            age: "30",
                            phone: "123-456-7890",
                            gender: "Male",
                            email: "johndoe@example.com",
                            address: "123 Main St",
                          })
                        }
                      >
                        Edit
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => handleDeleteClick("John Doe")}
                      >
                        Delete
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => Navigate("/write-prescription")}
                      >
                        Issue Prescription
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => Navigate("/Write-VitalSigns")}
                      >
                        Issue Vital Signs
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => Navigate("/write-diagnose")}
                      >
                        Issue diagnosis
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => Navigate("/issue-ExcuseAbsence")}
                      >
                        Issue Absence Excuse
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => Navigate("/get-prescription")}
                      >
                        Display prescription
                      </button>
                    </li>

                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => Navigate("/get-VitalSigns")}
                      >
                        Display Vital Signs
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => Navigate("/get-diagnose")}
                      >
                        Display diagnosis
                      </button>
                    </li>
                   
                    
                   
                   
                  </ul>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Delete Modal */}
      {showDeleteModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          tabIndex="-1"
          aria-labelledby="deleteModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="deleteModalLabel">
                  CONFIRM DELETION
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleDeleteCancel}
                ></button>
              </div>
              <div className="modal-body">
              Are you sure you want to delete this record?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={handleDeleteCancel}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleDeleteConfirm}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          tabIndex="-1"
          aria-labelledby="editModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editModalLabel">
                  Edit Information
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setShowEditModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleEditSubmit();
                  }}
                >
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="admissionDate" className="form-label">
                      Admission Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="admissionDate"
                      name="admissionDate"
                      value={formData.admissionDate}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="department" className="form-label">
                      Department
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                    />
                  </div>
                  {/* Add more fields as needed */}
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setShowEditModal(false)}
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
