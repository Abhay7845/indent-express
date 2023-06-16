import React from "react";

const TableForAll = (props) => {
  const { col, rows } = props;
  const colum = col.map((element) => {
    return {
      field: element,
      sortable: false,
      flex: 1,
    };
  });

  return (
    <>
      <Container maxWidth="xl">
        <Typography align="center" variant="h5" color="secondary">
          Heading
        </Typography>
        <Typography align="center" variant="h6" color="primary">
          Count :
        </Typography>
        <DataGrid
          rows={rows}
          columns={colum}
          autoHeight={true}
          pageSize={10}
          components={{
            Toolbar: CustomToolbar,
          }}
        />
      </Container>
    </>
  );
};
export default TableForAll;
