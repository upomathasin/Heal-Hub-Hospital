import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

export default function AllServices() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("DeptInfo.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="bg-base-200 min-h-screen p-20 flex flex-col justify-around items-center  ">
      <div>
        <h1 className="text-4xl text-center mb-4 uppercase">Our Services</h1>
        <p className="text-2xl text-center  text-slate-800 border-b-2">
          ---List of our best services---
        </p>
      </div>
      <div className=" mt-10  grid grid-cols-1 gap-10  md:grid-cols-3  ">
        {services.map((service) => {
          return <Service service={service} />;
        })}
      </div>
    </div>
  );
}
