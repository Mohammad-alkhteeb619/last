import React from "react";
import ReactDOM from "react-dom";
import "../style.css";  // Import your custom CSS file
import "bootstrap/dist/css/bootstrap.min.css";  // Ensure Bootstrap is loaded first

ReactDOM.render(<App />, document.getElementById("root"));

export default function DoctorForm() {
  const [doctor, setDoctor] = useState({
    name: "",
    hireDate: "",
    department: "",
    experience: "",
    age: "",
    phone: "",
    gender: "",
    email: "",
    address: "",
  });

  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  const staticAddressOptions = [
    "Amman",
    "Zarqa",
    "Irbid",
    "Russeifa",
    "Aqaba",
    "Mafraq",
    "Madaba",
    "Karak",
    "Jerash",
    "Ajloun",
    "Tafila",
    "Ma'an",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor({
      ...doctor,
      [name]: value,
    });

    // Filter address options
    if (name === "address") {
      if (value.trim() === "") {
        setFilteredOptions([]);
        setShowOptions(false);
      } else {
        const filtered = staticAddressOptions.filter((option) =>
          option.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredOptions(filtered);
        setShowOptions(filtered.length > 0);
      }
    }
  };

  const handleOptionSelect = (option) => {
    setDoctor({ ...doctor, address: option });
    setShowOptions(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Doctor added:", doctor);
    // Example of a POST request
    axios
      .post("/api/add-doctor", doctor)
      .then((response) => {
        console.log(response.data);
        ToastMessage({ message: "Doctor added successfully!", type: "success" });
      })
      .catch((error) => {
        console.error(error);
        ToastMessage({ message: "Error adding doctor.", type: "error" });
      });
  };

  // Get today's date in the required format (YYYY-MM-DD)
  const today = new Date().toISOString().split('T')[0];

  // Regex to validate Jordanian phone number format (0 followed by 7 and 9 digits)
  const phoneRegex = /^0[7]\d{8}$/;

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="card shadow-lg p-4 rounded">
            <h2 className="text-center mb-4 text-white bg-primary py-3 rounded-top">
              Add New Doctor
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="name"
                    name="name"
                    value={doctor.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="hireDate" className="form-label">
                    Hire Date
                  </label>
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    id="hireDate"
                    name="hireDate"
                    value={doctor.hireDate}
                    onChange={handleChange}
                    required
                    min={today}  // Sets today's date as the minimum date
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="department" className="form-label">
                    Department
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="department"
                    name="department"
                    value={doctor.department}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="experience" className="form-label">
                    Experience
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="experience"
                    name="experience"
                    value={doctor.experience}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="age" className="form-label">
                    Age
                  </label>
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    id="age"
                    name="age"
                    value={doctor.age}
                    onChange={handleChange}
                    required
                    min="24"
                    max="70"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="form-control form-control-lg"
                    id="phone"
                    name="phone"
                    value={doctor.phone}
                    onChange={handleChange}
                    required
                    pattern="^0[7]\d{8}$"
                    title="Phone number must be in the Jordanian format (e.g., 079xxxxxxxx)"
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6 position-relative">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="address"
                    name="address"
                    value={doctor.address}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                  />
                  {showOptions && (
                    <ul className="list-group position-absolute w-100" style={{ zIndex: 10 }}>
                      {filteredOptions.map((option, index) => (
                        <li
                          key={index}
                          className="list-group-item list-group-item-action"
                          onClick={() => handleOptionSelect(option)}
                          style={{ cursor: "pointer" }}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="email"
                    name="email"
                    value={doctor.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="row mb-3">
                <label className="form-label">Gender</label>
                <div className="form-check" style={{ display: "flex", gap: "20px" }}>
                  <div style={{ marginRight: "20px" }}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="male"
                      value="Male"
                      checked={doctor.gender === "Male"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>
                  </div>
                  <div>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="female"
                      value="Female"
                      checked={doctor.gender === "Female"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="female">
                      Female
                    </label>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-secondary btn-lg w-100 mt-4">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}