/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import TopHeader from "../../Common/TopHeader";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import TablePagination from "@mui/material/TablePagination";
import { BsCardList, BsCartFill, BsFillBarChartFill } from "react-icons/bs";
import Loader from "../../Common/Loader";
import axios from "axios";
import { HostManager } from "../../APIList/HotMaster";
import { IMAGE_URL } from "../../Data/DataList";
import ShowImageCart from "./ShowImageCart";
import swal from "sweetalert";

const CategoryTypeL3 = (props) => {
  const { showAlert } = props;
  const storeCode = localStorage.getItem("indent-expressId");
  const YourCart = localStorage.getItem("your-cart");
  const [loading, setLoading] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(12);
  const [page, setPage] = useState(0);
  const [singleProductsDetails, setSingleProductsDetails] = useState({});
  console.log("singleProductsDetails==>", singleProductsDetails);

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
        console.log("");
        setLoading(false);
      });
  }, [storeCode]);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
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
        if (response.data.code === "1003") {
          swal({
            title: "Warning!",
            text: "Sorry! Already Indented",
            icon: "warning",
            buttons: "OK",
          });
        }
      })
      .catch((error) => console.log(""));
  };

  return (
    <>
      {loading === true && <Loader />}
      <TopHeader />
      <div className="ComponentL3LowerHeader">
        <div className="d-flex">
          <Link to="/Indent-express/L3/digital/home">
            <button type="button" class="btn btn-dark btn-sm">
              BACK
            </button>
          </Link>
          <Tippy content="Status Report">
            <Link to="/Indent-express/L3/status/reports">
              <BsFillBarChartFill size={28} className="mx-2 text-dark" />
            </Link>
          </Tippy>
        </div>
        <div className="d-flex">
          <Tippy content="Cancel Item List">
            <Link to="/Indent-express/L3/cancel/item/list">
              <BsCardList size={25} className="mt-2 mx-2 text-dark" />
            </Link>
          </Tippy>
          <Link
            to="/Indent-express/L3/your/cart/reports"
            className="notification"
          >
            <BsCartFill size={25} className="mt-2 mx-2 text-dark" />
            <span className="badge">{YourCart}</span>
          </Link>
        </div>
      </div>
      {/* <---------------CART DATA DETAILS =----------------------->*/}
      <div className="row mx-0">
        {productsData
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((productsDetails, i) => {
            const { itemcode } = productsDetails;
            const imageCode = !itemcode ? "" : itemcode.substring(2, 9);
            const imageURL = `${IMAGE_URL}${imageCode}`;
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
    </>
  );
};

export default CategoryTypeL3;
