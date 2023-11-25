import React from "react";
import { useLocation } from "react-router-dom";

export default function ServiceDetails() {
  const { state } = useLocation();

  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={state.image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{state.name}</h1>
            <p className="py-3 text-3xl">{state.description}</p>
            <p className="py-3">{state.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
