import React from 'react';
import { Link } from 'react-router-dom';

const DiagnosisCard = ({ diagnosis }) => {
  if (!diagnosis) {
    return <p className="text-center text-muted">No diagnosis available.</p>;
  }

  const { patientId, symptoms, diagnosisText, notes } = diagnosis;

  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">Diagnosis Details</h5>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <strong>Patient ID:</strong>
            <p className="mb-1">{patientId}</p>
          </div>
          <div className="mb-3">
            <strong>Symptoms:</strong>
            <p className="mb-1">{symptoms}</p>
          </div>
          <div className="mb-3">
            <strong>Diagnosis:</strong>
            <p className="mb-1">{diagnosisText}</p>
          </div>
          <div className="mb-3">
            <strong>Notes:</strong>
            <p className="mb-1">{notes || "No additional notes provided."}</p>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <span className="text-muted">Last updated: {new Date().toLocaleDateString()}</span>
          <Link to={`/edit-diagnosis`} className="btn btn-primary btn-sm">
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisCard;
