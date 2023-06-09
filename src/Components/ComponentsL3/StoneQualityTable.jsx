import React from "react";

const StoneQualityTable = () => {
  return (
    <div className="table-responsive">
      <table
        className="table table-bordered"
        style={{ backgroundColor: "#cbc9c9" }}
      >
        <thead>
          <tr>
            <th>SI_2GH</th>
            <th>VS_GH</th>
            <th>VVS1</th>
            <th>I2_GH</th>
            <th>SI2_IJ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StoneQualityTable;
