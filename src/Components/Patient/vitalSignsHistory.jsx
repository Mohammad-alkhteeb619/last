import { useState } from "react";

export default function VitalSignsHistory() {
  const [vitalSignsHistory] = useState([
    { date: "2024-11-01", temperature: 36.7, bloodPressure: "120/80", heartRate: 75, respiratoryRate: 16 },
    { date: "2024-11-02", temperature: 37.2, bloodPressure: "125/85", heartRate: 78, respiratoryRate: 17 },
    { date: "2024-11-03", temperature: 36.8, bloodPressure: "118/79", heartRate: 74, respiratoryRate: 15 },
    { date: "2024-11-04", temperature: 37.0, bloodPressure: "122/82", heartRate: 80, respiratoryRate: 16 },
  ]);

  const calculateAverage = (key) => {
    const total = vitalSignsHistory.reduce((acc, item) => acc + item[key], 0);
    return (total / vitalSignsHistory.length).toFixed(2);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white text-center">
              <h3>Medical History</h3>
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Temperature (°C)</th>
                    <th>Blood Pressure (mmHg)</th>
                    <th>Heart Rate (bpm)</th>
                    <th>Respiratory Rate (breaths/min)</th>
                  </tr>
                </thead>
                <tbody>
                  {vitalSignsHistory.map((entry, index) => (
                    <tr key={index}>
                      <td>{entry.date}</td>
                      <td>{entry.temperature}</td>
                      <td>{entry.bloodPressure}</td>
                      <td>{entry.heartRate}</td>
                      <td>{entry.respiratoryRate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4">
                <h5>Statistics</h5>
                <p>
                  <strong>Average Temperature:</strong> {calculateAverage("temperature")} °C
                </p>
                <p>
                  <strong>Average Blood Pressure:</strong> {calculateAverage("bloodPressure")} mmHg
                </p>
                <p>
                  <strong>Average Heart Rate:</strong> {calculateAverage("heartRate")} bpm
                </p>
                <p>
                  <strong>Average Respiratory Rate:</strong> {calculateAverage("respiratoryRate")} breaths/min
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
