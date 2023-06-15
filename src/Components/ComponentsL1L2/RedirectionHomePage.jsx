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
      <div className="DropDownFormStyle">
        <div className="row w-100">
          {ROLE === "L1" || ROLE === "L2" ? (
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
                  PHYSICAL - FEEDBACK FORM
                </Link>
                <Link
                  className="col-md-6 redirectionTab"
                  to="/Indent-express/feedback/L1/L2"
                >
                  DIGITAL - FEEDBACK FORM
                </Link>
              </div>
            </div>
          ) : (
            ""
          )}
          {ROLE === "L3" && (
            <div className="d-flex">
              <Link to="/Indent-express/direction/home">
                <BsFillHouseDoorFill size={25} className="mt-2 text-dark" />
              </Link>
              <Link to="/Indent-express/L3/status/reports">
                <BsFillBarChartFill size={25} className="mt-2 mx-2 text-dark" />
              </Link>
              <div className="d-flex w-100 mx-3">
                <Link
                  className="col-md-6 redirectionTab"
                  to="/Indent-express/L3/physical/home"
                >
                  PHYSICAL
                </Link>
                <Link
                  className="col-md-6 redirectionTab"
                  to="/Indent-express/L3/home"
                >
                  DIGITAL
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <img src={BGImage} alt="Image_Not Load" className="L1L2BGImage" />
    </>
  );
};

export default RedirectionHomePage;
