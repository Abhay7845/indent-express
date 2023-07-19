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
        <div className='AdminSideBarStyle'>
          <AdminSideBar />
        </div>
      </div>
      <AdiminFileSideBar />
      <div className='main'>
        <h5 className='text-center mt-2'>COPY STORE INDENTS</h5>
        <div className='row g-2 mt-2 mx-1'>
          <div className='col-md-4'>
            <input
              type='text'
              className='form-control'
              placeholder='First name'
              aria-label='First name'
            />
          </div>
          <div className='col-md-4'>
            <input
              type='text'
              className='form-control'
              placeholder='Last name'
              aria-label='Last name'
            />
          </div>
          <div className='col-md-4'>
            <input
              type='text'
              className='form-control'
              placeholder='Last name'
              aria-label='Last name'
            />
          </div>
        </div>
        <div className='d-flex justify-content-end mt-3'>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
