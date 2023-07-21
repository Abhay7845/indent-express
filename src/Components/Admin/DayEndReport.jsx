/** @format */
import React, { useState } from "react";
import TopHeader from "../../Common/TopHeader";
import AdminSideBar from "./AdminSideBar";
import AdiminFileSideBar from "./AdiminFileSideBar";
import { endDayReportLevel, parametreOptions } from "../../Data/DataList";
import { HOST_URL } from "../../API/HotMaster";
import Loader from "../../Common/Loader";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
// import { HitrateCol } from "../../Data/DataList";
import TableDataDownload from "../../Common/TableDataDownload";

const DayEndReport = (props) => {
  const { showAlert } = props;
  const [levelvalue, setLevelvalue] = useState("");
  const [loading, setLoading] = useState(false);
  const [parameter, setParameter] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [rows, setRows] = useState([]);
  const [cols, setCols] = useState([]);

  const OnchageLevel = (e) => {
    setLevelvalue(e.target.value);
    setRows([]);
  };

  const GetEndDayReports = () => {
    const endDayReports = `?fromDate=${fromDate}&level=${levelvalue}&toDate=${toDate}`;
    if (levelvalue && fromDate && toDate) {
      setLoading(true);
      axios
        .get(`${HOST_URL}/INDENTADMIN/end/day/report/${endDayReports}`)
        .then((res) => res)
        .then((response) => {
          if (response.data.code === "1000") {
            setCols(response.data.coloum);
            setRows(response.data.value);
          }
          if (response.data.code === "1001") {
            showAlert("Data Not Available for Selected Date", "danger");
          }
          setLoading(false);
        })
        .catch((error) => {
          console.log("error=>", error);
          setLoading(false);
        });
    } else {
      alert("Please Select Valid Level & Date");
    }
  };

  const GetParameterReports = () => {
    if (levelvalue && parameter) {
      setLoading(true);
      axios
        .get(
          `${HOST_URL}/INDENT/express/scanned/report/L1/hit/rates/${parameter}`
        )
        .then((res) => res)
        .then((response) => {
          console.log("response==>", response.data);
          if (response.data.code === "1000") {
            setCols(response.data.coloum);
            setRows(response.data.value);
          }
          if (response.data.code === "1001") {
            showAlert(`Data Not Available For ${parameter}`, "danger");
          }
          setLoading(false);
        })
        .catch((error) => {
          console.log("error=>", error);
          setLoading(false);
        });
    } else {
      alert("Please Select Valid Level & Parametere");
    }
  };

  const columns = cols.map((element) => {
    return {
      field: element,
      flex: 1,
    };
  });

  return (
    <div>
      {loading === true && <Loader />}
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
            <select type='text' className='DateSelect' onChange={OnchageLevel}>
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
                GENERATE REPORTS
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
        {rows.length > 0 && (
          <div className='mx-2 my-4'>
            <DataGrid
              columns={columns}
              rows={rows}
              autoHeight={true}
              pageSize={50}
              components={{
                Toolbar: TableDataDownload,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DayEndReport;
