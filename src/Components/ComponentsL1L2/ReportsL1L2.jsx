import React, { useState } from "react";
import TopHeader from "../../Common/TopHeader";
// import Loader from "../../Common/Loader";
import "../../Style/FeedbackFormL1L2.css";
import SideBar from "../../Common/SideBar";
import { SubmittedOption } from "../../Data/DataList";

const ReportsL1L2 = () => {
  const [switchData, setSwitchData] = useState(false);

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
  return (
    <>
      <TopHeader />
      <div className="DropDownFormStyle">
        <SideBar />
        <div className="row mx-0 d-flex justify-content-between w-100">
          <div className="col-md-3">
            <select
              className="SSelect"
              //   onChange={(e) => setCategoryValue(e.target.value)}
            >
              <option>Select Category</option>
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
    </>
  );
};

export default ReportsL1L2;
