import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateComponent = () => {
  return (
    <>
      {localStorage.getItem("UserRole") ? (
        <Outlet />
      ) : (
        <Navigate to="/Bottom_Up" />
      )}
    </>
  );
};

export default PrivateComponent;
