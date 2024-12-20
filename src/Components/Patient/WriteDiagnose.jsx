import React, { useState } from "react";

const DiagnosesForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    symptoms: "",
    diagnosis: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    alert("Diagnosis submitted successfully!");
    setFormData({
      symptoms: "",
      diagnosis: "",
      notes: "",
    });
  };

  return (
    <div className="container mt-4">
      <form
        onSubmit={handleSubmit}
        className="border p-4 rounded shadow-sm bg-light"
      >
        <h2 className="text-center mb-4">Diagnosis Form</h2>

        <div className="mb-3">
          <label htmlFor="symptoms" className="form-label">
            Symptoms:
          </label>
          <textarea
            id="symptoms"
            name="symptoms"
            value={formData.symptoms}
            onChange={handleChange}
            required
            className="form-control"
            placeholder="Describe symptoms"
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="diagnosis" className="form-label">
            Diagnosis:
          </label>
          <input
            type="text"
            id="diagnosis"
            name="diagnosis"
            value={formData.diagnosis}
            onChange={handleChange}
            required
            className="form-control"
            placeholder="Enter diagnosis"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="notes" className="form-label">
            Notes:
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="form-control"
            placeholder="Add any additional notes (optional)"
          ></textarea>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DiagnosesForm;
