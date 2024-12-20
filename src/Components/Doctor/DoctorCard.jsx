import { useState, useEffect } from "react";
import Filter from "../GeneralBlock/Filter";
import { useNavigate } from "react-router-dom";
import img from "/Person.png";
import axios from "axios";

export default function DoctorTable() {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch doctors data
    axios
      .get("http://192.168.100.4:5000/api/Doctor/Doctors")
      .then((response) => {
        setDoctors(response.data.doctorsCard);
      })
      .catch((error) => {
        console.error("Error fetching doctors data:", error);
      });
  }, []);

  return (
    <>
      <Filter />
      <div className="d-flex flex-wrap">
        {doctors.map((ele) => (
          <div className="card m-4" style={{ width: "18rem" }} key={ele.id}>
            <img
              className="card-img-top m-1"
              src={ ele.imgpath||img}
              alt="Doctor illustration"
            />
            <div className="card-body">
              <h5 className="card-title">{ele.name}</h5>
              <p className="card-text">{ele.description}</p>
              <button
                className="btn btn-primary"
                onClick={() => navigate(`/doctor-details/${ele.id}`)}
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
