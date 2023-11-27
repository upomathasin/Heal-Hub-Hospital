import React from "react";

export default function Doctor({ doctor }) {
  return (
    <div className="card w-80 glass rounded-none">
      <figure>
        <img src={doctor.image} style={{ height: "300px" }} />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{doctor.name}</h2>
        <p>{doctor.specialization}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
}
