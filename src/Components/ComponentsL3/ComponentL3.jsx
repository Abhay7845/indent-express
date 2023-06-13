/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import TopHeader from "../../Common/TopHeader";
import SideBar from "../../Common/SideBar";
import TablePagination from "@mui/material/TablePagination";
import Loader from "../../Common/Loader";
import "../../Style/ComponentL3.css";
import { BsCartFill } from "react-icons/bs";
import { HostManager } from "../../APIList/HotMaster";
import AddProductsL3 from "./AddProductsL3";
import ShowImageCart from "./ShowImageCart";
// import No_ImageURL from "../../Asset/Img/No_Image.jpg";

const ComponentL3 = (props) => {
  const { showAlert } = props;
  const storeCode = localStorage.getItem("indent-expressId");
  const [loading, setLoading] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(12);
  const [singleProductsDetails, setSingleProductsDetails] = useState({});
  const [searchItemCode, setSearchItemCode] = useState("");

  useEffect(() => {
    const productDataBySearch = productsData.filter(
      (data) => data.itemcode === searchItemCode
    );
    setProductsData(productDataBySearch);
  }, [searchItemCode]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${HostManager.reportsL1L2}/INDENT/express/get/itemcode/list`)
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          setProductsData(response.data.value);
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
  }, [storeCode]);

  const SearchProductByItemCode = () => {
    setLoading(true);
    axios
      .get(`${HostManager.reportsL1L2}/INDENT/express/get/itemcode/list`)
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          setProductsData(response.data.value);
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
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const GetProductsDetails = (Details) => {
    const GetProductsDetails = {
      storeCode: storeCode,
      collection: "ALL",
      consumerBase: "ALL",
      group: "ALL",
      category: "ALL",
      itemCode: Details.itemcode,
    };
    axios
      .post(
        `${HostManager.reportsL1L2}/INDENT/express/get/product/details`,
        GetProductsDetails
      )
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          setSingleProductsDetails(response.data.value);
        }
        if (response.data.code === "1001") {
          alert(response.data.value);
        }
      })
      .catch((error) => console.log("error==>", error));
  };

  return (
    <>
      <TopHeader />
      <div className="ComponentL3LowerHeader">
        <SideBar />
        <BsCartFill size={25} className="trolleyLowerHeader" />
      </div>

      {loading === true ? <Loader /> : ""}
      <div className="row mx-1 mt-4">
        <div className="col-md-4">
          <input
            type="text"
            className="GInput"
            placeholder="Search by Item Code"
            onChange={(e) => setSearchItemCode(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <div className="d-flex justify-content-between">
            <b className="mx-2 text-danger">
              {productsData.length <= 0 ? "DATA NOT FOUND" : ""}
            </b>
          </div>
        </div>
      </div>

      {productsData.length > 0 && (
        <div className="row mx-0">
          {productsData
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((productsDetails, i) => {
              const { itemcode } = productsDetails;
              const imageCode = !itemcode ? "" : itemcode.substring(2, 9);
              const imageURL = `https://jewbridge.titanjew.in/CatalogImages/api/ImageFetch/?Type=ProductImages&ImageName=${imageCode}`;
              return (
                <div key={i} className="col-md-3 mt-5">
                  <div className="cardStyle">
                    <ShowImageCart imageURL={imageURL} />
                    <div className="cardBodyStyle">
                      <div className="innerBodyStyle">
                        <b>{itemcode}</b>
                        <BsCartFill
                          size={20}
                          onClick={() => GetProductsDetails(productsDetails)}
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          className="trolleyStyle"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          <div className="d-flex justify-content-end my-2 w-100">
            <TablePagination
              rowsPerPageOptions={[12, 24, 36, productsData.length]}
              component="div"
              count={productsData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>
        </div>
      )}

      <div className="my-4 mx-3">
        {productsData.length <= 0 && (
          <button onClick={SearchProductByItemCode} className="SButton">
            HOME
          </button>
        )}
      </div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div
              className="modal-header"
              style={{ backgroundColor: "#f5ea84" }}
            >
              <h5 className="modal-title" id="staticBackdropLabel">
                ADD TO CART
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <AddProductsL3 singleProductsDetails={singleProductsDetails} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentL3;
