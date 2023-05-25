/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import TopHeader from "../../Common/TopHeader";
import Loader from "../../Common/Loader";
import "../../Style/FeedbackFormL1L2.css";
import SideBar from "../../Common/SideBar";
import { L1L2HeadingData, NoReasonOption } from "../../Data/DataList";
import * as Icon from "react-bootstrap-icons";
import TablePagination from "@mui/material/TablePagination";
import axios from "axios";
import { Select } from "antd";
import { HostManager } from "../../APIList/HotMaster";
import swal from "sweetalert";

const ReportsL1L2 = (props) => {
  const { showAlert } = props;
  const [switchData, setSwitchData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [submitted, setSubmitted] = useState("scanned");
  const [reports, setReports] = useState({});
  const [reportsTable, setReportsTable] = useState([]);
  const [quality_Reasons, setQuality_Reasons] = useState([]);
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
        `${HostManager.reportsL1L2}/INDENT/express/${submitted}/report/L1/${storeCode}`
      )
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          setReportsTable(response.data.value);
        } else if (response.data.code === "1001") {
          showAlert("Data Not Found", "danger");
        }
        setLoading(false);
      })
      .catch((error) => console.log("error==>", error));
  }, [submitted, storeCode, reports.id]);

  const UpdateGetProductsDetails = () => {
    if (switchData && quality_Reasons.length === 0) {
      alert("Please Select For No Reason");
    } else {
      setLoadingSubmit(true);
      const getProductInputData = {
        id: reports.id,
        strCode: storeCode,
        consumerBase: reports.consumerBase,
        collection: reports.collection,
        itGroup: reports.itGroup,
        category: reports.category,
        itemCode: reports.itemCode,
        catPB: reports.catPB,
        stdWt: reports.stdWt,
        stdUCP: reports.stdUCP,
        activity: reports.activity,
        complexity: reports.complexity,
        si2Gh: reports.si2Gh,
        vsGh: reports.vsGh,
        vvs1: reports.vvs1,
        i2Gh: reports.i2Gh,
        si2Ij: reports.si2Ij,
        shape: reports.shape,
        gender: reports.gender,
        videoLink: reports.videoLink,
        childNodesN: reports.childNodesN,
        childNodesE: reports.childNodesE,
        region: reports.region,
        diamondWt: reports.diamondWt,
        colourWt: reports.colourWt,
        metalWt: reports.metalWt,
        findings: reports.findings,
        metalColor: reports.metalColor,
        parentItemCode: reports.parentItemCode,
        itemLevelType: reports.itemLevelType,
        childNodeV: reports.childNodeV,
        childNodeK: reports.childNodeK,
        childNodeH: reports.childNodeH,
        karatageRange: reports.karatageRange,
        childNodeF: reports.childNodeF,
        childNodeO: reports.childNodeO,
        npimEventNo: reports.npimEventNo,
        rsoName: reports.rsoName,
        doe: reports.doe,
        saleable: !switchData ? "YES" : "NO",
        size: reports.size,
        uom: reports.uom,
        reasons: quality_Reasons.toString(),
        indQty: reports.indQty,
        indCategory: reports.indCategory,
        submitStatus: reports.submitStatus,
        set2Type: reports.set2Type,
        stoneQuality: reports.stoneQuality,
        stoneQualityVal: reports.stoneQualityVal,
        scannedCount: reports.scannedCount,
        unscannedCount: reports.unscannedCount,
        adVariant: reports.adVariant,
        stdWtN: reports.stdWtN,
        stdUcpN: reports.stdUcpN,
        stdWtE: reports.stdWtE,
        stdUcpE: reports.stdUcpE,
        stdWtV: reports.stdWtV,
        stdUcpV: reports.stdUcpV,
        stdWtK: reports.stdWtK,
        stdUcpK: reports.stdUcpK,
        stdWtH: reports.stdWtH,
        stdUcpH: reports.stdUcpH,
        stdWtO: reports.stdWtO,
        stdUcpO: reports.stdUcpO,
        stdWtF: reports.stdWtF,
        stdUcpF: reports.stdUcpF,
        btqCount: reports.btqCount,
        quality_Rating: reports.quality_Rating,
        quality_Reasons: reports.quality_Reasons,
        indentLevelType: reports.indentLevelType,
      };

      axios
        .post(
          `${HostManager.reportsL1L2}/INDENTL3/express/update/responses`,
          getProductInputData
        )
        .then((res) => res)
        .then((response) => {
          if (response.data.code === "1000") {
            setQuality_Reasons([]);
            setReports({});
            swal({
              title: "Success!",
              text: "Your Data Has been Updated Successfully",
              icon: "success",
              buttons: "OK",
            });
          }
          if (response.data.code === "1001") {
            swal({
              title: "Sorry!",
              text: "Sorry! Not Data Not Updated",
              icon: "danger",
              buttons: "OK",
            });
          }
          setLoadingSubmit(false);
        })
        .catch((error) => {
          console.log("error==>", error);
          setQuality_Reasons([]);
          setLoadingSubmit(false);
        });
    }
  };
  const imageCode = !reports.itemCode ? "" : reports.itemCode.substring(2, 9);
  const imageURL = `https://jewbridge.titanjew.in/CatalogImages/api/ImageFetch/?Type=ProductImages&ImageName=${imageCode}.jpg`;

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
              <option value="scanned">SUBMITTED</option>
              <option value="unscanned">YET TO SUBMITTED</option>
            </select>
          </div>
        </div>
      </div>
      {/* REPORTS FORM */}
      {reports.id === undefined ? (
        ""
      ) : (
        <div className="row row-cols-1 row-cols-md-2 mx-1 my-3">
          <div className="col">
            <img
              src={imageURL}
              className="w-100 img-thumbnail"
              alt="Image_Unavailable"
            />
          </div>
          <div className="col">
            <div className="card-body">
              <h5
                className="text-center p-1 itemCodeText"
                style={{ backgroundColor: "#f5ea84" }}
              >
                {reports.itemCode}
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
                      <Select
                        className="NoReasonSelect"
                        mode="multiple"
                        value={quality_Reasons}
                        placeholder="Please select"
                        options={NoReasonOption}
                        onChange={setQuality_Reasons}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="mt-4">
                <button className="CButton" onClick={UpdateGetProductsDetails}>
                  {loadingSubmit ? (
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    />
                  ) : (
                    <span className="sr-only">SUBMIT</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <br />
      {reportsTable.length > 0 && (
        <div className="table-responsive mx-1">
          <b className="mx-1 my-3 text-secondary">
            {submitted === "scanned" ? "SUBMITTED" : "YET TO SUBMITTED"}
          </b>
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
                  const { itemCode } = item;
                  const imageCode = !itemCode ? "" : itemCode.substring(2, 9);
                  const imageURL = `https://jewbridge.titanjew.in/CatalogImages/api/ImageFetch/?Type=ProductImages&ImageName=${imageCode}.jpg`;
                  return (
                    <tr key={i} className="tableRowData">
                      <td>{item.id}</td>
                      <td className="text-center">
                        <img
                          src={imageURL}
                          width="70"
                          height="70"
                          className="img-thumbnail"
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
