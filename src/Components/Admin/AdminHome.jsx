/* eslint-disable react-hooks/exhaustive-deps */
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
import Loader from "../../Common/Loader";
import swal from "sweetalert";

const AdminHome = () => {
  const [fromDate, setFromDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [fromStoreCode, setFromStoreCode] = useState([]);
  const [toStoreCode, setToStoreCode] = useState([]);
  useEffect(() => {
    if (fromDate) {
      setLoading(true);
      axios
        .get(`${HOST_URL}/INDENTADMIN/express/from/store/list/${fromDate}`)
        .then((res) => res)
        .then((response) => {
          if (response.data.code === "1000") {
            setFromStoreCode(response.data.value);
          }
          if (response.data.code === "1001") {
            alert("Please Select Valid Date");
          }
          setLoading(false);
        })
        .catch((error) => {
          console.log("");
          setLoading(false);
        });
    }
  }, [fromDate]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${HOST_URL}/INDENTADMIN/express/to/store/list`)
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          setToStoreCode(response.data.value);
        }
        if (response.data.code === "1001") {
          setToStoreCode([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log("");
        setLoading(false);
      });
  }, []);

  const CopyStorCode = (payload) => {
    setLoading(true);
    const { fromStoreCode, toStoreCode } = payload;
    axios
      .get(
        `${HOST_URL}/INDENTADMIN/express/store/response/copy/${fromStoreCode}/${toStoreCode}`
      )
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          swal({
            title: "COPIED",
            text: response.data.value,
            icon: "success",
            buttons: "OK",
          });
        }
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
        <AdminSideBar />
      </div>
      <AdiminFileSideBar />
      <div className="main">
        <Formik
          initialValues={CopyStoreInitialValue}
          validationSchema={CopyStoreSchema}
          onSubmit={(payload) => CopyStorCode(payload)}
        >
          <Form className="row g-3 mt-2 mx-1">
            <h5 className="text-center mt-2">COPY STORE INDENTS</h5>
            <div className="col-md-4">
              <b className="p-1">
                From Date<span className="text-danger">*</span>
              </b>
              <input
                type="date"
                className="DateSelect"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <b className="p-1">
                From Store Code<span className="text-danger">*</span>
              </b>
              <Field className="DateSelect" as="select" name="fromStoreCode">
                <option value="">Select From Store Code </option>
                {fromStoreCode.map((item, i) => {
                  return (
                    <option key={i} value={item.strCode}>
                      {item.strCode}
                    </option>
                  );
                })}
              </Field>
              <ShowError name="fromStoreCode" />
            </div>
            <div className="col-md-4">
              <b className="p-1">
                To Store Code<span className="text-danger">*</span>
              </b>
              <Field className="DateSelect" as="select" name="toStoreCode">
                <option value="">Select To Store Code</option>
                {toStoreCode.map((item, i) => {
                  return (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  );
                })}
              </Field>
              <ShowError name="toStoreCode" />
            </div>
            <div className="d-flex justify-content-end mt-3">
              <button type="submit" className="ACommonBTN">
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
