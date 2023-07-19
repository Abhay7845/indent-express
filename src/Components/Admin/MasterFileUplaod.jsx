/** @format */

import React from "react";
import TopHeader from "../../Common/TopHeader";
import AdminSideBar from "./AdminSideBar";
import AdiminFileSideBar from "./AdiminFileSideBar";

const MasterFileUplaod = () => {
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
        <h5 className='text-center mt-2'>MASTER FILE UPLOAD</h5>
        <div className='row g-2 mt-2'>
          <div className='col'>
            <input
              type='text'
              className='form-control'
              placeholder='First name'
              aria-label='First name'
            />
          </div>
          <div className='col'>
            <input
              type='text'
              className='form-control'
              placeholder='Last name'
              aria-label='Last name'
            />
          </div>
          <div className='col'>
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

export default MasterFileUplaod;
