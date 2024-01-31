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
        <h1 className="text-4xl text-center mb-4">Our Doctors</h1>
        <p className="text-xl text-center   text-primary">
          ---List of Best Doctors---
        </p>
      </div>
      <div className=" mt-10 grid  grid-cols-1 md:grid-cols-4  gap-8 ">
        {doctors.map((doctor) => (
          <Doctor doctor={doctor} />
        ))}
      </div>
    </div>
  );
}
