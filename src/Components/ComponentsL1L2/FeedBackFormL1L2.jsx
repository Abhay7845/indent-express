/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import TopHeader from "../../Common/TopHeader";
import axios from "axios";
import { HostManager } from "../../APIList/HotMaster";
import Loader from "../../Common/Loader";
// import { BsSearch } from "react-icons/bs";
import { NoReasonOption } from "../../Data/DataList";
import "../../Style/FeedbackFormL1L2.css";
import SideBar from "../../Common/SideBar";
import * as Icon from "react-bootstrap-icons";
import { Select } from "antd";

export const FeedBackFormL1L2 = (props) => {
  const { showAlert } = props;
  const storeCode = localStorage.getItem("indent-expressId");
  const [loading, setLoading] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [loadingNext, setLoadingNext] = useState(false);
  const [loadingPre, setLoadingPre] = useState(false);
  const [colLection, setCollection] = useState([]);
  const [collectionValue, setCollectionValue] = useState("");
  const [needSate, setNeedSate] = useState([]);
  const [needStateValue, setNeedStateValue] = useState("");
  const [group, setGroup] = useState([]);
  const [groupValue, setGroupValue] = useState("");
  const [category, setCategory] = useState([]);
  const [categoryValue, setCategoryValue] = useState("");
  const [switchData, setSwitchData] = useState(false);
  const [quality_Reasons, setQuality_Reasons] = useState("");
  const [productsDetails, setProductsDetails] = useState([]);

  const GetProductsValues = {
    category: !categoryValue ? "ALL" : categoryValue,
    collection: !collectionValue ? "ALL" : collectionValue,
    consumerBase: !needStateValue ? "ALL" : needStateValue,
    group: !groupValue ? "ALL" : groupValue,
    itemCode: "",
    storeCode: storeCode,
  };

  //COLLECTION  DROPDOWN
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${HostManager.reportsL1L2}/INDENT/express/dropdown/ALL/ALL/ALL/ALL`)
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          setCollection(response.data.value);
        } else if (response.data.code === "1001") {
          showAlert("Data Not Found", "danger");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log("");
        setLoading(false);
      });
  }, [collectionValue, showAlert]);

  const collectionDropdown = colLection.map((element) => {
    return {
      value: element,
      label: element,
    };
  });

  //NEED STATE  DROPDOWN
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${HostManager.reportsL1L2}/INDENT/express/dropdown/${collectionValue}/ALL/ALL/ALL`
      )
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          setNeedSate(response.data.value);
        } else if (response.data.code === "1001") {
          showAlert("Data Not Found", "danger");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log("");
      });
  }, [collectionValue, showAlert]);

  const needSateDropdown = needSate.map((element) => {
    return {
      value: element,
      label: element,
    };
  });

  //GROUP  DROPDOWN
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${HostManager.reportsL1L2}/INDENT/express/dropdown/${collectionValue}/${needStateValue}/ALL/ALL`
      )
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          setGroup(response.data.value);
        } else if (response.data.code === "1001") {
          showAlert("Data Not Found", "danger");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log("");
      });
  }, [collectionValue, needStateValue, showAlert]);

  const GroupDropdown = group.map((element) => {
    return {
      value: element,
      label: element,
    };
  });

  //CATEGORY  DROPDOWN
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${HostManager.reportsL1L2}/INDENT/express/dropdown/${collectionValue}/${needStateValue}/${groupValue}/ALL`
      )
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          setCategory(response.data.value);
        } else if (response.data.code === "1001") {
          showAlert("Data Not Found", "danger");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log("");
      });
  }, [collectionValue, needStateValue, groupValue, showAlert]);

  const CategoryDropdown = category.map((element) => {
    return {
      value: element,
      label: element,
    };
  });

  useEffect(() => {
    setLoading(true);
    axios
      .post(
        `${HostManager.reportsL1L2}/INDENT/express/get/product/details`,
        GetProductsValues
      )
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          setProductsDetails(response.data.value);
        } else if (response.data.code === "1001") {
          showAlert("Data Not Found", "danger");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log("");
      });
  }, [
    GetProductsValues.category,
    GetProductsValues.collection,
    GetProductsValues.consumerBase,
    GetProductsValues.group,
    GetProductsValues.itemCode,
    GetProductsValues.itemCode,
  ]);

  // const GetProductsDetails = () => {
  //   setLoading(true);
  //   axios
  //     .post(
  //       `${HostManager.reportsL1L2}/INDENT/express/get/product/details`,
  //       GetProductsValues
  //     )
  //     .then((res) => res)
  //     .then((response) => {
  //       if (response.data.code === "1000") {
  //         setProductsDetails(response.data.value);
  //       } else if (response.data.code === "1001") {
  //         showAlert("Data Not Found", "danger");
  //       }
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log("");
  //     });
  // };

  const getTrueFalse = () => {
    if (!switchData) {
      setSwitchData(true);
    } else {
      setSwitchData(false);
    }
  };

  const SelectNoReasonValue = (value) => {
    const SelectNoReason = `${value}`;
    setQuality_Reasons(SelectNoReason);
  };

  // SUBMIT PRODUCT DETAILS API
  const SubmitProductDetails = () => {
    setLoadingSubmit(true);
    const getProductInputData = {
      id: productsDetails.id,
      strCode: storeCode,
      consumerBase: productsDetails.consumerBase,
      collection: productsDetails.collection,
      itGroup: productsDetails.itGroup,
      category: productsDetails.category,
      itemCode: productsDetails.itemCode,
      catPB: productsDetails.catPB,
      stdWt: productsDetails.stdWt,
      stdUCP: productsDetails.stdUCP,
      activity: productsDetails.activity,
      complexity: productsDetails.complexity,
      si2Gh: productsDetails.si2Gh,
      vsGh: productsDetails.vsGh,
      vvs1: productsDetails.vvs1,
      i2Gh: productsDetails.i2Gh,
      si2Ij: productsDetails.si2Ij,
      shape: productsDetails.shape,
      gender: productsDetails.gender,
      videoLink: productsDetails.videoLink,
      childNodesN: productsDetails.childNodesN,
      childNodesE: productsDetails.childNodesE,
      region: productsDetails.region,
      diamondWt: productsDetails.diamondWt,
      colourWt: productsDetails.colourWt,
      metalWt: productsDetails.metalWt,
      findings: productsDetails.findings,
      metalColor: productsDetails.metalColor,
      parentItemCode: productsDetails.parentItemCode,
      itemLevelType: productsDetails.itemLevelType,
      childNodeV: productsDetails.childNodeV,
      childNodeK: productsDetails.childNodeK,
      childNodeH: productsDetails.childNodeH,
      karatageRange: productsDetails.karatageRange,
      childNodeF: productsDetails.childNodeF,
      childNodeO: productsDetails.childNodeO,
      npimEventNo: productsDetails.npimEventNo,
      rsoName: productsDetails.rsoName,
      doe: productsDetails.doe,
      saleable: productsDetails.saleable,
      size: productsDetails.size,
      uom: productsDetails.uom,
      reasons: productsDetails.reasons,
      indQty: productsDetails.indQty,
      indCategory: productsDetails.indCategory,
      submitStatus: productsDetails.submitStatus,
      set2Type: productsDetails.set2Type,
      stoneQuality: productsDetails.stoneQuality,
      stoneQualityVal: productsDetails.stoneQualityVal,
      scannedCount: productsDetails.scannedCount,
      unscannedCount: productsDetails.unscannedCount,
      adVariant: productsDetails.adVariant,
      stdWtN: productsDetails.stdWtN,
      stdUcpN: productsDetails.stdUcpN,
      stdWtE: productsDetails.stdWtE,
      stdUcpE: productsDetails.stdUcpE,
      stdWtV: productsDetails.stdWtV,
      stdUcpV: productsDetails.stdUcpV,
      stdWtK: productsDetails.stdWtK,
      stdUcpK: productsDetails.stdUcpK,
      stdWtH: productsDetails.stdWtH,
      stdUcpH: productsDetails.stdUcpH,
      stdWtO: productsDetails.stdWtO,
      stdUcpO: productsDetails.stdUcpO,
      stdWtF: productsDetails.stdWtF,
      stdUcpF: productsDetails.stdUcpF,
      btqCount: productsDetails.btqCount,
      quality_Rating: productsDetails.quality_Rating,
      quality_Reasons: quality_Reasons,
      indentLevelType: productsDetails.indentLevelType,
    };
    axios
      .post(
        `${HostManager.reportsL1L2}/INDENT/express/insert/responses`,
        getProductInputData
      )
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          showAlert("Data has been Saved Successfully", "success");
        }
        if (response.data.code === "1001") {
          showAlert("Your Data is Not Submitted", "success");
        }
        setLoadingSubmit(false);
      })
      .catch((error) => {
        console.log("error==>", error);
        setLoadingSubmit(false);
      });
  };

  const GetPreviousProductDetails = (direction) => {
    setLoadingPre(true);
    const getPreviousProductDetails = {
      category: !categoryValue ? "ALL" : categoryValue,
      collection: !collectionValue ? "ALL" : collectionValue,
      consumerBase: !needStateValue ? "ALL" : needStateValue,
      group: !groupValue ? "ALL" : groupValue,
      itemCode: productsDetails.itemCode,
      storeCode: storeCode,
      direction: direction,
    };
    axios
      .post(
        `${HostManager.reportsL1L2}/INDENT/express/get/product/details/PreNex`,
        getPreviousProductDetails
      )
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          setProductsDetails(response.data.value);
        }
        setLoadingPre(false);
      })
      .catch((error) => {
        console.log("error==>", error);
        setLoadingPre(false);
      });
  };
  const GetNextProductDetails = (direction) => {
    setLoadingNext(true);
    const getNextProductDetails = {
      category: !categoryValue ? "ALL" : categoryValue,
      collection: !collectionValue ? "ALL" : collectionValue,
      consumerBase: !needStateValue ? "ALL" : needStateValue,
      group: !groupValue ? "ALL" : groupValue,
      itemCode: productsDetails.itemCode,
      storeCode: storeCode,
      direction: direction,
    };
    axios
      .post(
        `${HostManager.reportsL1L2}/INDENT/express/get/product/details/PreNex`,
        getNextProductDetails
      )
      .then((res) => res)
      .then((response) => {
        console.log("response==>", response);
        if (response.data.code === "1000") {
          setProductsDetails(response.data.value);
        }
        setLoadingNext(false);
      })
      .catch((error) => {
        console.log("error==>", error);
        setLoadingNext(false);
      });
  };

  return (
    <>
      <TopHeader />
      {loading === true ? <Loader /> : ""}
      <div className="DropDownFormStyle">
        <SideBar />
        <div className="row mx-0">
          <div className="col-md-3">
            <select
              className="SSelect"
              onChange={(e) => setCollectionValue(e.target.value)}
            >
              <option>Select Collection</option>
              {collectionDropdown.map((item, i) => {
                return (
                  <option key={i} value={item.value}>
                    {item.name}
                    {item.label}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-md-2">
            <select
              className="SSelect"
              onChange={(e) => setNeedStateValue(e.target.value)}
            >
              <option>Select NeedSate</option>
              {needSateDropdown.map((item, i) => {
                return (
                  <option key={i} value={item.value}>
                    {item.name}
                    {item.label}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-md-3">
            <select
              className="SSelect"
              onChange={(e) => setGroupValue(e.target.value)}
            >
              <option>Select Group</option>
              {GroupDropdown.map((item, i) => {
                return (
                  <option key={i} value={item.value}>
                    {item.label}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-md-3">
            <select
              className="SSelect"
              onChange={(e) => setCategoryValue(e.target.value)}
            >
              <option>Select Category</option>
              {CategoryDropdown.map((item, i) => {
                return (
                  <option key={i} value={item.value}>
                    {item.label}
                  </option>
                );
              })}
            </select>
          </div>
          {/* <div className="col-md-1 justify-content-end">
            <BsSearch
              size={35}
              className="searchStyle"
              onClick={GetProductsDetails}
            />
          </div> */}
        </div>
      </div>
      {/* FEED BACK FORM */}
      <div className="row row-cols-1 row-cols-md-2 mx-0 my-3">
        <div className="col">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKMK7ZskPypvRb4Ewsyw6U1NEI8sahKwM0g2AsAiv0qA&s"
            className="w-100"
            alt="No_Image"
          />
        </div>
        <div className="col">
          <div className="card-body">
            <h5
              className="text-center p-1 itemCodeText"
              style={{ backgroundColor: "#f5ea84" }}
            >
              {productsDetails.itemCode}
            </h5>
            <div className="row my-3">
              <div className="col-md-7">
                <div>
                  <h6 className="text-center my-2">
                    <b>PRODUCT DETAILS</b>
                  </h6>
                  <br />
                  <table className="w-100">
                    <tbody className="productsDetailsStyle">
                      <tr>
                        <th>COLLECTION</th>
                        <td>- &nbsp;&nbsp;</td>
                        <td>{productsDetails.collection}</td>
                      </tr>
                      <tr>
                        <th>NEED STATE</th>
                        <td>-</td>
                        <td>{productsDetails.consumerBase}</td>
                      </tr>
                      <tr>
                        <th>GROUP</th>
                        <td>-</td>
                        <td>{productsDetails.itGroup}</td>
                      </tr>
                      <tr>
                        <th>CATEGORY</th>
                        <td>-</td>
                        <td>{productsDetails.category}</td>
                      </tr>
                      <tr>
                        <th>GENDER</th>
                        <td>-</td>
                        <td>{productsDetails.gender}</td>
                      </tr>
                      <tr>
                        <th>COMPLEXITY</th>
                        <td>-</td>
                        <td>{productsDetails.complexity}</td>
                      </tr>
                      <tr>
                        <th>STD WT</th>
                        <td>-</td>
                        <td>{productsDetails.stdWt}</td>
                      </tr>
                      <tr>
                        <th>STD UCP</th>
                        <td>-</td>
                        <td>{productsDetails.stdUCP}</td>
                      </tr>
                      <tr>
                        <th>METAL COLOR</th>
                        <td>-</td>
                        <td>{productsDetails.metalColor}</td>
                      </tr>
                      <tr>
                        <th>FINDING</th>
                        <td>-</td>
                        <td>{productsDetails.findings}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-5">
                <h6 className="text-center my-2 feedBackText">
                  <b>FEEDBACK</b>
                </h6>
                <br />
                <div className="form-switch d-flex justify-content-center">
                  <input
                    className="form-check-input switchStyle"
                    type="checkbox"
                    onChange={getTrueFalse}
                    checked={!switchData}
                  />
                  <label className="mx-2">
                    {switchData === true ? "NO" : "YES"}
                  </label>
                </div>
                {!switchData === false ? (
                  <div className="my-3">
                    <label>Choose Reason For NO</label>
                    <Select
                      className="NoReasonSelect"
                      mode="multiple"
                      placeholder="Please select"
                      options={NoReasonOption}
                      onChange={SelectNoReasonValue}
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <br />
            <div className="d-flex justify-content-center mx-0">
              <button
                className="CButton"
                onClick={() => {
                  GetPreviousProductDetails("pre");
                }}
              >
                {loadingPre ? (
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : (
                  <span className="sr-only">
                    <Icon.ArrowLeft size={20} className="mx-2 hideArrowStyle" />
                    PREVIOUS
                  </span>
                )}
              </button>
              <button className="mx-2 CButton" onClick={SubmitProductDetails}>
                {loadingSubmit ? (
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : (
                  <span className="sr-only">SUBMIT</span>
                )}
              </button>
              <button
                className="CButton"
                onClick={() => {
                  GetNextProductDetails("next");
                }}
              >
                {loadingNext ? (
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : (
                  <span className="sr-only">
                    NEXT
                    <Icon.ArrowRight
                      size={20}
                      className="mx-2 hideArrowStyle"
                    />
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
