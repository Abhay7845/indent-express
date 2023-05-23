import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateComponent = () => {
  return (
    <>
      {localStorage.getItem("indent-expressId") ? (
        <Outlet />
      ) : (
        <Navigate to="/IndentExpress" />
      )}
    </>
  );
};

export default PrivateComponent;
