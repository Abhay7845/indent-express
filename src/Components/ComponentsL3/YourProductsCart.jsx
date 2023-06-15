import React, { useState, useEffect } from "react";
import {
  BsCartFill,
  BsFillBarChartFill,
  BsFillHouseDoorFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import TopHeader from "../../Common/TopHeader";
import axios from "axios";
import * as Icon from "react-bootstrap-icons";
import { L1L2HeadingData } from "../../Data/DataList";
import TablePagination from "@mui/material/TablePagination";

const YourProductsCart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => res)
      .then((response) => {
        setCartProducts(response.data);
      });
  }, []);
  console.log("cartProducts==>", cartProducts);
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
      <div className="ComponentL3LowerHeader">
        <div>
          <Link to="/Indent-express/direction/home">
            <BsFillHouseDoorFill size={25} className="mt-2 text-dark" />
          </Link>
          <Link to="/Indent-express/L3/status/reports">
            <BsFillBarChartFill size={25} className="mt-2 mx-2 text-dark" />
          </Link>
        </div>
        <Link to="/Indent-express/L3/your/cart/reports">
          <BsCartFill size={25} className="mt-2 mx-2 text-dark" />
        </Link>
      </div>
      <br />
      <div className="d-flex justify-content-end mx-1 my-2">
        <button className="mx-2">CONFIRM</button>
        <button>SEND MAIL</button>
      </div>
      {cartProducts.length > 0 && (
        <div className="table-responsive mx-1">
          <table className="table table-hover table-bordered">
            <thead>
              <tr>
                {L1L2HeadingData.map((item, i) => {
                  return (
                    <th key={i} className="tableHeading">
                      {item.label}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {cartProducts
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item, i) => {
                  const { itemCode } = item;
                  const imageCode = !itemCode ? "" : itemCode.substring(2, 9);
                  const imageURL = `https://jewbridge.titanjew.in/CatalogImages/api/ImageFetch/?Type=ProductImages&ImageName=${imageCode}.jpg`;
                  return (
                    <tr key={i} className="tableRowData">
                      <td>{item.id}</td>
                      <td className="text-center">
                        <img
                          src={imageURL}
                          width="70"
                          height="70"
                          className="img-thumbnail"
                          alt="No_Image"
                        />
                      </td>
                      <td>{item.itemCode}</td>
                      <td>{item.collection}</td>
                      <td>{item.consumerBase}</td>
                      <td>{item.itGroup}</td>
                      <td>{item.category}</td>
                      <td>{item.stdWt}</td>
                      <td>{item.stdUCP}</td>
                      <td>{item.saleable}</td>
                      <td>{item.reasons}</td>
                      <td className="text-center">
                        <Icon.PencilSquare
                          size={18}
                          cursor="pointer"
                          // onClick={() => EditReport(item)}
                        />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div className="d-flex justify-content-end my-2 w-100">
            <TablePagination
              rowsPerPageOptions={[50, 100, 150, cartProducts.length]}
              component="div"
              count={cartProducts.length}
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

export default YourProductsCart;
