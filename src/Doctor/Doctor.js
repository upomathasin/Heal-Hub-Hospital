import React from "react";
import { useNavigate } from "react-router-dom";

export default function Doctor({ doctor }) {
  const navigate = useNavigate();
  const showDetails = () => {
    console.log("show doctor");
    navigate(`/doctor/${doctor.id}`, { state: doctor });
  };
  return (
    <div className="card  w-72 glass rounded-none">
      <figure>
        <img src={doctor.image} style={{ height: "300px" }} />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{doctor.name}</h2>
        <p className=" text-primary">{doctor.specialization}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary btn-sm text-white w-full rounded-none"
            onClick={showDetails}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
