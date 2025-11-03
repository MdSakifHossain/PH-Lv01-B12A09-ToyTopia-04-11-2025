import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivatePage = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-spinner text-warning"></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to={`/login`}></Navigate>;
};

export default PrivatePage;
