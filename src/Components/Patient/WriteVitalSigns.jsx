import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function WriteVitalSigns() {
  const navigate = useNavigate();

  const [vitalSigns, setVitalSigns] = useState({
    temperature: "",
    bloodPressure: "",
    heartRate: "",
    respiratoryRate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVitalSigns((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can handle the data (e.g., send it to the backend or save it in the state)
    console.log("Vital Signs:", vitalSigns);

    // Redirect to history page (or any other page you want after saving)
    navigate("/vital-signs-history");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white text-center">
              <h3>Vital Signs form</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="temperature" className="form-label">
                    Temperature (°C)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    id="temperature"
                    name="temperature"
                    className="form-control"
                    value={vitalSigns.temperature}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="bloodPressure" className="form-label">
                    Blood Pressure (mmHg)
                  </label>
                  <input
                    type="text"
                    id="bloodPressure"
                    name="bloodPressure"
                    className="form-control"
                    value={vitalSigns.bloodPressure}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="heartRate" className="form-label">
                    Heart Rate (BPM)
                  </label>
                  <input
                    type="number"
                    id="heartRate"
                    name="heartRate"
                    className="form-control"
                    value={vitalSigns.heartRate}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="respiratoryRate" className="form-label">
                    Respiratory Rate (Breaths/min)
                  </label>
                  <input
                    type="number"
                    id="respiratoryRate"
                    name="respiratoryRate"
                    className="form-control"
                    value={vitalSigns.respiratoryRate}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100 py-2">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
