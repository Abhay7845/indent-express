import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import TableDataDownload from "./TableDataDownload";
import * as Icon from "react-bootstrap-icons";
import "../Style/TableForAll.css";

const TableForAll = (props) => {
  const { col, rows, reportsName } = props;
  const [searchItemCode, setSearchItemCode] = useState("");
  const [reports, setReports] = useState({});

  const imageCode = !rows.itemCode ? "" : rows.itemCode.substring(2, 9);
  const imageURL = `https://jewbridge.titanjew.in/CatalogImages/api/ImageFetch/?Type=ProductImages&ImageName=${imageCode}.jpg`;

  const CancelIndentRowData = (RowData) => {
    console.log("RowData==>", RowData);
  };

  const UpdateRowData = (UpdateData) => {
    window.scrollTo({ top: "0", behavior: "smooth" });
    setReports(UpdateData);
    console.log("UpdateData==>", UpdateData);
  };

  const column = col.map((element) => {
    let fieldRes;
    if (element === "Action") {
      fieldRes = {
        field: "Action",
        headerName: "Action",
        sortable: false,
        disableClickEventBubbling: true,
        renderCell: (params) => {
          return (
            <>
              {params.row.confirmationStatus === "" && (
                <div>
                  <Icon.PencilSquare
                    className="EditButton"
                    onClick={() => UpdateRowData(params.row)}
                  />
                  <Icon.Trash
                    className="DeleteButton"
                    onClick={() => CancelIndentRowData(params.row)}
                  />
                </div>
              )}
              {reportsName === "Cancel_Item_List" && (
                <Icon.PencilSquare
                  className="EditButton"
                  onClick={() => UpdateRowData(params.row)}
                />
              )}
            </>
          );
        },
      };
    } else if (element === "Image") {
      fieldRes = {
        field: "Image",
        headerName: "Image",
        sortable: false,
        innerHeight: 500,
        renderCell: () => {
          return (
            <img
              src={imageURL}
              alt="Image_Not Available"
              className="img-thumbnail"
            />
          );
        },
      };
    } else if (element === "confirmationStatus") {
      fieldRes = {
        field: "confirmationStatus",
        headerName: "confirmationStatus",
        sortable: false,
        flex: 1,
        disableClickEventBubbling: true,
        renderCell: (params) => {
          return (
            <p className="text-success">
              {params.row.confirmationStatus === "" ? "" : "Success"}
            </p>
          );
        },
      };
    } else {
      fieldRes = {
        field: element,
        sortable: false,
        flex: 1,
      };
    }
    return fieldRes;
  });

  const DataRows = rows.filter((eachRow) =>
    eachRow.itemCode.includes(searchItemCode.toUpperCase())
  );
  return (
    <>
      {reports.itemCode === undefined ? (
        ""
      ) : (
        <div className="row row-cols-1 row-cols-md-2 mx-1 my-3">
          <div className="col-md-5">
            <img
              src={imageURL}
              className="w-100 img-thumbnail ReportCatalogImage"
              alt="Image_Unavailable"
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5
                className="text-center p-1 itemCodeText"
                style={{ backgroundColor: "#f5ea84" }}
              >
                {reports.itemCode}
              </h5>
              <div className="row my-3">
                <div className="col-md-6">
                  <div>
                    <h6 className="text-center my-2">
                      <b>PRODUCT DESCRIPTION</b>
                    </h6>
                    <br />
                    <table className="w-100">
                      <tbody className="productsDetailsStyle">
                        <tr>
                          <th>GROUP</th>
                          <td>-</td>
                          <td>{reports.itGroup}</td>
                        </tr>
                        <tr>
                          <th>CATEGORY</th>
                          <td>-</td>
                          <td>{reports.category}</td>
                        </tr>
                        <tr>
                          <th>NEED STATE</th>
                          <td>-</td>
                          <td>{reports.needState}</td>
                        </tr>
                        <tr>
                          <th>STD WT</th>
                          <td>-</td>
                          <td>{reports.stdWt}</td>
                        </tr>
                        <tr>
                          <th>STD UCP</th>
                          <td>-</td>
                          <td>{reports.stdUCP}</td>
                        </tr>
                        <tr>
                          <th>IND-CATEGORY</th>
                          <td>-</td>
                          <td>{reports.indCategory}</td>
                        </tr>
                        <tr>
                          <th>QUANTITY</th>
                          <td>-</td>
                          <td>{reports.itemQty}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-md-6">
                  <h6 className="text-center my-2 feedBackText">
                    <b>INDENT DETAILS</b>
                  </h6>
                  <br />
                </div>
              </div>
              <div className="d-flex">
                <button className="CButton mx-1">CANCEL INDENT</button>
                <button className="CButton">UPDATE</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <hr />
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
        <div className="col-md-3 text-center mt-2">
          <b className="text-primary">COUNT- {DataRows.length}</b>
        </div>
        <div className="col-md-4 confirmButtons">
          <button className="confirmSendmail mx-2">CONFIRM</button>
          <button className="confirmSendmail">SEND MAIL</button>
        </div>
      </div>
      <DataGrid
        rows={DataRows}
        columns={column}
        autoHeight={true}
        pageSize={50}
        components={{
          Toolbar: TableDataDownload,
        }}
      />
    </>
  );
};
export default TableForAll;
