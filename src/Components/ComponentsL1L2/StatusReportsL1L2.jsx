/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import TopHeader from "../../Common/TopHeader";
import SideBar from "../../Common/SideBar";
import { HostManager } from "../../APIList/HotMaster";
import axios from "axios";
import { L1L2StatusHeading } from "../../Data/DataList";
import TablePagination from "@mui/material/TablePagination";
import Loader from "../../Common/Loader";

const StatusReportsL1L2 = (props) => {
  const { showAlert } = props;
  const [loading, setLoading] = useState(false);
  const [statusData, setStatusData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const storeCode = localStorage.getItem("indent-expressId");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${HostManager.reportsL1L2}/npim/status/L1/${storeCode}`)
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          setStatusData(response.data.value);
          showAlert("Data Fetched Successfully", "success");
        } else if (response.data.code === "1001") {
          showAlert("Data Not Found", "danger");
        }
        setLoading(false);
      })
      .catch((error) => console.log("error==>", error));
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
    <>
      <TopHeader />
      <div className="DropDownFormStyle">
        <SideBar />
      </div>
      {loading === true ? <Loader /> : ""}
      <br />
      {statusData.length > 0 && (
        <div className="table-responsive mx-4 text-center">
          <table className="table table-hover table-bordered">
            <thead>
              <tr>
                {L1L2StatusHeading.map((item, i) => {
                  return (
                    <th key={i} className="tableHeading">
                      {item.label}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {TableData.map((item, i) => {
                return (
                  <tr key={i} className="tableRowData">
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
          <div className="d-flex justify-content-end my-2 w-100">
            <TablePagination
              rowsPerPageOptions={[50, 100, 150, TableData.length]}
              component="div"
              count={TableData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default StatusReportsL1L2;
