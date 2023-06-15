import React from "react";
import TopHeader from "../../Common/TopHeader";
import "../../Style/RedirectionTab.css";
import { Link } from "react-router-dom";
import BGImage from "../../Asset/Img/L1L2Background.jpg";
import {
  BsFillHouseDoorFill,
  BsFillBarChartFill,
  BsFillFileEarmarkPostFill,
} from "react-icons/bs";

const RedirectionHomePage = () => {
  const ROLE = localStorage.getItem("indent-expressRole");
  console.log("ROLE==>", ROLE);
  return (
    <>
      <TopHeader />
      {/* <nav className="navbar navbar-expand-lg DropDownFormStyle">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/Indent-express/direction/home"
                >
                  <BsFillHouseDoorFill size={27} className="mx-1" />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/Indent-express/L1/L2/products/reports"
                >
                  <BsFillFileEarmarkPostFill size={25} className="mx-1" />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/Indent-express/L1/L2/status/reports"
                >
                  <BsFillBarChartFill size={25} className="mx-1" />
                </Link>
              </li>
            </ul>
            <div className="d-flex w-100">
              <Link
                className="col-md-6 redirectionTab"
                to="/Indent-express/L1/L2/physical/home"
              >
                PHYSICAL
              </Link>
              <Link
                className="col-md-6 redirectionTab"
                to="/Indent-express/feedback/L1/L2"
              >
                DIGITAL
              </Link>
            </div>
          </div>
        </div>
      </nav> */}
      <div className="DropDownFormStyle">
        <div className="row w-100">
          <div className="d-flex">
            <Link to="/Indent-express/direction/home">
              <BsFillHouseDoorFill size={25} className="my-2 text-dark" />
            </Link>
            <Link to="/Indent-express/L1/L2/products/reports">
              <BsFillFileEarmarkPostFill
                size={25}
                className="my-2 text-dark mx-3"
              />
            </Link>
            <Link to="/Indent-express/L1/L2/status/reports">
              <BsFillBarChartFill size={25} className="my-2 text-dark" />
            </Link>
            <div className="d-flex w-100 mx-3">
              <Link
                className="col-md-6 redirectionTab"
                to="/Indent-express/L1/L2/physical/home"
              >
                PHYSICAL
              </Link>
              <Link
                className="col-md-6 redirectionTab"
                to="/Indent-express/feedback/L1/L2"
              >
                DIGITAL
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img src={BGImage} alt="Image_Not Load" className="L1L2BGImage" />
    </>
  );
};

export default RedirectionHomePage;
