import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../Style/Login.css";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { LoginInitialValue, LoginSchema } from "../../Schema/LoginSchema";
import ShowError from "../../Schema/ShowError";
import image from "../../Asset/Img/Tanishq_Logo1.png";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { HOST_URL } from "../../API/HotMaster";
import swal from "sweetalert";

const Login = (props) => {
  const { showAlert } = props;
  const [passwordShown, setPasswordShown] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onLogin = (payload) => {
    setLoading(true);
    const LoginData = {
      role: "",
      status: "",
      validInvalid: "",
    };
    const inputData = { ...payload, ...LoginData };
    axios
      .post(`${HOST_URL}/INDENT/express/user/login`, inputData)
      .then((response) => {
        if (response.data.code === "1000") {
          if (response.data.value.status === "open") {
            if (
              response.data.value.role === "L1" ||
              response.data.value.role === "L2" ||
              response.data.value.role === "L3"
            ) {
              localStorage.setItem(
                "indent-expressId",
                response.data.value.userID
              );
              localStorage.setItem(
                "indent-expressRole",
                response.data.value.role
              );
              navigate("/Indent-express/direction/home");
            }
            if (response.data.value.role === "Admin") {
              localStorage.setItem(
                "indent-expressId",
                response.data.value.role
              );
              navigate("/Indent-express/admin/home");
            }
          } else if (response.data.value.status === "close") {
            if (response.data.value.status === "close") {
              swal({
                title: "Closed",
                text: "Portal Is Closed",
                icon: "error",
                buttons: "OK",
              });
            }
          }
        } else if (response.data.code === "1001") {
          showAlert("Please enter valid Username and Password!", "danger");
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        showAlert("Please Enter valid Username and Password!", "danger");
      });
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div>
      <div className="row mx-0 loginPageStyle">
        <div className="col-8 RegisterLeftRight" />
        <div className="col-4 Form_style">
          <div className="text-center" style={{ color: "#832729" }}>
            <img src={image} alt="tanishq" height="60" width="70" />
          </div>
          <Formik
            initialValues={LoginInitialValue}
            validationSchema={LoginSchema}
            onSubmit={(payload) => onLogin(payload)}
          >
            <div className="w-100">
              <div className="wrapper">
                <div className="box">
                  <div>TANISHQ</div>
                  <div>TANISHQ</div>
                  <div>TANISHQ</div>
                  <div>TANISHQ</div>
                  <div>TANISHQ</div>
                  <div>TANISHQ</div>
                  <div>TANISHQ</div>
                  <div>TANISHQ</div>
                  <div>TANISHQ</div>
                  <div>TANISHQ</div>
                </div>
              </div>
              <Form className="w-100">
                <div className="my-1">
                  <b>
                    Username <span className="text-danger"> *</span>
                  </b>
                  <Field
                    placeholder="Username"
                    name="userID"
                    className="GInput"
                    type="text"
                  />
                  <ShowError name="userID" />
                </div>
                <div className="my-2">
                  <b>
                    Password <span className="text-danger"> *</span>
                  </b>
                  <div className="d-flex">
                    <Field
                      type={passwordShown ? "text" : "password"}
                      placeholder="Password"
                      className="GInput"
                      name="password"
                    />
                    <span className="border-bottom">
                      {passwordShown ? (
                        <FaRegEye
                          size={20}
                          cursor="pointer"
                          onClick={togglePassword}
                          style={{ marginTop: 15 }}
                        />
                      ) : (
                        <FaRegEyeSlash
                          size={20}
                          cursor="pointer"
                          onClick={togglePassword}
                          style={{ marginTop: 15 }}
                        />
                      )}
                    </span>
                  </div>
                  <ShowError name="password" />
                </div>
                <div className="my-2">
                  <b>
                    RSO Name <span className="text-danger"> *</span>
                  </b>
                  <Field
                    placeholder="RSO Name"
                    className="GInput"
                    name="region"
                  />
                  <ShowError name="region" />
                </div>
                <div className="d-flex justify-content-end">
                  <button type="submit" className="CButton">
                    {loading ? (
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      />
                    ) : (
                      <span className="sr-only">LOGIN</span>
                    )}
                  </button>
                </div>
              </Form>
            </div>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
