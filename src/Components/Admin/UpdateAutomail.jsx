import React, { useState } from "react";
import TopHeader from "../../Common/TopHeader";
import AdminSideBar from "./AdminSideBar";
import AdiminFileSideBar from "./AdiminFileSideBar";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import ShowError from "../../Schema/ShowError";
import { updateAutomail, updateAutomailSchema } from "../../Schema/LoginSchema";
import { HOST_URL } from "../../API/HotMaster";
import swal from "sweetalert";

import Loader from "../../Common/Loader";

const UpdateAutomail = () => {
  const [loading, setLoading] = useState(false);
  const UpdatedAutoMail = (payload) => {
    setLoading(true);
    axios
      .post(
        `${HOST_URL}/INDENTADMIN/express/insert/auto/mailer/content`,
        payload
      )
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          swal({
            title: "INSERTED",
            text: response.data.value,
            icon: "success",
            buttons: "OK",
          });
        }
        if (response.data.code === "1001") {
          swal({
            title: "Not Inserted",
            text: response.data.value,
            icon: "error",
            buttons: "OK",
          });
        }
        setLoading(false);
      })
      .then((error) => {
        console.log("errro=>", error);
        setLoading(false);
      });
  };
  return (
    <div>
      {loading === true && <Loader />}
      <TopHeader />
      <div className="DropdownForAdmin">
        <AdminSideBar />
      </div>
      <AdiminFileSideBar />
      <div className="main">
        <Formik
          initialValues={updateAutomail}
          validationSchema={updateAutomailSchema}
          onSubmit={(payload, { resetForm }) => {
            UpdatedAutoMail(payload);
            resetForm();
          }}
        >
          <Form className="row g-3 mt-2 mx-1">
            <h5 className="text-center mt-2">COPY STORE INDENTS</h5>
            <div className="col-md-6">
              <b className="p-1">
                Email<span className="text-danger">*</span>
              </b>
              <Field
                type="email"
                name="fromMailId"
                className="AInpute"
                placeholder="Email"
              />
              <ShowError name="fromMailId" />
            </div>
            <div className="col-md-6">
              <b className="p-1">
                Subject<span className="text-danger">*</span>
              </b>
              <Field
                className="AInpute"
                placeholder="Subject"
                name="mailSubject"
              />
              <ShowError name="mailSubject" />
            </div>
            <div className="col-md-12">
              <b className="p-1">
                Mail Body<span className="text-danger">*</span>
              </b>
              <Field
                className="AInpute"
                placeholder="Message"
                name="mailBody"
                component="textarea"
              />
              <ShowError name="mailBody" />
            </div>
            <div className="d-flex justify-content-end mt-3">
              <button type="submit" className="ACommonBTN">
                SAVE
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default UpdateAutomail;
