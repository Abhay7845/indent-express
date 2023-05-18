import React, { useState } from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import logo from "../Asset/Img/tanishq.svg";
import "../Style/SideBar.css";
import { BsFillBarChartFill, BsFillFileEarmarkPostFill } from "react-icons/bs";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ToggleSidebar = () => {
    isOpen === true ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <>
      <Icon.TextLeft
        onClick={ToggleSidebar}
        size={30}
        className="text-dark mt-1 mx-2"
        cursor="pointer"
      />
      <div
        className={`sidebar light-theme bg-warning ${
          isOpen === true ? "active" : ""
        }`}
      >
        <div className="d-flex justify-content-between">
          <img src={logo} alt="logo" className="Logo my-2 mx-2" />
          <Icon.ArrowLeft
            onClick={ToggleSidebar}
            size={30}
            className="text-light mt-1 mx-2"
            cursor="pointer"
          />
        </div>
        <div className="sd-body">
          <ul className="mx-2">
            <li>
              <Link
                className="NavigationStyle"
                to="/Indent-express/feedback/L1/L2"
                onClick={ToggleSidebar}
              >
                <Icon.HouseDashFill
                  size={20}
                  style={{ marginTop: "-10px" }}
                  className="mx-1"
                />
                HOME
              </Link>
            </li>
            <hr />
            <li className="my-3">
              <Link
                className="NavigationStyle"
                to="/Indent-express/feedback/L1/L2"
                onClick={ToggleSidebar}
              >
                <BsFillFileEarmarkPostFill
                  size={20}
                  style={{ marginTop: "-10px" }}
                  className="mx-1"
                />
                REPORTS
              </Link>
              <hr />
            </li>
            <li className="my-3">
              <Link
                className="NavigationStyle"
                to="/Indent-express/feedback/L1/L2"
                onClick={ToggleSidebar}
              >
                <BsFillBarChartFill
                  size={20}
                  style={{ marginTop: "-10px" }}
                  className="mx-1"
                />
                STATUS
              </Link>
              <hr />
            </li>
          </ul>
        </div>
      </div>
      {/* <div
        className={`sidebar-overlay ${isOpen === true ? "active" : ""}`}
        onClick={ToggleSidebar}
      /> */}
    </>
  );
};

export default SideBar;
