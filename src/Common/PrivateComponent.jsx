import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateComponent = () => {
  return (
    <>
      {localStorage.getItem("indent-expressId") ? (
        <Outlet />
      ) : (
        <Navigate to="/Indent_Express" />
      )}
    </>
  );
};

export default PrivateComponent;
