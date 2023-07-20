/** @format */

import React from "react";
import TopHeader from "../../Common/TopHeader";
import AdminSideBar from "./AdminSideBar";
import AdiminFileSideBar from "./AdiminFileSideBar";

const UpdatePortalStatus = () => {
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
        <h5 className='text-center mt-2'>UPDATE PORTAL STATUS</h5>
        <div className='row g-3 mt-2 mx-1'>
          <div className='col-md-6'>
            <b className='p-1'>Level</b>
            <select className='DateSelect'>
              <option>Select Level</option>
              <option>L1</option>
              <option>L2</option>
              <option>L3</option>
            </select>
          </div>
          <div className='col-md-6'>
            <b className='p-1'>Status</b>
            <select className='DateSelect'>
              <option>Select Status</option>
              <option>Open</option>
              <option>Close</option>
            </select>
          </div>
        </div>
        <div className='d-flex justify-content-end mt-3 mx-2'>
          <button type='submit' className='ACommonBTN'>
            UPDATE STATUS
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePortalStatus;
