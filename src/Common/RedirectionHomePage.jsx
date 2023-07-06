import React from "react";
import TopHeader from "./TopHeader";
import "../Style/RedirectionTab.css";
import { Link } from "react-router-dom";
import BGImage from "../Asset/Img/L1L2Background.jpg";

const RedirectionHomePage = () => {
  const ROLE = localStorage.getItem("indent-expressRole");
  return (
    <>
      <TopHeader />
      <div className="DropDownFormStyle">
        <div className="row w-100">
          {ROLE === "L1" || ROLE === "L2" ? (
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
          ) : (
            ""
          )}
          {ROLE === "L3" && (
            <div className="d-flex w-100 mx-3">
              <Link
                className="col-md-6 redirectionTab"
                to="/Indent-express/L3/physical/home"
              >
                PHYSICAL
              </Link>
              <Link
                className="col-md-6 redirectionTab"
                to="Indent-express/L3/digital/home"
              >
                DIGITAL
              </Link>
            </div>
          )}
        </div>
      </div>
      <img src={BGImage} alt="Image_Not Load" className="L1L2BGImage" />
    </>
  );
};

export default RedirectionHomePage;
