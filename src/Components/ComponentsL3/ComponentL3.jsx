import React, { useState, useEffect } from "react";
import TopHeader from "../../Common/TopHeader";
import SideBar from "../../Common/SideBar";
import TablePagination from "@mui/material/TablePagination";
import axios from "axios";

const ComponentL3 = () => {
  const [productsData, setProductsData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(12);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res)
      .then((response) => setProductsData(response.data))
      .catch((error) => console.log("error==>", error));
  }, []);
  console.log("productsData=>", productsData);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <TopHeader />
      <div className="DropDownFormStyle">
        <SideBar />
      </div>
      <div className="row mx-0 mt-3">
        {productsData
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((item, i) => {
            return (
              <div key={i} className="col-sm-4 mt-3">
                <div className="card">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                    // src="https://jewbridge.titanjew.in/CatalogImages/api/ImageFetch/?Type=ProductImages&ImageName=${imageCode}.jpg"
                    className="card-img-top"
                    alt="Image_Not Available"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        <div className="d-flex justify-content-end my-2 w-100">
          <TablePagination
            rowsPerPageOptions={[12, 24, 36, 48, productsData.length]}
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

export default ComponentL3;
