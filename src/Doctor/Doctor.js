import React from "react";

export default function Doctor({ doctor }) {
  return (
    <div className="card w-96 glass rounded-none">
      <figure>
        <img
          src="doctor.png"
          alt="car!"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{doctor.name}</h2>
        <p>{doctor.specialization}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Learn now!</button>
        </div>
      </div>
    </div>
  );
}
