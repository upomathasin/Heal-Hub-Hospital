import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";

export default function () {
  const { signOutUser, user } = useContext(AuthContext);
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const logout = () => {
    signOutUser()
      .then(() => {
        navigate("/");
        alert("Logout Successful !");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/register">Registration</Link>
              </li>

              <li>
                <Link to="/services">All Services</Link>
              </li>
              <li>
                <Link to="/doctors">All Doctors</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              {user ? (
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              ) : (
                <li>
                  <Link className="" to="/login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img
              src="https://i.ibb.co/3CNFdj3/hospital.png"
              style={{ width: "20px" }}
            />{" "}
            Heal Hub Hospital
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Registration</Link>
            </li>
            <li>
              <Link to="/doctors">All Doctors</Link>
            </li>
            <li>
              <Link to="/allservices">All Services</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <li className="btn">
              <button onClick={logout}>Logout</button>
            </li>
          ) : (
            <li className="btn">
              <Link to="/login">Login</Link>
            </li>
          )}
        </div>
      </div>
      <div className={!show && `hidden`}>
        <div
          className={`  flex justify-between  items-center p-5   bg-base-300 `}
        >
          <div>
            {" "}
            <button className="btn btn-circle" onClick={() => setShow(!show)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>{" "}
          </div>
          <div>
            {" "}
            {user && (
              <h1 className="text-secondary font-bold">Welcome {user.email}</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
