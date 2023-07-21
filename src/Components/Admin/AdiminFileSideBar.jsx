/** @format */
import React from "react";
import { Link } from "react-router-dom";
import SideBarImage from "../../Asset/Img/Tanishq_Logo1.png";

const AdiminFileSideBar = () => {
  return (
    <div>
      <div className='AdminSidebarStyle'>
        <div className='text-center mt-2'>
          <img src={SideBarImage} alt='Logo' height='40' width='85' />
        </div>
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
          <Link
            to='/Indent-express/admin/login/credentials'
            className='NavigationStyle'>
            LOGIN CREDENTIALS
          </Link>
          <hr />
          <Link
            to='/Indent-express/admin/day/end/report'
            className='NavigationStyle'>
            DAY END REPORTS
          </Link>
          <hr />
          <Link
            to='/Indent-express/admin/update/automail'
            className='NavigationStyle'>
            UPDATE AUTOMAIL
          </Link>
          <hr />
        </ul>
      </div>
    </div>
  );
};

export default AdiminFileSideBar;
