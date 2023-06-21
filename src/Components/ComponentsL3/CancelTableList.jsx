import React, { useState } from "react";
import TableDataDownload from "../../Common/TableDataDownload";
import * as Icon from "react-bootstrap-icons";
import { DataGrid } from "@mui/x-data-grid";
import CommonImage from "../../Common/CommonImage";

const CancelTableList = (props) => {
  const { col, rows } = props;
  const [searchItemCode, setSearchItemCode] = useState("");
  const DataRows = rows.filter((eachRow) =>
    eachRow.itemCode.includes(searchItemCode.toUpperCase())
  );
  const UpdateCancelRow = (rowData) => {
    console.log("rowData==>", rowData);
  };
  const column = col.map((element) => {
    let fieldRes;
    if (element === "Action") {
      fieldRes = {
        field: "Action",
        headerName: "Action",
        renderCell: (params) => {
          return (
            <Icon.PencilSquare
              className="EditButton"
              onClick={() => UpdateCancelRow(params.row)}
            />
          );
        },
      };
    } else if (element === "Image") {
      fieldRes = {
        field: "Image",
        headerName: "Image",
        renderCell: (params) => {
          return <CommonImage itemCode={params.row.itemCode} />;
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

  return (
    <div>
      <div className="d-flex justify-content-between mx-0 my-3">
        <input
          type="text"
          value={searchItemCode}
          className="SearchRowByItem"
          placeholder="Search by Item Code"
          onChange={(e) => setSearchItemCode(e.target.value)}
        />
        <b className="text-primary mt-2 mx-2">COUNT- {DataRows.length}</b>
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
    </div>
  );
};

export default CancelTableList;
