import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";
import { getAuth } from "firebase/auth";
import app from "../Firebase/firebase.init";
import { Link } from "react-router-dom";
export default function Registration() {
  const { register, handleSubmit } = useForm();

  const { createUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    const auth = getAuth(app);
    const { email, password } = data;
    createUser(email, password)
      .then((userCredential) => console.log(userCredential.user))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className=" text-4xl font-bold">Registration </h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password")}
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />

                <label className="label">
                  <Link
                    to="/login"
                    className="text-green-700  label-text-alt link link-hover"
                  >
                    Already Registered ? Login
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Registration</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
