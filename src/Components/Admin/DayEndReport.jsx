/** @format */
import React, { useState } from "react";
import TopHeader from "../../Common/TopHeader";
import AdminSideBar from "./AdminSideBar";
import AdiminFileSideBar from "./AdiminFileSideBar";
import { endDayReportLevel, parametreOptions } from "../../Data/DataList";
import axios from "axios";
import { HOST_URL } from "../../API/HotMaster";

const DayEndReport = () => {
  const [levelvalue, setLevelvalue] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [parameter, setParameter] = useState("");

  const GetEndDayReports = () => {
    const endDayReports = `?fromDate=${fromDate}&level=${levelvalue}&toDate=${toDate}`;
    console.log("endDayReports==>", endDayReports);
    console.log("URL==>", `${HOST_URL}/${endDayReports}`);
    if (levelvalue && fromDate && toDate) {
      axios
        .get(`${HOST_URL}/${endDayReports}`)
        .then((res) => res)
        .then((response) => console.log("response==>", response.data))
        .catch((error) => console.log("error=>", error));
    } else {
      alert("Please Select Valide Level & Date");
    }
  };

  const GetParameterReports = () => {
    if (levelvalue && parameter) {
      console.log("levelvalue==>", levelvalue);
      console.log("parameter==>", parameter);
    } else {
      alert("Please Select Valide Level & Parametere");
    }
  };
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
              <option value=''>Select Level</option>
              {endDayReportLevel.map((item, i) => {
                return <option key={item.value}>{item.lebel}</option>;
              })}
            </select>
          </div>
          {levelvalue === "HitRate Report" ? (
            <div className='col-md-6'>
              <b className='p-1'>Parameter</b>
              <select
                type='text'
                className='DateSelect'
                onChange={(e) => setParameter(e.target.value)}>
                <option value=''>Select Parameter</option>
                {parametreOptions.map((item, i) => {
                  return <option key={item.value}>{item.lebel}</option>;
                })}
              </select>
            </div>
          ) : (
            <>
              <div className='col-md-4'>
                <b className='p-1'>From Date</b>
                <input
                  type='date'
                  className='DateSelect'
                  onChange={(e) => setFromDate(e.target.value)}
                />
              </div>
              <div className='col-md-4'>
                <b className='p-1'>To Date</b>
                <input
                  type='date'
                  className='DateSelect'
                  onChange={(e) => setToDate(e.target.value)}
                />
              </div>
            </>
          )}
          <div className='d-flex justify-content-end mt-3'>
            {levelvalue === "HitRate Report" ? (
              <button
                type='submit'
                className='ACommonBTN'
                onClick={GetParameterReports}>
                GENERATE
              </button>
            ) : (
              <button
                type='submit'
                className='ACommonBTN'
                onClick={GetEndDayReports}>
                GENERATE REPORTS
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayEndReport;
