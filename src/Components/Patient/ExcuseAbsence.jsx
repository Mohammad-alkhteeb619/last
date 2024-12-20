import React, { useState } from "react";

const ExcuseAbsence = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    patientName: "",
    duration: "",
    startDate: "",
    endDate: "",
    reason: "",
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
    alert("Excuse submitted successfully!");
    setFormData({
      patientName: "",
      duration: "",
      startDate: "",
      endDate: "",
      reason: "",
    });
  };

  return (
    <div className="container mt-4">
      <form
        onSubmit={handleSubmit}
        className="border p-4 rounded shadow-sm bg-light"
        style={{ maxWidth: "600px", margin: "auto" }} // Adjust form width
      >
        <h2 className="text-center mb-4">Excuse Absence Form</h2>

        <div className="mb-3">
          <label htmlFor="patientName" className="form-label">
            Patient Name:
          </label>
          <input
            type="text"
            id="patientName"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            required
            className="form-control"
            placeholder="Enter patient's name"
            style={{ maxWidth: "100%" }} // Ensure input width is responsive
          />
        </div>

        <div className="mb-3">
          <label htmlFor="duration" className="form-label">
            Duration (days):
          </label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
            className="form-control"
            placeholder="Enter duration of absence"
            style={{ maxWidth: "100%" }} // Ensure input width is responsive
          />
        </div>

        <div className="mb-3 row">
          <div className="col-md-6">
            <label htmlFor="startDate" className="form-label">
              Start Date:
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="endDate" className="form-label">
              End Date:
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="reason" className="form-label">
            Absence Reason:
          </label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
            className="form-control"
            placeholder="Enter reason for absence"
            style={{ maxWidth: "100%", minHeight: "100px" }} // Ensure textarea width is responsive
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

export default ExcuseAbsence;
