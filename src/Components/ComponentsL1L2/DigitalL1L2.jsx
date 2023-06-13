import React from "react";
import TopHeader from "../../Common/TopHeader";
import SideBar from "../../Common/SideBar";

const DigitalL1L2 = () => {
  return (
    <>
      <TopHeader />
      <div className="DropDownFormStyle">
        <SideBar />
        <div className="row mx-2 d-flex justify-content-between w-100">
          <div className="col-md-3">data</div>
        </div>
      </div>
      <p>DIGITAL PAGE</p>
    </>
  );
};

export default DigitalL1L2;
