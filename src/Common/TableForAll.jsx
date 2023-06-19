import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import TableDataDownload from "./TableDataDownload";
import * as Icon from "react-bootstrap-icons";
import "../Style/TableForAll.css";

const TableForAll = (props) => {
  const { col, rows, reportsName } = props;
  const [searchItemCode, setSearchItemCode] = useState("");

  const imageCode = !rows.itemCode ? "" : rows.itemCode.substring(2, 9);
  const imageURL = `https://jewbridge.titanjew.in/CatalogImages/api/ImageFetch/?Type=ProductImages&ImageName=${imageCode}.jpg`;

  const CancelIndentRowData = (RowData) => {
    console.log("RowData==>", RowData);
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
                    // onClick={() => rowDataHandler(params.row)}
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
                  //   onClick={() => rowDataHandler(params.row)}
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
          <span className="mx-2">||</span>
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
