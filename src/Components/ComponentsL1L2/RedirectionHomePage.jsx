import React from "react";
import TopHeader from "../../Common/TopHeader";
import SideBar from "../../Common/SideBar";
import "../../Style/RedirectionTab.css";
import { Link } from "react-router-dom";

const RedirectionHomePage = () => {
  return (
    <>
      <TopHeader />
      <div className="DropDownFormStyle">
        <SideBar />
        <div className="row mx-2 d-flex justify-content-between w-100">
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
    </>
  );
};

export default RedirectionHomePage;
