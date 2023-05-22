import React from "react";
import TopHeader from "../../Common/TopHeader";
import AdminSideBar from "./AdminSideBar";

const Admin = () => {
  return (
    <>
      <TopHeader />
      <div className="DropdownForAdmin">
        <div className="AdminSideBarStyle">
          <AdminSideBar />
        </div>
      </div>
    </>
  );
};

export default Admin;
