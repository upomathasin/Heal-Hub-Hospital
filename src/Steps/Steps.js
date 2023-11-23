import React from "react";

export default function Steps() {
  return (
    <div className="hero min-h-screen w-full p-10">
      <div className="flex flex-col justify-center items-center    ">
        <div className=" mb-12 ">
          <h1 className="text-center uppercase text-4xl  lg:text-5xl  ">
            {" "}
            Your Treatment Journey at{" "}
          </h1>
          <h2 className="text-primary uppercase text-center font-bold  text-4xl lg:text-6xl ">
            Heal Hub
          </h2>
        </div>
        <ul className=" steps   steps-vertical">
          <li className="step step-primary">
            <div className="grid grid-cols-1 ">
              <img src="1.png" style={{ width: "80px" }} className=" " />
              <h1> Analysis of your Medical History</h1>
            </div>
          </li>
          <li className="step step-primary">
            <div className="grid grid-cols-1 ">
              <img src="2.png" style={{ width: "80px" }} className=" " />
              <h1> Pre-Arrival Consultation</h1>
            </div>
          </li>
          <li className="step step-primary">
            <div className="grid grid-cols-1 ">
              <img src="3.png" style={{ width: "80px" }} className=" " />
              <h1> Care Beyond Travel Arrangements</h1>
            </div>
          </li>
          <li className="step ">
            <div className="grid grid-cols-1 ">
              <img src="4.png" style={{ width: "80px" }} className=" " />
              <h1> Hassle Free Health Journey</h1>
            </div>
          </li>
          <li className="step ">
            <div className="grid grid-cols-1 ">
              <img src="5.png" style={{ width: "80px" }} className=" " />
              <h1> Post-Hospitalization Care</h1>
            </div>
          </li>
        </ul>
        <div></div>
      </div>
    </div>
  );
}
