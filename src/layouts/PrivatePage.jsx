import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivatePage = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <p className="text-2xl">loading...</p>;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to={`/login`}></Navigate>;
};

export default PrivatePage;
