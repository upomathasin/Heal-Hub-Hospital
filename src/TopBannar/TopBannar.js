import React from "react";

export default function TopBannar() {
  return (
    <div>
      <div className="carousel w-full max-h-[650px]">
        <div id="item1" className="carousel-item w-full    bg-slate-100">
          <div className=" grid md:grid-cols-3  gap-5 p-10 ">
            <div className="flex w-full  flex-col justify-center items-center ">
              <div className="  flex  flex-col justify-start items-center">
                <div className="text-center  max-w-[480px]">
                  <h1 className="text-4xl font-bold">
                    Welcome to <span className="text-primary">Heal Hub</span>
                  </h1>
                  <p className="py-3 text-3xl">
                    We are here to hear and heal your
                  </p>
                  <p className="text-3xl">Health Problems</p>
                </div>
                <div className="flex  justify-start items-center   mt-10">
                  <button className="btn  me-8  btn-primary">
                    Get Started
                  </button>
                  <button className="btn  btn-secondary">Contact Us</button>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center md:col-span-2 ">
              <img src="doctorFour.png" className="" />
            </div>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full  bg-slate-100">
          <div className=" grid md:grid-cols-3  gap-5 p-10 ">
            <div className="flex w-full  flex-col justify-center items-center ">
              <div className="flex w-full  flex-col justify-center items-center ">
                <div className="  flex  flex-col justify-start items-center">
                  <div className="text-center  max-w-[480px]">
                    <h1 className="text-4xl font-bold">
                      Welcome to <span className="text-primary">Heal Hub</span>
                    </h1>
                    <p className="py-3 text-3xl">
                      We are here to hear and heal your
                    </p>
                    <p className="text-3xl">Health Problems</p>
                  </div>
                  <div className="flex  justify-start items-center   mt-10">
                    <button className="btn  me-8  btn-primary">
                      Get Started
                    </button>
                    <button className="btn  btn-secondary">Contact Us</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center md:col-span-2 ">
              <img src="doctorTwo.png" className="" />
            </div>
          </div>
        </div>
        <div id="item3" className="carousel-item w-full  bg-slate-100">
          <div className=" grid md:grid-cols-3  gap-5 p-10 ">
            <div className="flex w-full  flex-col justify-center items-center ">
              <div className="flex w-full  flex-col justify-center items-center ">
                <div className="  flex  flex-col justify-start items-center">
                  <div className="text-center  max-w-[480px]">
                    <h1 className="text-4xl font-bold">
                      Welcome to <span className="text-primary">Heal Hub</span>
                    </h1>
                    <p className="py-3 text-3xl">
                      We are here to hear and heal your
                    </p>
                    <p className="text-3xl">Health Problems</p>
                  </div>
                  <div className="flex  justify-start items-center   mt-10">
                    <button className="btn  me-8  btn-primary">
                      Get Started
                    </button>
                    <button className="btn  btn-secondary">Contact Us</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center md:col-span-2 ">
              <img src="doctor8.png" className="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
}
