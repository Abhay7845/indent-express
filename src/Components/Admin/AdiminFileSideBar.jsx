/** @format */
import React from "react";
import { Link } from "react-router-dom";

const AdiminFileSideBar = () => {
  return (
    <div>
      <div className='AdminSidebarStyle'>
        <ul className='text-center mt-4'>
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
        </ul>
      </div>
    </div>
  );
};

export default AdiminFileSideBar;
