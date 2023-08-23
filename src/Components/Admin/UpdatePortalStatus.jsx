import React, { useState } from "react";
import TopHeader from "../../Common/TopHeader";
import AdminSideBar from "./AdminSideBar";
import AdiminFileSideBar from "./AdiminFileSideBar";
import { Field, Form, Formik } from "formik";
import {
  updatePortsalInitialValue,
  updatePortsalSchema,
} from "../../Schema/LoginSchema";
import ShowError from "../../Schema/ShowError";
import { LevelOptions, stausOptions } from "../../Data/DataList";
import axios from "axios";
import { HOST_URL } from "../../API/HotMaster";
import Loader from "../../Common/Loader";
import swal from "sweetalert";

const UpdatePortalStatus = () => {
  const [loading, setLoading] = useState(false);

  const UpdatePortalStaus = (payload) => {
    setLoading(true);
    axios
      .post(`${HOST_URL}/INDENTADMIN/express/open/portal`, payload)
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          swal({
            title: "UPDATED",
            text: response.data.value,
            icon: "success",
            buttons: "OK",
          });
        }
        setLoading(false);
      })
      .then((error) => {
        console.log("");
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
        <h5 className="text-center mt-2">UPDATE PORTAL STATUS</h5>
        <Formik
          initialValues={updatePortsalInitialValue}
          validationSchema={updatePortsalSchema}
          onSubmit={(payload) => UpdatePortalStaus(payload)}
        >
          <Form>
            <div className="row g-3 mt-2 mx-1">
              <div className="col-md-6">
                <b className="p-1">
                  Level<span className="text-danger">*</span>
                </b>
                <Field as="select" className="DateSelect" name="level">
                  <option value="">Select Level</option>
                  {LevelOptions.map((item, i) => {
                    return (
                      <option key={i} value={item.value}>
                        {item.lebel}
                      </option>
                    );
                  })}
                </Field>
                <ShowError name="level" />
              </div>
              <div className="col-md-6">
                <b className="p-1">
                  Status<span className="text-danger">*</span>
                </b>
                <Field as="select" className="DateSelect" name="mode">
                  <option value="">Select Status</option>
                  {stausOptions.map((item, i) => {
                    return (
                      <option key={i} value={item.value}>
                        {item.lebel}
                      </option>
                    );
                  })}
                </Field>
                <ShowError name="mode" />
              </div>
            </div>
            <div className="d-flex justify-content-end mt-3 mx-2">
              <button type="submit" className="ACommonBTN">
                UPDATE
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default UpdatePortalStatus;
