/** @format */

import React from "react";
import TopHeader from "../../Common/TopHeader";
import AdminSideBar from "./AdminSideBar";
import AdiminFileSideBar from "./AdiminFileSideBar";
import { Field, Form, Formik } from "formik";
import {
  loginCredentialsInitialValue,
  loginCredentialsSchema,
} from "../../Schema/LoginSchema";
import ShowError from "../../Schema/ShowError";
// import axios from "axios";
// import { HOST_URL } from "../../API/HotMaster";

const LoginCredentials = () => {
  const GetLoginCredential = (payload) => {
    console.log("payload===>", payload);
    // const { level } = payload;
    // axios.get(`${HOST_URL}/`);
  };
  return (
    <div>
      <TopHeader />
      <div className='DropdownForAdmin'>
        <AdminSideBar />
      </div>
      <AdiminFileSideBar />
      <div className='main'>
        <Formik
          initialValues={loginCredentialsInitialValue}
          validationSchema={loginCredentialsSchema}
          onSubmit={(payload) => GetLoginCredential(payload)}>
          <Form>
            <h5 className='text-center mt-2'>LOGIN CREDENTIALS</h5>
            <div className='row d-flex mt-2 mx-1'>
              <div className='col-md-9'>
                <b className='p-1'>Level</b>
                <Field as='select' className='DateSelect' name='level'>
                  <option value=''>Select Level</option>
                  <option value='L1'>L1</option>
                  <option value='L2'>L2</option>
                  <option value='L3'>L3</option>
                </Field>
                <ShowError name='level' />
              </div>
              <div className='col-md-3'>
                <div className='d-flex justify-content-end mt-3'>
                  <button type='submit' className='ACommonBTN'>
                    FETCH CREDENTIALS
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginCredentials;
