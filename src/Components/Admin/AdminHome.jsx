/** @format */

import React from "react";
import TopHeader from "../../Common/TopHeader";
import AdminSideBar from "./AdminSideBar";
import "../../Style/AdminHome.css";
import AdiminFileSideBar from "./AdiminFileSideBar";

const AdminHome = () => {
  return (
    <div>
      <TopHeader />
      <div className='DropdownForAdmin'>
        <AdminSideBar />
      </div>
      <AdiminFileSideBar />
      <div className='main'>
        <h5 className='text-center mt-2'>COPY STORE INDENTS</h5>
        <div className='row g-3 mt-2 mx-1'>
          <div className='col-md-4'>
            <b className='p-1'>Choose Date</b>
            <input
              type='date'
              className='DateSelect'
              placeholder='select date'
            />
          </div>
          <div className='col-md-4'>
            <b className='p-1'>From Store Code</b>
            <input className='AInpute' placeholder='From Store Code' />
          </div>
          <div className='col-md-4'>
            <b className='p-1'>To Store Code</b>
            <input className='AInpute' placeholder='To Store Code' />
          </div>
        </div>
        <div className='d-flex justify-content-end mt-3 mx-2'>
          <button type='submit' className='ACommonBTN'>
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
