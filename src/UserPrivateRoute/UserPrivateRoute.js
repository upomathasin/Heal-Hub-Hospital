import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";

export default function UserPrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <h1>loading............</h1>;
  }
  {
    !user && alert("Please Login first !");
  }
  if (user) {
    return children;
  } else {
    return (
      <Navigate
        to="/login"
        replace={true}
        state={{ from: location }}
      ></Navigate>
    );
  }
}
