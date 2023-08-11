import React, { useState } from "react";
import TopHeader from "../../Common/TopHeader";
import AdminSideBar from "./AdminSideBar";
import AdiminFileSideBar from "./AdiminFileSideBar";
import { excelsheetURL } from "../../API/HotMaster";
import { Field, Form, Formik } from "formik";
import { FileInitialValue, masterSchema } from "../../Schema/LoginSchema";
import ShowError from "../../Schema/ShowError";
import { HOST_URL } from "../../API/HotMaster";
import axios from "axios";
import Loader from "../../Common/Loader";

const MasterFileUplaod = () => {
  const [loading, setLoading] = useState(false);
  // ${HOST_URL}/INDENTADMIN/express/insert/sku/master`
  const UploadMasterFile = (payload) => {
    setLoading(true);
    const { masterFile } = payload;
    let formData = new FormData();
    formData.append("masterFile", masterFile);
    axios({
      method: "post",
      url: `${HOST_URL}/INDENTADMIN/express/insert/sku/master`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => res)
      .then((response) => console.log("response==>", response.data))
      .catch((error) => {
        console.log("error==>", error);
        setLoading(false);
      });
  };
  return (
    <div>
      {loading === true && <Loader />}
      <TopHeader />
      <div className="DropdownForAdmin">
        <div className="AdminSideBarStyle">
          <AdminSideBar />
        </div>
      </div>
      <AdiminFileSideBar />
      <div className="main">
        <h5 className="text-center mt-2">MASTER FILE UPLOAD</h5>
        <div className="text-danger mx-3 mt-3 text-justify">
          <h6 className="my-3">
            <b className="text-dark">1.</b>
            **Please make sure that GENDER column is not blank for Categories
            like BRACELET, COUPLE BAND, FINGER RING, ANKLETS, TOE RING,
            MANGALSUTRA, CHAIN & WAIST BELT.
          </h6>
          <h6>
            <b className="text-dark">2.</b> **Please make sure that GENDER &
            SHAPE column is not blank for BANGLE CATEGORY.
          </h6>
          <h6 className="my-3">
            <b className="text-dark">3.</b> **Please make sure that FINDINGS
            column is not blank for Categories like DROP EARRING JHUMKA, & STUD
            EARRING.
          </h6>
          <h6>
            <b className="text-dark">4.</b> **Please make sure that ChildNodes_N
            & ChildNodes_E column is not blank for Categories like SET0, SET1,
            SET2 & T-CATEGORY.
          </h6>
          <hr />
        </div>
        <div className="d-flex mt-2 mx-1 justify-content-center">
          <Formik
            initialValues={FileInitialValue}
            validationSchema={masterSchema}
            onSubmit={(payload) => UploadMasterFile(payload)}
          >
            <Form className="mx-1">
              <p>
                If you want to master SKU template then please click &nbsp;
                <a href={excelsheetURL} target="_blank" rel="noreferrer">
                  Master Template
                </a>
              </p>
              <b className="p-1">Master File</b>
              <Field type="file" className="DateSelect" name="masterFile" />
              <ShowError name="masterFile" />
              <div className="d-flex justify-content-end mt-3">
                <button type="submit" className="ACommonBTN">
                  UPLOAD
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default MasterFileUplaod;
