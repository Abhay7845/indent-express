import React, { useEffect } from "react";
import logo from "../Asset/Img/tanishq.svg";
import Logout from "../Asset/Img/logout-icon.svg";
import "../Style/TopHeader.css";
import { useNavigate } from "react-router-dom";

const TopHeader = () => {
  let navigate = useNavigate();
  const UserRole = localStorage.getItem("indent-expressId").toUpperCase();
  const removeUserRole = () => {
    localStorage.removeItem("indent-expressId");
    navigate("/IndentExpress");
  };
  useEffect(() => {}, [UserRole]);
  return (
    <>
      <nav className="navbar navbarStyle">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            <img src={logo} alt="Logo" className="Logo" />
          </span>
          <h4 className="removeIndentExpress">
            {UserRole === "ADMIN" ? "ADMIN" : "INDENT-EXPRESS"}
          </h4>
          <b
            style={{ color: "#832729", cursor: "pointer" }}
            onClick={removeUserRole}
          >
            {UserRole}
            <img
              src={Logout}
              alt="logout"
              style={{ marginTop: "-5px", color: "#832729" }}
              className="mx-1"
            />
          </b>
        </div>
      </nav>
    </>
  );
};

export default TopHeader;
