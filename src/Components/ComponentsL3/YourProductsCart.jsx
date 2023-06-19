import React, { useState, useEffect } from "react";
import {
  BsCartFill,
  BsFillBarChartFill,
  BsFillHouseDoorFill,
  BsJournalBookmarkFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import TopHeader from "../../Common/TopHeader";
// import * as Icon from "react-bootstrap-icons";
import Loader from "../../Common/Loader";
import TableForAll from "../../Common/TableForAll";
import { HostManager } from "../../APIList/HotMaster";

const YourProductsCart = () => {
  // const [itemWiseValue, setItemWiseValue] = useState("item_wise_reports");
  const storeCode = localStorage.getItem("indent-expressId");
  const [cols, setCol] = useState([]);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${HostManager.reportsL1L2}/INDENTL3/express/item/wise/rpt/L3/${storeCode}`
      )
      .then((res) => res)
      .then((response) => {
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
      {loading === true ? <Loader /> : ""}
      <TopHeader />
      <div className="ComponentL3LowerHeader">
        <div className="d-flex mx-2 w-100">
          <Link to="/Indent-express/direction/home">
            <BsFillHouseDoorFill size={25} className="mt-2 text-dark" />
          </Link>
          <Link to="/Indent-express/L3/status/reports">
            <BsFillBarChartFill size={25} className="mt-2 mx-3 text-dark" />
          </Link>
          <Link to="/Indent-express/L3/status/reports">
            <BsJournalBookmarkFill size={25} className="mt-2 text-dark" />
          </Link>
          {/* <div className="col-md-2 mx-2">
          <select
              className="SSelect"
              onChange={(e) => setItemWiseValue(e.target.value)}
            >
              {ItemWiseReportsDropdown.map((item, i) => {
                return (
                  <option key={i} value={item.value}>
                    {item.label}
                  </option>
                );
              })}
            </select> 
          </div> */}
        </div>
        <Link to="/Indent-express/L3/your/cart/reports">
          <BsCartFill size={25} className="mt-2 mx-2 text-dark" />
        </Link>
      </div>
      {rows.length > 0 && (
        <div className="mx-2 my-3">
          <TableForAll col={cols} rows={rows} />
        </div>
      )}
    </>
  );
};

export default YourProductsCart;
