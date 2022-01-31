import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

import { createSession } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loginMsg, setLoginMsg] = useState("");

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    if (recoveredUser) {
      setUser(recoveredUser);
    }
    setLoading(false);
  }, []);

  const loginUser = async (login, password) => {
    const response = await createSession(login, password);
    if (response.data.validation) {

      const loggedUser = response.data.user;
      const token = response.data.token;

      localStorage.setItem("user", JSON.stringify(loggedUser));
      localStorage.setItem("token", token);

      setUser(loggedUser);
      navigate("/");
    } else {
      setLoginMsg(response.data.error);
    }
  };

  const logoutUser = () => {
    console.log("logout");

    localStorage.removeItem("user");
    localStorage.removeItem("token");

    setUser(null);
    navigate("/loginadmin/");
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated: !!user,
        user,
        loading,
        loginMsg,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
