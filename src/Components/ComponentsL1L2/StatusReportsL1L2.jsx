/** @format */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import TopHeader from "../../Common/TopHeader";
import "../../Style/TopHeader.css";
import axios from "axios";
import Tippy from "@tippyjs/react";
import { HOST_URL } from "../../API/HotMaster";
import { L1L2StatusHeading } from "../../Data/DataList";
import Loader from "../../Common/Loader";
import { Link } from "react-router-dom";
import {
  BsFillBarChartFill,
  BsFillFileEarmarkPostFill,
  BsFillHouseDoorFill,
} from "react-icons/bs";

const StatusReportsL1L2 = (props) => {
  const { showAlert } = props;
  const [loading, setLoading] = useState(false);
  const [statusData, setStatusData] = useState([]);
  const storeCode = localStorage.getItem("indent-expressId");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${HOST_URL}/INDENT/express/status/L1/${storeCode}`)
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          setStatusData(response.data.value);
        } else if (response.data.code === "1001") {
          showAlert("Data Not Found", "danger");
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, [storeCode]);

  const TableData = statusData.map((item) => {
    return {
      id: item.id,
      consumerBase: item.consumerBase,
      totalSKU: item.totalSKU,
      saleable: item.saleable,
      notSaleable: item.notSaleable,
      remainingSKU: (
        parseInt(item.totalSKU) -
        parseInt(item.saleable) -
        parseInt(item.notSaleable)
      ).toString(),
    };
  });

  return (
    <div>
      {loading === true && <Loader />}
      <TopHeader />
      <div className="DropDownFormStyle">
        <div className="d-flex mx-3">
          <Tippy content="Home">
            <Link to="/Indent-express/direction/home">
              <BsFillHouseDoorFill size={25} className="my-2 text-dark" />
            </Link>
          </Tippy>
          <Tippy content="Report">
            <Link to="/Indent-express/L1/L2/products/reports">
              <BsFillFileEarmarkPostFill
                size={25}
                className="my-2 text-dark mx-3"
              />
            </Link>
          </Tippy>
          <Tippy content="Status Report">
            <Link to="/Indent-express/L1/L2/status/reports">
              <BsFillBarChartFill size={25} className="my-2 text-dark" />
            </Link>
          </Tippy>
        </div>
      </div>

      <br />
      {statusData.length > 0 && (
        <div className="table-responsive mx-4 text-center">
          <table className="table table-hover table-bordered">
            <thead>
              <tr>
                {L1L2StatusHeading.map((item, i) => {
                  return (
                    <th key={i} className="StatusTableHeading">
                      {item.label}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {TableData.map((item, i) => {
                return (
                  <tr key={i} className="StatusTableRowData">
                    <td>{item.id}</td>
                    <td>{item.consumerBase}</td>
                    <td>{item.totalSKU}</td>
                    <td>{item.saleable}</td>
                    <td>{item.notSaleable}</td>
                    <td>{item.remainingSKU}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StatusReportsL1L2;
