/** @format */

import React from "react";
import TopHeader from "../../Common/TopHeader";
import AdminSideBar from "./AdminSideBar";

const AdminHome = () => {
  return (
    <div>
      <TopHeader />
      <div className='DropdownForAdmin'>
        <div className='AdminSideBarStyle'>
          <AdminSideBar />
        </div>
      </div>
      <h2>Hello</h2>
    </div>
  );
};

export default AdminHome;
