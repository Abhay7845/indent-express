/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import TopHeader from "../../Common/TopHeader";
import axios from "axios";
import { HostManager } from "../../APIList/HotMaster";
import Loader from "../../Common/Loader";
import { NoReasonOption } from "../../Data/DataList";
import "../../Style/FeedbackFormL1L2.css";
import LoadingGif from "../../Asset/Img/Loading_Img.gif";
import SideBar from "../../Common/SideBar";
import { BsSearch } from "react-icons/bs";
import * as Icon from "react-bootstrap-icons";
import { Select } from "antd";
import swal from "sweetalert";
import { FormControlLabel, Switch } from "@material-ui/core";

export const FeedBackFormL1L2 = (props) => {
  const { showAlert } = props;
  const storeCode = localStorage.getItem("indent-expressId");
  const [loading, setLoading] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [loadingNext, setLoadingNext] = useState(false);
  const [loadingPre, setLoadingPre] = useState(false);
  const [colLection, setCollection] = useState([]);
  const [needState, setNeedState] = useState([]);
  const [group, setGroup] = useState([]);
  const [category, setCategory] = useState([]);
  const [switchData, setSwitchData] = useState(true);
  const [quality_Reasons, setQuality_Reasons] = useState([]);
  const [productsDetails, setProductsDetails] = useState([]);
  const [dropState, setDropState] = useState({
    consumerBase: "ALL",
    collection: "ALL",
    groupData: "ALL",
    category: "ALL",
  });

  const GetProductsValues = {
    category: !dropState.category ? "ALL" : dropState.category,
    collection: !dropState.collection ? "ALL" : dropState.collection,
    consumerBase: !dropState.consumerBase ? "ALL" : dropState.consumerBase,
    group: !dropState.groupData ? "ALL" : dropState.groupData,
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
          setGroup([]);
          setCategory([]);
        } else if (response.data.code === "1001") {
          showAlert("Data Not Found", "danger");
          setNeedState([]);
          setGroup([]);
          setCategory([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  const onchangeHandler = (event) => {
    const { name, value } = event.target;
    setDropState((old) => {
      switch (name) {
        case "collection":
          return {
            ...old,
            [name]: value,
          };
        case "consumerBase":
          return {
            ...old,
            [name]: value,
          };
        case "groupData":
          return {
            ...old,
            [name]: value,
          };
        case "category":
          return {
            ...old,
            [name]: value,
          };
        default:
          break;
      }
    });
    if (name === "collection") {
      axios
        .get(
          `${HostManager.reportsL1L2}/INDENT/express/dropdown/${value}/ALL/ALL/ALL`
        )
        .then((response) => {
          if (response.data.code === "1000") {
            setNeedState(response.data.value);
            setGroup([]);
            setCategory([]);
            setLoading(false);
          } else if (response.data.code === "1001") {
            setGroup([]);
            setCategory([]);
          }
        })
        .catch((error) => {
          setLoading(false);
        });
    } else if (name === "consumerBase") {
      setLoading(true);
      axios
        .get(
          `${HostManager.reportsL1L2}/INDENT/express/dropdown/${dropState.collection}/${value}/ALL/ALL`
        )
        .then((response) => {
          if (response.data.code === "1000") {
            setGroup(response.data.value);
            setLoading(false);
          } else if (response.data.code === "1001") {
            setCategory([]);
          }
        })
        .catch((error) => {
          setLoading(false);
        });
    } else if (name === "groupData") {
      setLoading(true);
      axios
        .get(
          `${HostManager.reportsL1L2}/INDENT/express/dropdown/${dropState.collection}/${dropState.consumerBase}/${value}/ALL`
        )
        .then((response) => {
          if (response.data.code === "1000") {
            setCategory(response.data.value);
            setLoading(false);
          }
        })
        .catch((error) => {
          setLoading(false);
        });
    }
  };

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
        setLoading(false);
      });
  }, []);

  const GetProductsDetails = () => {
    setLoading(true);
    axios
      .get(
        `${HostManager.reportsL1L2}/INDENT/express/dropdown/${dropState.collection}/${dropState.consumerBase}/${dropState.groupData}/${dropState.category}`
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
        setLoading(false);
      });
  };

  const getTrueFalse = () => {
    if (switchData) {
      setSwitchData(false);
    } else {
      setSwitchData(true);
    }
  };

  // SUBMIT PRODUCT DETAILS API
  const SubmitProductDetails = () => {
    if (!switchData && quality_Reasons.length === 0) {
      swal("Please Select For No Reason");
    } else {
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
        saleable: switchData ? "YES" : "NO",
        size: productsDetails.size,
        uom: productsDetails.uom,
        reasons: quality_Reasons.toString(),
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
        quality_Reasons: productsDetails.quality_Reasons,
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
            setQuality_Reasons([]);
            GetNextProductDetails("next");
            swal({
              title: "Success!",
              text: "Your Data Has been Saved Successfully",
              icon: "success",
              buttons: "OK",
            });
          }
          setLoadingSubmit(false);
        })
        .catch((error) => {
          setQuality_Reasons([]);
          setLoadingSubmit(false);
        });
    }
  };

  const GetPreviousProductDetails = (direction) => {
    setLoadingPre(true);
    const getPreviousProductDetails = {
      category: !dropState.category ? "ALL" : dropState.category,
      collection: !dropState.collection ? "ALL" : dropState.collection,
      consumerBase: !dropState.consumerBase ? "ALL" : dropState.consumerBase,
      group: !dropState.groupData ? "ALL" : dropState.groupData,
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
        } else if (response.data.code === "1001") {
          swal({
            title: "Data Not Found",
            text: response.data.value,
            icon: "error",
            buttons: "OK",
          });
        }
        setLoadingPre(false);
      })
      .catch((error) => {
        setLoadingPre(false);
      });
  };
  const GetNextProductDetails = (direction) => {
    setLoadingNext(true);
    const getNextProductDetails = {
      category: !dropState.category ? "ALL" : dropState.category,
      collection: !dropState.collection ? "ALL" : dropState.collection,
      consumerBase: !dropState.consumerBase ? "ALL" : dropState.consumerBase,
      group: !dropState.groupData ? "ALL" : dropState.groupData,
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
        if (response.data.code === "1000") {
          setProductsDetails(response.data.value);
        } else if (response.data.code === "1001") {
          swal({
            title: "Data Not Found",
            text: response.data.value,
            icon: "error",
            buttons: "OK",
          });
        }
        setLoadingNext(false);
      })
      .catch((error) => {
        setLoadingNext(false);
      });
  };

  const imageCode = !productsDetails.itemCode
    ? ""
    : productsDetails.itemCode.substring(2, 9);
  const imageURL = `https://jewbridge.titanjew.in/CatalogImages/api/ImageFetch/?Type=ProductImages&ImageName=${imageCode}.jpg`;

  return (
    <>
      <TopHeader />
      {loading === true ? <Loader /> : ""}
      <div className="DropDownFormStyle">
        <SideBar />
        <div className="row mx-0 w-100">
          <div className="col-md-3">
            <select
              className="SSelect"
              onChange={onchangeHandler}
              name="collection"
            >
              <option>Select Collection</option>
              {colLection.map((item, i) => {
                return (
                  <option key={i} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-md-3">
            <select
              className="SSelect"
              onChange={onchangeHandler}
              name="consumerBase"
            >
              <option>Select NeedState</option>
              {needState.map((needSateValue, i) => {
                return (
                  <option key={i} value={needSateValue}>
                    {needSateValue}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-md-3">
            <select
              className="SSelect"
              onChange={onchangeHandler}
              name="groupData"
            >
              <option>Select Group</option>
              {group.map((groupValue, i) => {
                return (
                  <option key={i} value={groupValue}>
                    {groupValue}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-md-2">
            <select
              className="SSelect"
              onChange={onchangeHandler}
              name="category"
            >
              <option>Select Category</option>
              {category.map((categoryValue, i) => {
                return (
                  <option key={i} value={categoryValue}>
                    {categoryValue}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-md-1 justify-content-end">
            <BsSearch
              size={35}
              className="searchStyle"
              onClick={GetProductsDetails}
            />
          </div>
        </div>
      </div>
      {/* FEED BACK FORM */}
      <div className="row row-cols-1 row-cols-md-2 mx-0 my-3">
        <div className="col">
          {imageCode === "" ? (
            <img
              src={LoadingGif}
              className="w-100 img-thumbnail catalogImage"
              alt="No_Image"
            />
          ) : (
            <img
              src={imageURL}
              className="w-100 img-thumbnail catalogImage"
              alt="No_Image"
            />
          )}
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
                <div className="d-flex justify-content-center">
                  <FormControlLabel
                    control={
                      <Switch checked={switchData} onChange={getTrueFalse} />
                    }
                    label={switchData ? <label>YES</label> : <label>NO</label>}
                  />
                </div>
                {switchData === false ? (
                  <div className="my-3">
                    <label>Choose Reason For NO</label>
                    <Select
                      className="NoReasonSelect"
                      mode="multiple"
                      value={quality_Reasons}
                      placeholder="Please select"
                      options={NoReasonOption}
                      onChange={setQuality_Reasons}
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <br />
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
