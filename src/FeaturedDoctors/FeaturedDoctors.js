import React, { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";

export default function FeaturedDoctors() {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("doctors.json")
      .then((res) => res.json())
      .then((data) => {
        const featured = data.filter((data) => data.featured == true);
        //console.log(featured);
        setDoctors(featured);
      });
  }, []);
  return (
    <div className=" min-h-screen p-20 flex flex-col justify-around items-center   ">
      <div>
        <h1 className="text-4xl text-center mb-4 uppercase">Our Doctors</h1>
        <p className="text-2xl text-center  text-slate-800 ">
          ---List of our best Doctors---
        </p>
      </div>
      <div className=" mt-10  grid-cols-1 md:grid grid-cols-4  gap-8 ">
        {doctors.map((doctor) => (
          <Doctor doctor={doctor} />
        ))}
      </div>
    </div>
  );
}
