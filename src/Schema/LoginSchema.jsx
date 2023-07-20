/**
 * eslint-disable no-useless-escape
 *
 * @format
 */

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

// ADMIN VALIDATION SCHEMA
export const CopyStoreInitialValue = {
  fromStoreCode: "",
  toStoreCode: "",
};

export const CopyStoreSchema = yup.object({
  fromStoreCode: yup.string().required("From Store Code is required"),
  toStoreCode: yup.string().required("To Store Code required"),
});

export const FileInitialValue = {
  masterFile: "",
};

export const masterSchema = yup.object({
  masterFile: yup.string().required("File is required"),
});

export const updatePortsalInitialValue = {
  level: "",
  status: "",
};

export const updatePortsalSchema = yup.object({
  level: yup.string().required("Level is required"),
  status: yup.string().required("Staus is required"),
});

export const loginCredentialsInitialValue = {
  level: "",
};

export const loginCredentialsSchema = yup.object({
  level: yup.string().required("Level is required"),
});
