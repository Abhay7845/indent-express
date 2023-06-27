import React, { useState, useEffect } from "react";
import {
  BsCartFill,
  BsCardList,
  BsFillBarChartFill,
  BsFillHouseDoorFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import Tippy from "@tippyjs/react";
import TopHeader from "../../Common/TopHeader";
import "../../Style/YourCard.css";
import Loader from "../../Common/Loader";
import { HostManager } from "../../APIList/HotMaster";
import CardTableList from "../../Common/CardTableList";

const YourProductsCart = () => {
  const storeCode = localStorage.getItem("indent-expressId");
  const [cols, setCol] = useState([]);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  localStorage.setItem("your-cart", rows.length);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${HostManager.reportsL1L2}/INDENTL3/express/item/wise/rpt/L3/${storeCode}`
      )
      .then((res) => res)
      .then((response) => {
        console.log("response==>", response.data.value);
        if (response.data.code === "1000") {
          setCol(response.data.coloum);
          setRows(response.data.value);
        }
        if (response.data.code === "1001") {
          setCol([]);
          setRows([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log("error=>", error);
        setLoading(false);
      });
  }, [storeCode]);

  return (
    <>
      {loading === true && <Loader />}
      <TopHeader />
      <div className="ComponentL3LowerHeader">
        <div className="d-flex mx-2 w-100">
          <Tippy content="Home">
            <Link to="/Indent-express/direction/home">
              <BsFillHouseDoorFill size={25} className="mt-2 text-dark" />
            </Link>
          </Tippy>
          <Tippy content="Status Report">
            <Link to="/Indent-express/L3/status/reports">
              <BsFillBarChartFill size={25} className="mt-2 mx-3 text-dark" />
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
            <span className="badge">{rows.length}</span>
          </Link>
        </div>
      </div>
      {rows.length > 0 && (
        <div className="mx-2 my-3">
          <CardTableList col={cols} rows={rows} />
        </div>
      )}
    </>
  );
};

export default YourProductsCart;
