/** @format */

import React from "react";
import TopHeader from "../../Common/TopHeader";
import AdminSideBar from "./AdminSideBar";
import AdiminFileSideBar from "./AdiminFileSideBar";
import { Field, Form, Formik } from "formik";
import {
  updatePortsalInitialValue,
  updatePortsalSchema,
} from "../../Schema/LoginSchema";
import ShowError from "../../Schema/ShowError";

const UpdatePortalStatus = () => {
  const UpdatePortalStaus = (payload) => {
    console.log("payload==>", payload);
  };
  return (
    <div>
      <TopHeader />
      <div className='DropdownForAdmin'>
        <div className='AdminSideBarStyle'>
          <AdminSideBar />
        </div>
      </div>
      <AdiminFileSideBar />
      <div className='main'>
        <h5 className='text-center mt-2'>UPDATE PORTAL STATUS</h5>
        <Formik
          initialValues={updatePortsalInitialValue}
          validationSchema={updatePortsalSchema}
          onSubmit={(payload) => UpdatePortalStaus(payload)}>
          <Form>
            <div className='row g-3 mt-2 mx-1'>
              <div className='col-md-6'>
                <b className='p-1'>Level</b>
                <Field as='select' className='DateSelect' name='level'>
                  <option>Select Level</option>
                  <option value='L1'>L1</option>
                  <option value='L2'>L2</option>
                  <option value='L3'>L3</option>
                </Field>
                <ShowError name='level' />
              </div>
              <div className='col-md-6'>
                <b className='p-1'>Status</b>

                <Field as='select' className='DateSelect' name='status'>
                  <option>Select Status</option>
                  <option value='open'>Open</option>
                  <option value='close'>Close</option>
                </Field>
                <ShowError name='status' />
              </div>
            </div>
            <div className='d-flex justify-content-end mt-3 mx-2'>
              <button type='submit' className='ACommonBTN'>
                UPDATE STATUS
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default UpdatePortalStatus;
