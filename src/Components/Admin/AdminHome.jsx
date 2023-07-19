/** @format */

import React from "react";
import TopHeader from "../../Common/TopHeader";
import AdminSideBar from "./AdminSideBar";
import "../../Style/AdminHome.css";
import { Link } from "react-router-dom";

const AdminHome = () => {
  return (
    <div>
      <TopHeader />
      <div className='DropdownForAdmin'>
        <div className='AdminSideBarStyle'>
          <AdminSideBar />
        </div>
      </div>
      <div className='AdminSidebarStyle'>
        <ul className='text-center mt-4'>
          <Link to='/Indent-express/admin/home' className='NavigationStyle'>
            COPY STORE INDENTS
          </Link>
          <hr />
          <Link to='/Indent-express/admin' className='NavigationStyle'>
            MASTER FILE UPLOAD
          </Link>
          <hr />
        </ul>
      </div>
      <div className='main'>
        <h5 className='text-center mt-2'>COPY STORE INDENTS</h5>
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

export default AdminHome;
