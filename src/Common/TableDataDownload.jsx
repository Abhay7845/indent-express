import React from "react";
import { GridToolbarContainer, GridToolbarExport } from "@mui/x-data-grid";

const TableDataDownload = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarExport csvOptions={{ fileName: "Table Data" }} />
    </GridToolbarContainer>
  );
};

export default TableDataDownload;
