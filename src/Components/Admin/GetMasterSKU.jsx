/** @format */

import React from "react";
import TopHeader from "../../Common/TopHeader";
import AdminSideBar from "./AdminSideBar";
import AdiminFileSideBar from "./AdiminFileSideBar";

const GetMasterSKU = () => {
  return (
    <div>
      <TopHeader />
      <div className='DropdownForAdmin'>
        <AdminSideBar />
      </div>
      <AdiminFileSideBar />
      <div className='main'>
        <h5 className='text-center mt-2'>GET MASTER SKU</h5>
        <div className='d-flex justify-content-center mt-3 mx-2'>
          <button type='submit' className='ACommonBTN'>
            GET MASTERS
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetMasterSKU;
