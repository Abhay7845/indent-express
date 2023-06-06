/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import TopHeader from "../../Common/TopHeader";
import SideBar from "../../Common/SideBar";
import TablePagination from "@mui/material/TablePagination";
import Loader from "../../Common/Loader";
import LoadingGif from "../../Asset/Img/Loading_Img.gif";
import "../../Style/ComponentL3.css";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HostManager } from "../../APIList/HotMaster";

const ComponentL3 = (props) => {
  const { showAlert } = props;
  const storeCode = localStorage.getItem("indent-expressId");
  const [loading, setLoading] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(12);

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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const No_ImageURL =
    "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482930.jpg";
  return (
    <>
      <TopHeader />
      <div className="ComponentL3LowerHeader">
        <SideBar />
        <BsCartFill size={25} className="trolleyLowerHeader" />
      </div>
      {loading === true ? <Loader /> : ""}
      {productsData.length > 0 && (
        <div className="row mx-0 mt-3">
          {productsData
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((productsDetails, i) => {
              const { itemcode } = productsDetails;
              const imageCode = !itemcode ? "" : itemcode.substring(2, 9);
              const imageURL = `https://jewbridge.titanjew.in/CatalogImages/api/ImageFetch/?Type=ProductImages&ImageName=${imageCode}.jpg`;
              return (
                <div key={i} className="col-md-4 mt-3">
                  <div className="cardStyle">
                    {imageCode === "" ? (
                      <img
                        src={LoadingGif}
                        className="card-img-top"
                        alt="No_Image"
                      />
                    ) : (
                      <img
                        src={imageURL}
                        className="card-img-top CardImageSize"
                        alt="No_Image"
                      />
                    )}
                    <div className="cardBodyStyle">
                      <div className="innerBodyStyle">
                        <b>{itemcode}</b>
                        <Link
                          to={`/Indent-express/add/product/L3/${itemcode}`}
                          className="trolleyStyle"
                        >
                          <BsCartFill size={20} />
                        </Link>
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
    </>
  );
};

export default ComponentL3;
