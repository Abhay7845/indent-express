/** @format */

import React, { useState, useEffect } from "react";
import TopHeader from "../../Common/TopHeader";
import AdminSideBar from "./AdminSideBar";
import AdiminFileSideBar from "./AdiminFileSideBar";
import axios from "axios";
import { HOST_URL } from "../../API/HotMaster";
import Loader from "../../Common/Loader";

const GetMasterSKU = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${HOST_URL}/INDENTADMIN/express/get/sku/master`)
      .then((res) => res)
      .then((response) => console.log("response==>", response))
      .then((error) => console.log("error==>", error));
    setLoading(true);
  }, []);

  return (
    <div>
      {loading === true && <Loader />}
      <TopHeader />
      <div className='DropdownForAdmin'>
        <AdminSideBar />
      </div>
      <AdiminFileSideBar />
      <div className='main'>
        <h5 className='text-center mt-2'>GET MASTER SKU</h5>
      </div>
    </div>
  );
};

export default GetMasterSKU;
