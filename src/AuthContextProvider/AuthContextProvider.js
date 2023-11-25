import React, { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../Firebase/firebase.init";

const auth = getAuth(app);
export const AuthContext = createContext(null);
const googleAuthProvider = new GoogleAuthProvider();
const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
const signInUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
const googleLogin = () => {
  return signInWithPopup(auth, googleLogin)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
const logout = () => {
  alert("Logout Successful!");

  return signOut(auth);
};
export default function AuthContextProvider({ children }) {
  const val = {
    createUser: createUser,
    signInUser: signInUser,
    signOut: signOut,
  };
  return <AuthContext.Provider value={val}>{children}</AuthContext.Provider>;
}
