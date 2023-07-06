import React from "react";
import TopHeader from "../../Common/TopHeader";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import { BsCardList, BsCartFill, BsFillBarChartFill } from "react-icons/bs";

const CategoryTypeL3 = () => {
  const YourCart = localStorage.getItem("your-cart");

  return (
    <>
      <TopHeader />
      <div className="ComponentL3LowerHeader">
        <div className="d-flex">
          <Link to="/Indent-express/L3/digital/home">
            <button type="button" class="btn btn-dark btn-sm">
              BACK
            </button>
          </Link>
          <Tippy content="Status Report">
            <Link to="/Indent-express/L3/status/reports">
              <BsFillBarChartFill size={28} className="mx-2 text-dark" />
            </Link>
          </Tippy>
        </div>
        <div className="d-flex">
          <Tippy content="Cancel Item List">
            <Link to="/Indent-express/L3/cancel/item/list">
              <BsCardList size={25} className="mt-2 mx-2 text-dark" />
            </Link>
          </Tippy>
          <Link
            to="/Indent-express/L3/your/cart/reports"
            className="notification"
          >
            <BsCartFill size={25} className="mt-2 mx-2 text-dark" />
            <span className="badge">{YourCart}</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CategoryTypeL3;
