/* eslint-disable no-useless-escape */
import * as yup from "yup";

export const LoginInitialValue = {
  userID: "",
  password: "",
  region: "",
};

export const LoginSchema = yup.object({
  userID: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
  region: yup.string().required("RSO Name Is required"),
});
