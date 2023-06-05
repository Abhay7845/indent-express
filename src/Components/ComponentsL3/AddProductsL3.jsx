import React, { useState, useEffect } from "react";
import axios from "axios";
import TopHeader from "../../Common/TopHeader";
import SideBar from "../../Common/SideBar";
import { BsCartFill } from "react-icons/bs";

const AddProductsL3 = (props) => {
  const { showAlert } = props;
  const storeCode = localStorage.getItem("indent-expressId");
  const [loading, setLoading] = useState(false);
  const [singleProductsDetails, setSingleProductsDetails] = useState([]);
  console.log("loading==>", loading);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://tanishqdigitalnpim.titan.in:8443/IndentExpress/INDENTL3/express/item/wise/rpt/L3/${storeCode}`
      )
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          const productsDetails = response.data.value.filter(
            (item) => item.id === 2
          );
          setSingleProductsDetails(productsDetails);
        }
        if (response.data.code === "1001") {
          showAlert("Sorry Data Not Found", "danger");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log("error==>", error);
        setLoading(false);
      });
  }, [storeCode, showAlert]);
  console.log("singleProductsDetails==>", singleProductsDetails);

  return (
    <>
      <TopHeader />
      <div className="ComponentL3LowerHeader">
        <SideBar />
        <BsCartFill size={25} className="trolleyLowerHeader" />
      </div>
    </>
  );
};

export default AddProductsL3;
