import { useState } from "react";

export default function PrescriptionDetails() {
  const [prescription] = useState({
    medication: "Amoxicillin",
    dosage: "500mg",
    instructions: "Take one tablet every 8 hours for 7 days.",
  });

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white text-center">
              <h3>Prescription Details</h3>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <strong>Medication:</strong>
                <p>{prescription.medication}</p>
              </div>

              <div className="mb-3">
                <strong>Dosage:</strong>
                <p>{prescription.dosage}</p>
              </div>

              <div className="mb-3">
                <strong>Instructions:</strong>
                <p>{prescription.instructions}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
