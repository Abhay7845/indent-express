import React, { useEffect } from "react";
import logo from "../Asset/Img/tanishq.svg";
import "../Style/TopHeader.css";
import { useNavigate } from "react-router-dom";

const TopHeader = () => {
  let navigate = useNavigate();
  const UserRole = localStorage.getItem("indent-expressId");
  const removeUserRole = () => {
    localStorage.removeItem("indent-expressId");
    navigate("/Indent-express/login");
  };
  useEffect(() => {}, [UserRole]);
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            <img src={logo} alt="Logo" className="Logo" />
          </span>
          <b className="removeIndentExpress">INDENT-EXPRESS</b>
          <b style={{ color: "#832729" }} onClick={removeUserRole}>
            {UserRole}
          </b>
        </div>
      </nav>
    </>
  );
};

export default TopHeader;
