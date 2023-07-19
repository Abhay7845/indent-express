/** @format */
import React from "react";
import { Link } from "react-router-dom";

const AdiminFileSideBar = () => {
  return (
    <div>
      <div className='AdminSidebarStyle'>
        <ul className='mt-4'>
          <Link to='/Indent-express/admin/home' className='NavigationStyle'>
            COPY STORE INDENTS
          </Link>
          <hr />
          <Link
            to='/Indent-express/admin/master/file/upload'
            className='NavigationStyle'>
            MASTER FILE UPLOAD
          </Link>
          <hr />
          <Link
            to='/Indent-express/admin/update/tortal/status'
            className='NavigationStyle'>
            UPDATE PORTAL STATUS
          </Link>
          <hr />
          <Link
            to='/Indent-express/admin/get/master/sku'
            className='NavigationStyle'>
            GET MASTER SKU
          </Link>
          <hr />
        </ul>
      </div>
    </div>
  );
};

export default AdiminFileSideBar;
