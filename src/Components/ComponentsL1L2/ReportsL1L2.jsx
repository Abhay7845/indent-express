import React, { useState } from "react";
import TopHeader from "../../Common/TopHeader";
// import Loader from "../../Common/Loader";
import "../../Style/FeedbackFormL1L2.css";
import SideBar from "../../Common/SideBar";
import {
  L1L2HeadingData,
  SubmittedOption,
  tableData,
} from "../../Data/DataList";
import * as Icon from "react-bootstrap-icons";

const ReportsL1L2 = () => {
  const [switchData, setSwitchData] = useState(false);
  const [submitted, setSubmitted] = useState("submitted");
  //   const [tableData, setTableData] = useState([]);

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

  console.log("tableData==>", tableData);
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
                    <Icon.PencilSquare size={18} />
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
