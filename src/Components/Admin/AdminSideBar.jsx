import React, { useState } from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import logo from "../../Asset/Img/tanishq.svg";
import "../../Style/AdminSideBar.css";
import { BsXLg } from "react-icons/bs";

const AdminSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ToggleSidebar = () => {
    isOpen === true ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <div>
      <Icon.TextLeft
        onClick={ToggleSidebar}
        size={30}
        className="text-dark mt-1 mx-2"
        cursor="pointer"
      />
      <div
        className={`sidebar light-theme  ${isOpen === true ? "active" : ""}`}
        style={{ background: "#f5ea84" }}
      >
        <div className="d-flex justify-content-between">
          <img src={logo} alt="logo" className="Logo my-3 mx-4" />
          <BsXLg
            onClick={ToggleSidebar}
            size={20}
            className="text-dark mt-3 mx-2"
            cursor="pointer"
          />
        </div>
        <div className="sd-body">
          <ul className="mx-2">
            <li className="my-3">
              <Link
                className="NavigationStyle"
                to="/Indent-express/admin/home"
                onClick={ToggleSidebar}
              >
                COPY STORE INDENTS
              </Link>
              <hr />
            </li>
            <li className="my-3">
              <Link
                className="NavigationStyle"
                to="/Indent-express/admin/master/file/upload"
                onClick={ToggleSidebar}
              >
                MASTER FILE UPLOAD
              </Link>
              <hr />
            </li>
            <li className="my-3">
              <Link
                className="NavigationStyle"
                to="/Indent-express/admin/update/tortal/status"
                onClick={ToggleSidebar}
              >
                UPDATE PORTAL STATUS
              </Link>
              <hr />
            </li>
            <li className="my-3">
              <Link
                className="NavigationStyle"
                to="/Indent-express/admin/get/master/sku"
                onClick={ToggleSidebar}
              >
                GET MASTER SKU
              </Link>
              <hr />
            </li>
            <li className="my-3">
              <Link
                className="NavigationStyle"
                to="/Indent-express/admin/login/credentials"
                onClick={ToggleSidebar}
              >
                LOGIN CREDENTIALS
              </Link>
              <hr />
            </li>
            <li className="my-3">
              <Link
                className="NavigationStyle"
                to="/Indent-express/admin/day/end/report"
                onClick={ToggleSidebar}
              >
                DAY END REPORTS
              </Link>
              <hr />
            </li>
            <li className="my-3">
              <Link
                className="NavigationStyle"
                to="/Indent-express/admin/update/automail"
                onClick={ToggleSidebar}
              >
                UPDATE AUTO MAIL
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
    </div>
  );
};

export default AdminSideBar;
