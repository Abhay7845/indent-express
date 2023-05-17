import React, { useEffect, useState } from "react";
import TopHeader from "../../Common/TopHeader";
import axios from "axios";
import { HostManager } from "../../APIList/HotMaster";

export const FeedBackFormL1L2 = () => {
  const [colLection, setCollection] = useState([]);
  const [collectionValue, setCollectionValue] = useState("");
  const [needSate, setNeedSate] = useState([]);
  const [needStateValue, setNeedStateValue] = useState("");
  const [group, setGroup] = useState([]);
  const [groupValue, setGroupValue] = useState("");
  const [category, setCategory] = useState([]);
  const [categoryValue, setCategoryValue] = useState("");

  console.log("categoryValue==>", categoryValue);

  //COLLECTION  DROPDOWN
  useEffect(() => {
    axios
      .get(`${HostManager.mainHost}/npim/dropdown/ALL/ALL/ALL/ALL`)
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          setCollection(response.data.value);
        } else if (response.data.code === "1001") {
          console.log("DATA NOT FOUND");
        }
      })
      .catch((error) => console.log(""));
  }, [collectionValue]);
  const collectionDropdown = colLection.map((element) => {
    return {
      value: element,
      label: element,
    };
  });

  //NEED STATE  DROPDOWN
  useEffect(() => {
    axios
      .get(
        `${HostManager.mainHost}/npim/dropdown/${collectionValue}/ALL/ALL/ALL`
      )
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          setNeedSate(response.data.value);
        } else if (response.data.code === "1001") {
          console.log("DATA NOT FOUND");
        }
      })
      .catch((error) => console.log(""));
  }, [collectionValue]);

  const needSateDropdown = needSate.map((element) => {
    return {
      value: element,
      label: element,
    };
  });

  //GROUP  DROPDOWN
  useEffect(() => {
    axios
      .get(
        `${HostManager.mainHost}/npim/dropdown/${collectionValue}/${needStateValue}/ALL/ALL`
      )
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          setGroup(response.data.value);
        } else if (response.data.code === "1001") {
          console.log("DATA NOT FOUND");
        }
      })
      .catch((error) => console.log(""));
  }, [collectionValue, needStateValue]);

  const GroupDropdown = group.map((element) => {
    return {
      value: element,
      label: element,
    };
  });

  //CATEGORY  DROPDOWN
  useEffect(() => {
    axios
      .get(
        `${HostManager.mainHost}/npim/dropdown/${collectionValue}/${needStateValue}/${groupValue}/ALL`
      )
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          setCategory(response.data.value);
        } else if (response.data.code === "1001") {
          console.log("DATA NOT FOUND");
        }
      })
      .catch((error) => console.log(""));
  }, [collectionValue, needStateValue, groupValue]);

  const CategoryDropdown = category.map((element) => {
    return {
      value: element,
      label: element,
    };
  });

  return (
    <>
      <TopHeader />
      <div className="DropDownFormStyle">
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
          <div className="col-md-3">
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
        </div>
      </div>
    </>
  );
};
