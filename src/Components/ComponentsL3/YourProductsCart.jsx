import React, { useState, useEffect } from "react";
import {
  BsCartFill,
  BsFillBarChartFill,
  BsFillHouseDoorFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import TopHeader from "../../Common/TopHeader";
import * as Icon from "react-bootstrap-icons";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import {
  ItemWiseReportsDropdown,
  L3AddedCartHeadingData,
} from "../../Data/DataList";
import TablePagination from "@mui/material/TablePagination";
import Loader from "../../Common/Loader";

const YourProductsCart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const [itemWiseValue, setItemWiseValue] = useState("");
  const [searchItemCode, setSearchItemCode] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => res)
      .then((response) => {
        setCartProducts(response.data);
      });
    setLoading(false);
  }, [itemWiseValue]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
      {loading === true ? <Loader /> : ""}
      <TopHeader />
      <div className="ComponentL3LowerHeader">
        <div className="d-flex mx-2 w-100">
          <Link to="/Indent-express/direction/home">
            <BsFillHouseDoorFill size={25} className="mt-2 text-dark" />
          </Link>
          <Link to="/Indent-express/L3/status/reports">
            <BsFillBarChartFill size={25} className="mt-2 mx-3 text-dark" />
          </Link>
          <div className="col-md-2 mx-2">
            <select
              className="SSelect"
              onChange={(e) => setItemWiseValue(e.target.value)}
            >
              {ItemWiseReportsDropdown.map((item, i) => {
                return (
                  <option key={i} value={item.value}>
                    {item.label}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <Link to="/Indent-express/L3/your/cart/reports">
          <BsCartFill size={25} className="mt-2 mx-2 text-dark" />
        </Link>
      </div>
      {cartProducts.length > 0 && (
        <div>
          <div className="row d-flex justify-content-between mx-0 my-3">
            <div className="col-md-3">
              <input
                type="text"
                value={searchItemCode}
                className="SearchRowByItem"
                placeholder="Search by Item Code"
                onChange={(e) => setSearchItemCode(e.target.value)}
              />
            </div>
            <div className="col-md-3 text-center">
              <b className="text-danger">{itemWiseValue.toUpperCase()}</b>
              <span className="mx-2">||</span>
              <b className="text-primary">COUNT- {cartProducts.length}</b>
            </div>
            <div className="col-md-4 confirmButtons">
              <button className="confirmSendmail mx-2">CONFIRM</button>
              <button className="confirmSendmail">SEND MAIL</button>
            </div>
          </div>
          <div className="table-responsive mx-1">
            <table
              className="table table-hover table-bordered"
              id="table-to-xls"
            >
              <thead>
                <tr>
                  {L3AddedCartHeadingData.map((item, i) => {
                    return (
                      <th key={i} className="tableHeading text-center">
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
                        <td>{item.reasons}</td>
                        <td>{item.reasons}</td>
                        <td>{item.reasons}</td>
                        <td>{item.reasons}</td>
                        <td>{item.reasons}</td>
                        <td>{item.reasons}</td>
                        <td className="text-center">
                          <Icon.PencilSquare
                            size={18}
                            cursor="pointer"
                            className="mx-1"
                            // onClick={() => EditReport(item)}
                          />
                          <Icon.Trash
                            size={18}
                            cursor="pointer"
                            className="text-danger"
                            // onClick={() => EditReport(item)}
                          />
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <div className="d-flex justify-content-end my-2 w-100">
              <ReactHTMLTableToExcel
                id="test-table-xls-button"
                className="excelButton"
                table="table-to-xls"
                filename={itemWiseValue}
                sheet="tablexls"
                buttonText="DOWNLOAD"
              />
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
        </div>
      )}
    </>
  );
};

export default YourProductsCart;
