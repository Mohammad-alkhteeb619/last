import Filter from "../GeneralBlock/Filter";
import { useNavigate } from "react-router-dom";
import img from "/undraw_medicine_b1ol.png";

export default function nurseTable({ nurse }) {
  const navigate = useNavigate();

  return (
    <>
      <Filter />
      <div className="card m-4" style={{ width: "18rem" }}>
        <img className="card-img-top" src={img} alt="nurse illustration" />
        <div className="card-body">
          <h5 className="card-title">{nurse?.name || "Staff Name"}</h5>
          <p className="card-text">
            {nurse?.description || "Small Description"}
          </p>
          <button
            className="btn btn-primary"
            onClick={() => navigate(`/staff-details`)} ///${nurse?.id || 1}
          >
            Details
          </button>
        </div>
      </div>
    </>
  );
}
