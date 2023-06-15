import React from "react";
import TopHeader from "../../Common/TopHeader";
import SideBar from "../../Common/SideBar";
import "../../Style/RedirectionTab.css";
import { Link } from "react-router-dom";
import BGImage from "../../Asset/Img/L1L2Background.jpg";

const RedirectionHomePage = () => {
  const ROLE = localStorage.getItem("indent-expressRole");
  console.log("ROLE==>", ROLE);
  return (
    <>
      <TopHeader />
      <div className="DropDownFormStyle">
        <SideBar />
        <div className="row mx-1 d-flex justify-content-between w-100">
          {ROLE === "L1" || ROLE === "L2" ? (
            <>
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
            </>
          ) : (
            ""
          )}
          {ROLE === "L3" && (
            <>
              <Link
                className="col-md-6 redirectionTab"
                to="/Indent-express/L1/L2/physical/home"
              >
                PHYSICAL
              </Link>
              <Link className="col-md-6 redirectionTab" to="/Indent-express/L3">
                DIGITAL
              </Link>
            </>
          )}
        </div>
      </div>
      <img src={BGImage} alt="Image_Not Load" className="L1L2BGImage" />
    </>
  );
};

export default RedirectionHomePage;
