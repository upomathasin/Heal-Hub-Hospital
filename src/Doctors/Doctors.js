import React, { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div className="bg-base-200 min-h-screen p-20 flex flex-col justify-around items-center   ">
      <div>
        <h1 className="text-5xl text-center mb-4">
          Our Doctors : {doctors.length}
        </h1>
        <p className="text-3xl text-center  text-slate-800">
          List of Best Treatment Options
        </p>
      </div>
      <div className=" mt-10 grid grid-rows-4  md:grid-rows-2 grid-flow-col gap-10    ">
        {doctors.map((doctor) => (
          <Doctor doctor={doctor} />
        ))}
      </div>
    </div>
  );
}
