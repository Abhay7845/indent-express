import React, { useState } from "react";
import TopHeader from "../../Common/TopHeader";
// import Loader from "../../Common/Loader";
import "../../Style/FeedbackFormL1L2.css";
import SideBar from "../../Common/SideBar";
import {
  L1L2HeadingData,
  NoReasonOption,
  SubmittedOption,
  tableData,
} from "../../Data/DataList";
import * as Icon from "react-bootstrap-icons";

const ReportsL1L2 = () => {
  const [switchData, setSwitchData] = useState(false);
  const [submitted, setSubmitted] = useState("submitted");
  const [reports, setReports] = useState({});

  const ChooseOption = SubmittedOption.map((element) => {
    return {
      value: element,
      label: element,
    };
  });
  const getTrueFalse = () => {
    if (!switchData) {
      setSwitchData(true);
    } else {
      setSwitchData(false);
    }
  };
  const EditReport = (reportData) => {
    setReports(reportData);
  };
  return (
    <>
      <TopHeader />
      <div className="DropDownFormStyle">
        <SideBar />
        <div className="row mx-0 d-flex justify-content-between w-100">
          <div className="col-md-3">
            <select
              className="SSelect"
              onChange={(e) => setSubmitted(e.target.value)}
            >
              {ChooseOption.map((item, i) => {
                return (
                  <option key={i} value={item.value}>
                    {item.name}
                    {item.label}
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
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKMK7ZskPypvRb4Ewsyw6U1NEI8sahKwM0g2AsAiv0qA&s"
              className="w-100"
              alt="No_Image"
            />
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
                          <td>HELLO1</td>
                        </tr>
                        <tr>
                          <th>NEED STATE</th>
                          <td>-</td>
                          <td>HELLO2</td>
                        </tr>
                        <tr>
                          <th>GROUP</th>
                          <td>-</td>
                          <td>HELLO3</td>
                        </tr>
                        <tr>
                          <th>CATEGORY</th>
                          <td>-</td>
                          <td>HELLO4</td>
                        </tr>
                        <tr>
                          <th>GENDER</th>
                          <td>-</td>
                          <td>HELLO5</td>
                        </tr>
                        <tr>
                          <th>COMPLEXITY</th>
                          <td>-</td>
                          <td>HELLO6</td>
                        </tr>
                        <tr>
                          <th>STD WT</th>
                          <td>-</td>
                          <td>HELLO7</td>
                        </tr>
                        <tr>
                          <th>STD UCP</th>
                          <td>-</td>
                          <td>HELLO8</td>
                        </tr>
                        <tr>
                          <th>METAL COLOR</th>
                          <td>-</td>
                          <td>HELLO9</td>
                        </tr>
                        <tr>
                          <th>FINDING</th>
                          <td>-</td>
                          <td>HELLO10</td>
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
                              {item.name}
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
      <div className="table-responsive mx-1">
        <b className="mx-1 my-3 text-secondary">{submitted.toUpperCase()}</b>
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              {L1L2HeadingData.map((item, i) => {
                return (
                  <th key={i} className="tableHeading">
                    {item.name}
                    {item.label}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, i) => {
              return (
                <tr key={i} className="tableRowData">
                  <td className="text-center">
                    <img
                      src={item.image}
                      width="70"
                      height="70"
                      alt="No_Image"
                    />
                  </td>
                  <td>{item.itemCode}</td>
                  <td>{item.itGroup}</td>
                  <td>{item.collection}</td>
                  <td>{item.needSate}</td>
                  <td>{item.itGroup}</td>
                  <td>{item.category}</td>
                  <td>{item.StdWt}</td>
                  <td>{item.StdUCP}</td>
                  <td>{item.saleable}</td>
                  <td>{item.qualityRating}</td>
                  <td>{item.qualityReason}</td>
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
      </div>
    </>
  );
};

export default ReportsL1L2;
