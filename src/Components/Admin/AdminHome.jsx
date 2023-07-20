/** @format */

import React, { useState, useEffect } from "react";
import TopHeader from "../../Common/TopHeader";
import AdminSideBar from "./AdminSideBar";
import "../../Style/AdminHome.css";
import AdiminFileSideBar from "./AdiminFileSideBar";
import { Formik, Form, Field } from "formik";
import {
  CopyStoreInitialValue,
  CopyStoreSchema,
} from "../../Schema/LoginSchema";
import ShowError from "../../Schema/ShowError";
import axios from "axios";
import { HOST_URL } from "../../API/HotMaster";
import moment from "moment/moment";

const AdminHome = () => {
  const [fromDate, setFromDate] = useState("");
  console.log("fromDate==>", fromDate);
  useEffect(() => {
    axios
      .get(`${HOST_URL}/INDENTADMIN/express/from/store/list/${fromDate}`)
      .then((res) => res)
      .then((response) => console.log("response==>", response.data))
      .catch((error) => console.log("error==>", error));
  }, [fromDate]);

  const CopyStorCode = (payload) => {
    console.log("fromDate==>", payload);
  };
  // console.log("data==>", moment(fromDate).format("mm/dd/yyyy"));
  return (
    <div>
      <TopHeader />
      <div className='DropdownForAdmin'>
        <AdminSideBar />
      </div>
      <AdiminFileSideBar />
      <div className='main'>
        <Formik
          initialValues={CopyStoreInitialValue}
          validationSchema={CopyStoreSchema}
          onSubmit={(payload) => CopyStorCode(payload)}>
          <Form className='row g-3 mt-2 mx-1'>
            <h5 className='text-center mt-2'>COPY STORE INDENTS</h5>
            <div className='col-md-4'>
              <b className='p-1'>From Date</b>
              <Field
                type='date'
                className='DateSelect'
                name='fromDate'
                value={moment(fromDate).format("YYYY-MM-DD")}
                onChange={(e) => setFromDate(e.target.value)}
              />
              <ShowError name='fromDate' />
            </div>
            <div className='col-md-4'>
              <b className='p-1'>From Store Code</b>
              <Field className='DateSelect' as='select' name='fromStoreCode'>
                <option value=''>Select From Store Code</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
              </Field>
              <ShowError name='fromStoreCode' />
            </div>
            <div className='col-md-4'>
              <b className='p-1'>To Store Code</b>
              <Field className='DateSelect' as='select' name='toStoreCode'>
                <option value=''>Select To Store Code</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
              </Field>
              <ShowError name='toStoreCode' />
            </div>
            <div className='d-flex justify-content-end mt-3'>
              <button type='submit' className='ACommonBTN'>
                COPY
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AdminHome;
