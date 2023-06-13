import React from "react";

const singleProductsDetailsDetails = (props) => {
  const { singleProductsDetails } = props;
  return (
    <>
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th scope="col">CATEGORY</th>
            <th scope="col">StdWt</th>
            <th scope="col">UCP</th>
          </tr>
        </thead>
        <tbody>
          {singleProductsDetails.childNodeF === "" ? (
            ""
          ) : (
            <tr>
              <td>FINGER RING</td>
              <td>{singleProductsDetails.stdWtF}</td>
              <td>{singleProductsDetails.stdUcpF}</td>
            </tr>
          )}
          {singleProductsDetails.childNodesE === "" ? (
            ""
          ) : (
            <tr>
              <td>EAR RING</td>
              <td>{singleProductsDetails.stdWtE}</td>
              <td>{singleProductsDetails.stdUcpE}</td>
            </tr>
          )}
          {singleProductsDetails.childNodesN === "" ? (
            ""
          ) : (
            <tr>
              <td>NECKWEAR</td>
              <td>{singleProductsDetails.stdWtN}</td>
              <td>{singleProductsDetails.stdUcpN}</td>
            </tr>
          )}
          {singleProductsDetails.childNodeH === "" ? (
            ""
          ) : (
            <tr>
              <td>HARAM</td>
              <td>{singleProductsDetails.stdWtH}</td>
              <td>{singleProductsDetails.stdUcpH}</td>
            </tr>
          )}
          {singleProductsDetails.childNodeK === "" ? (
            ""
          ) : (
            <tr>
              <td>TIKKA</td>
              <td>{singleProductsDetails.stdWtK}</td>
              <td>{singleProductsDetails.stdUcpK}</td>
            </tr>
          )}
          {singleProductsDetails.childNodeV === "" ? (
            ""
          ) : (
            <tr>
              <td>BANGLE</td>
              <td>{singleProductsDetails.stdWtV}</td>
              <td>{singleProductsDetails.stdUcpV}</td>
            </tr>
          )}
          {singleProductsDetails.childNodeO === "" ? (
            ""
          ) : (
            <tr>
              <td>OTHER</td>
              <td>{singleProductsDetails.stdWtO}</td>
              <td>{singleProductsDetails.stdUcpO}</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default singleProductsDetailsDetails;
