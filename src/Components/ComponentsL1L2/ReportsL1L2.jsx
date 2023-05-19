/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import TopHeader from "../../Common/TopHeader";
import Loader from "../../Common/Loader";
import "../../Style/FeedbackFormL1L2.css";
import SideBar from "../../Common/SideBar";
import {
  L1L2HeadingData,
  NoReasonOption,
  SubmittedOption,
} from "../../Data/DataList";
import * as Icon from "react-bootstrap-icons";
import TablePagination from "@mui/material/TablePagination";
import axios from "axios";
import { HostManager } from "../../APIList/HotMaster";

const ReportsL1L2 = (props) => {
  const { showAlert } = props;
  const [switchData, setSwitchData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState("scanned");
  const [reports, setReports] = useState({});
  const [reportsTable, setReportsTable] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const storeCode = localStorage.getItem("indent-expressId");

  const getTrueFalse = () => {
    if (!switchData) {
      setSwitchData(true);
    } else {
      setSwitchData(false);
    }
  };
  const EditReport = (reportData) => {
    setReports(reportData);
    window.scrollTo({ top: "0", behavior: "smooth" });
  };
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
      .get(
        `${HostManager.reportsL1L2}/npim/${submitted}/report/L1/${storeCode}`
      )
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          setReportsTable(response.data.value);
          showAlert("Data Fetched Successfully", "success");
        } else if (response.data.code === "1001") {
          showAlert("Data Not Found", "danger");
        }
        setLoading(false);
      })
      .catch((error) => console.log("error==>", error));
  }, [submitted, storeCode]);
  const ImageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKMK7ZskPypvRb4Ewsyw6U1NEI8sahKwM0g2AsAiv0qA&s";

  return (
    <>
      <TopHeader />
      <div className="DropDownFormStyle">
        <SideBar />
        {loading === true ? <Loader /> : ""}
        <div className="row mx-2 d-flex justify-content-between w-100">
          <div className="col-md-3">
            <select
              className="SSelect"
              onChange={(e) => setSubmitted(e.target.value)}
            >
              {SubmittedOption.map((item, i) => {
                return (
                  <option key={i} value={item.value}>
                    {item.value}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-md-3">
            <div className="form-switch my-2">
              <input
                className="form-check-input switchStyle"
                type="checkbox"
                onChange={getTrueFalse}
                disabled={!switchData}
              />
              <label className="mx-2">PRODUCT DESCRIPTION</label>
            </div>
          </div>
        </div>
      </div>
      {/* REPORTS FORM */}

      {reports.id === undefined ? (
        ""
      ) : (
        <div className="row row-cols-1 row-cols-md-2 mx-1 my-3">
          <div className="col">
            <img src={ImageUrl} className="w-100" alt="No_Image" />
          </div>
          <div className="col">
            <div className="card-body">
              <h5
                className="text-center p-1 itemCodeText"
                style={{ backgroundColor: "#f5ea84" }}
              >
                ITEM CODE
              </h5>
              <div className="row my-3">
                <div className="col-md-6">
                  <div>
                    <h6 className="text-center my-2">
                      <b>PRODUCT DETAILS</b>
                    </h6>
                    <br />
                    <table className="w-100">
                      <tbody className="productsDetailsStyle">
                        <tr>
                          <th>COLLECTION</th>
                          <td>- &nbsp;&nbsp;</td>
                          <td>{reports.collection}</td>
                        </tr>
                        <tr>
                          <th>NEED STATE</th>
                          <td>-</td>
                          <td>{reports.consumerBase}</td>
                        </tr>
                        <tr>
                          <th>GROUP</th>
                          <td>-</td>
                          <td>{reports.itGroup}</td>
                        </tr>
                        <tr>
                          <th>CATEGORY</th>
                          <td>-</td>
                          <td>{reports.category}</td>
                        </tr>
                        <tr>
                          <th>GENDER</th>
                          <td>-</td>
                          <td>{reports.gender}</td>
                        </tr>
                        <tr>
                          <th>COMPLEXITY</th>
                          <td>-</td>
                          <td>{reports.complexity}</td>
                        </tr>
                        <tr>
                          <th>STD WT</th>
                          <td>-</td>
                          <td>{reports.stdWt}</td>
                        </tr>
                        <tr>
                          <th>STD UCP</th>
                          <td>-</td>
                          <td>{reports.stdUCP}</td>
                        </tr>
                        <tr>
                          <th>METAL COLOR</th>
                          <td>-</td>
                          <td>{reports.metalColor}</td>
                        </tr>
                        <tr>
                          <th>FINDING</th>
                          <td>-</td>
                          <td>{reports.findings}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-md-6">
                  <h6 className="text-center my-2 feedBackText">
                    <b>FEEDBACK</b>
                  </h6>
                  <br />
                  <div className="form-switch d-flex justify-content-center">
                    <input
                      className="form-check-input switchStyle"
                      type="checkbox"
                      onChange={getTrueFalse}
                      checked={!switchData}
                    />
                    <label className="mx-2">
                      {switchData === true ? "NO" : "YES"}
                    </label>
                  </div>
                  {!switchData === false ? (
                    <div className="my-3">
                      <label>Choose Reason For NO</label>
                      <select className="SSelect">
                        <option>Select</option>
                        {NoReasonOption.map((item, i) => {
                          return (
                            <option key={i} value={item.value}>
                              {item.label}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="mt-4">
                <button className="CButton">SUBMIT</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <br />
      {reportsTable.length > 0 && (
        <div className="table-responsive mx-1">
          <b className="mx-1 my-3 text-secondary">{submitted.toUpperCase()}</b>
          <table className="table table-hover table-bordered">
            <thead>
              <tr>
                {L1L2HeadingData.map((item, i) => {
                  return (
                    <th key={i} className="tableHeading">
                      {item.label}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {reportsTable
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item, i) => {
                  return (
                    <tr key={i} className="tableRowData">
                      <td>{item.id}</td>
                      <td className="text-center">
                        <img
                          src={item.image}
                          width="70"
                          height="70"
                          alt="No_Image"
                        />
                      </td>
                      <td>{item.itemCode}</td>
                      <td>{item.collection}</td>
                      <td>{item.consumerBase}</td>
                      <td>{item.itGroup}</td>
                      <td>{item.category}</td>
                      <td>{item.stdWt}</td>
                      <td>{item.stdUCP}</td>
                      <td>{item.saleable}</td>
                      <td>{item.reasons}</td>
                      <td>{item.quality_Rating}</td>
                      <td>{item.quality_Reasons}</td>
                      <td className="text-center">
                        <Icon.PencilSquare
                          size={18}
                          cursor="pointer"
                          onClick={() => EditReport(item)}
                        />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div className="d-flex justify-content-end my-2 w-100">
            <TablePagination
              rowsPerPageOptions={[50, 100, 150, reportsTable.length]}
              component="div"
              count={reportsTable.length}
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

export default ReportsL1L2;
