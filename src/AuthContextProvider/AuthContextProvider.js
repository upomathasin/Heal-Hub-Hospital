import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
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
const googleLogin = async () => {
  return signInWithPopup(auth, googleAuthProvider);
};
const signOutUser = async () => {
  return signOut(auth);
};
export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);
  const val = {
    user: user,
    loading: loading,
    createUser: createUser,
    signInUser: signInUser,
    signOutUser: signOutUser,
    googleLogin: googleLogin,
  };
  return <AuthContext.Provider value={val}>{children}</AuthContext.Provider>;
}
