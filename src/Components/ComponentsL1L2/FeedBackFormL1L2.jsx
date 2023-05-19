import React, { useEffect, useState } from "react";
import TopHeader from "../../Common/TopHeader";
import axios from "axios";
import { HostManager } from "../../APIList/HotMaster";
import Loader from "../../Common/Loader";
import { BsSearch } from "react-icons/bs";
import { NoReasonOption } from "../../Data/DataList";
import "../../Style/FeedbackFormL1L2.css";
import SideBar from "../../Common/SideBar";
import * as Icon from "react-bootstrap-icons";

export const FeedBackFormL1L2 = (props) => {
  const { showAlert } = props;
  const [loading, setLoading] = useState(false);
  const [colLection, setCollection] = useState([]);
  const [collectionValue, setCollectionValue] = useState("");
  const [needSate, setNeedSate] = useState([]);
  const [needStateValue, setNeedStateValue] = useState("");
  const [group, setGroup] = useState([]);
  const [groupValue, setGroupValue] = useState("");
  const [category, setCategory] = useState([]);
  const [categoryValue, setCategoryValue] = useState("");
  const [switchData, setSwitchData] = useState(false);

  //COLLECTION  DROPDOWN
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${HostManager.mainHost}/npim/dropdown/ALL/ALL/ALL/ALL`)
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
        `${HostManager.mainHost}/npim/dropdown/${collectionValue}/ALL/ALL/ALL`
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
        `${HostManager.mainHost}/npim/dropdown/${collectionValue}/${needStateValue}/ALL/ALL`
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
        `${HostManager.mainHost}/npim/dropdown/${collectionValue}/${needStateValue}/${groupValue}/ALL`
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
  const GetProductsDetails = () => {
    setLoading(true);
    axios
      .get(
        `${HostManager.mainHost}/npim/dropdown/${collectionValue}/${needStateValue}/${groupValue}/${categoryValue}`
      )
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          console.log("response==>", response.data);
        } else if (response.data.code === "1001") {
          showAlert("Data Not Found", "danger");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log("");
      });
  };

  const getTrueFalse = () => {
    if (!switchData) {
      setSwitchData(true);
    } else {
      setSwitchData(false);
    }
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
              onChange={(e) => setCategoryValue(e.target.value)}
            >
              <option>Select Category</option>
              {CategoryDropdown.map((item, i) => {
                return (
                  <option key={i} value={item.value}>
                    {item.name}
                    {item.label}
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
              ITEM CODE
            </h5>
            <div className="row my-3">
              <div className="col-md-6">
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
                        <td>HELLO1</td>
                      </tr>
                      <tr>
                        <th>NEED STATE</th>
                        <td>-</td>
                        <td>HELLO2</td>
                      </tr>
                      <tr>
                        <th>GROUP</th>
                        <td>-</td>
                        <td>HELLO3</td>
                      </tr>
                      <tr>
                        <th>CATEGORY</th>
                        <td>-</td>
                        <td>HELLO4</td>
                      </tr>
                      <tr>
                        <th>GENDER</th>
                        <td>-</td>
                        <td>HELLO5</td>
                      </tr>
                      <tr>
                        <th>COMPLEXITY</th>
                        <td>-</td>
                        <td>HELLO6</td>
                      </tr>
                      <tr>
                        <th>STD WT</th>
                        <td>-</td>
                        <td>HELLO7</td>
                      </tr>
                      <tr>
                        <th>STD UCP</th>
                        <td>-</td>
                        <td>HELLO8</td>
                      </tr>
                      <tr>
                        <th>METAL COLOR</th>
                        <td>-</td>
                        <td>HELLO9</td>
                      </tr>
                      <tr>
                        <th>FINDING</th>
                        <td>-</td>
                        <td>HELLO10</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-6">
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
                    <select className="SSelect">
                      <option>Select</option>
                      {NoReasonOption.map((item, i) => {
                        return (
                          <option key={i} value={item.value}>
                            {item.label}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <br />
            <div className="d-flex justify-content-center mx-0">
              <button className="CButton">
                <Icon.ArrowLeft size={20} className="mx-2 hideArrowStyle" />
                PREVIOUS
              </button>
              <button className="mx-2 CButton">SUBMIT</button>
              <button className="CButton">
                NEXT
                <Icon.ArrowRight size={20} className="mx-2 hideArrowStyle" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
