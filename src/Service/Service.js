import React from "react";
import { useNavigate } from "react-router-dom";

export default function Service({ service }) {
  const navigate = useNavigate();
  const showDetails = (service) => {
    navigate(`/service/${service.id}`, { state: service });
  };
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl rounded-none">
      <figure>
        <img
          src={service.image}
          alt=""
          style={{ width: "100px" }}
          className="p-4"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service.name}</h2>
        <p>{service.description}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => showDetails(service)}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
