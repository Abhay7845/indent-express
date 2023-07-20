/** @format */

import React from "react";
import TopHeader from "../../Common/TopHeader";
import AdminSideBar from "./AdminSideBar";
import AdiminFileSideBar from "./AdiminFileSideBar";

const LoginCredentials = () => {
  return (
    <div>
      <TopHeader />
      <div className='DropdownForAdmin'>
        <AdminSideBar />
      </div>
      <AdiminFileSideBar />
      <div className='main'>
        <h5 className='text-center mt-2'>LOGIN CREDENTIALS</h5>
        <div className='row d-flex mt-2 mx-1 justify-content-center'>
          <div className='col-md-6 mx-1'>
            <b className='p-1'>Level</b>
            <select className='DateSelect'>
              <option>Select Level</option>
              <option>L1</option>
              <option>L2</option>
              <option>L3</option>
            </select>
            <div className='d-flex justify-content-end mt-3'>
              <button type='submit' className='ACommonBTN'>
                FECH CREDENTIALS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCredentials;
