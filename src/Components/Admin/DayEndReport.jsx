/** @format */

import React, { useState } from "react";
import TopHeader from "../../Common/TopHeader";
import AdminSideBar from "./AdminSideBar";
import AdiminFileSideBar from "./AdiminFileSideBar";
import { endDayReportLevel, parametreOptions } from "../../Data/DataList";

const DayEndReport = () => {
  const [levelvalue, setLevelvalue] = useState("");
  console.log("levelvalue==>", levelvalue);

  return (
    <div>
      <TopHeader />
      <div className='DropdownForAdmin'>
        <AdminSideBar />
      </div>
      <AdiminFileSideBar />
      <div className='main'>
        <h5 className='text-center mt-2'>DAY END REPORTS</h5>
        <div className='row g-3 mt-2 mx-1'>
          <div
            className={
              levelvalue === "HitRate Report" ? "col-md-6" : "col-md-4"
            }>
            <b className='p-1'>Level</b>
            <select
              type='text'
              className='DateSelect'
              onChange={(e) => setLevelvalue(e.target.value)}>
              <option value=''>Selct Level</option>
              {endDayReportLevel.map((item, i) => {
                return <option key={item.value}>{item.lebel}</option>;
              })}
            </select>
          </div>
          {levelvalue === "HitRate Report" ? (
            <div className='col-md-6'>
              <b className='p-1'>Parameter</b>
              <select type='text' className='DateSelect'>
                <option value=''>Selct Parameter</option>
                {parametreOptions.map((item, i) => {
                  return <option key={item.value}>{item.lebel}</option>;
                })}
              </select>
            </div>
          ) : (
            <>
              <div className='col-md-4'>
                <b className='p-1'>From Date</b>
                <input type='date' className='DateSelect' />
              </div>
              <div className='col-md-4'>
                <b className='p-1'>To Date</b>
                <input type='date' className='DateSelect' />
              </div>
            </>
          )}
          <div className='d-flex justify-content-end mt-3'>
            <button type='submit' className='ACommonBTN'>
              GENERATE REPORTS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayEndReport;
