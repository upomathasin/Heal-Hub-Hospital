import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

export default function Services() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("DeptInfo.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="bg-base-200 min-h-screen p-20 flex flex-col justify-around items-center  ">
      <div>
        <h1 className="text-5xl text-center mb-4">Our Doctors</h1>
        <p className="text-3xl text-center  text-slate-800">
          List of Best Doctors
        </p>
      </div>
      <div className=" mt-10 grid grid-rows-6  md:grid-rows-2 grid-flow-col gap-10    ">
        {services.map((service) => {
          return <Service service={service} />;
        })}
      </div>
    </div>
  );
}
