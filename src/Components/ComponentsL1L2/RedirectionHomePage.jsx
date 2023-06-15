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
      <nav class="navbar navbar-expand-lg DropDownFormStyle">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  to="/Indent-express/direction/home"
                >
                  <BsFillHouseDoorFill size={27} className="mx-1" />
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  to="/Indent-express/L1/L2/products/reports"
                >
                  <BsFillFileEarmarkPostFill size={25} className="mx-1" />
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  to="/Indent-express/L1/L2/status/reports"
                >
                  <BsFillBarChartFill size={25} className="mx-1" />
                </Link>
              </li>
            </ul>
            <div class="d-flex w-100">
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
      </nav>
      <img src={BGImage} alt="Image_Not Load" className="L1L2BGImage" />
    </>
  );
};

export default RedirectionHomePage;
