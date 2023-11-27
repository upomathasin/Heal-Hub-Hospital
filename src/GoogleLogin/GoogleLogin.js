import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";
export default function GoogleLogin() {
  const { googleLogin } = useContext(AuthContext);
  const handleLogin = () => {
    googleLogin()
      .then((result) => {
     

        const user = result.user;
      })
      .catch((error) => {
    
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div className="divider p-5">
      <button
        onClick={handleLogin}
        className=" btn text-center   border-green-300"
      >
        {" "}
        <FaGoogle className=" w-10" />
      </button>
    </div>
  );
}
