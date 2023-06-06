import React, { useState } from "react";
import Loader from "../../Common/Loader";
import ShowImage from "./ShowImage";
import "../../Style/ShowImage.css";

const AddProductsL3 = (props) => {
  const [loading, setLoading] = useState(false);
  const { singleProductsDetails } = props;
  const { itemCode, videoLink } = singleProductsDetails;
  console.log("singleProductsDetails==>", singleProductsDetails);

  const imageCode = !itemCode ? "" : itemCode.substring(2, 9);
  const imageURL = `https://jewbridge.titanjew.in/CatalogImages/api/ImageFetch/?Type=ProductImages&ImageName=${imageCode}`;

  const AddProductsToCard = () => {
    setLoading(false);
  };
  return (
    <>
      {loading === true ? <Loader /> : ""}
      <div className="row row-cols-1 row-cols-md-2 mx-1 my-3">
        <div className="col-md-5">
          <ShowImage imageURL={imageURL} videoLink={videoLink} />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5
              className="text-center p-1 itemCodeText"
              style={{ backgroundColor: "#f5ea84" }}
            >
              {singleProductsDetails.itemCode}
            </h5>
            <div className="row my-3">
              <div className="col-md-5">
                <div>
                  <h6 className="text-center my-2">
                    <b>PRODUCT SPECIFICATION</b>
                  </h6>
                  <br />
                  <table className="w-100">
                    <tbody className="productsDetailsStyle">
                      <tr>
                        <th>COLLECTION</th>
                        <td>- &nbsp;&nbsp;</td>
                        <td>{singleProductsDetails.collection}</td>
                      </tr>
                      <tr>
                        <th>NEED STATE</th>
                        <td>-</td>
                        <td>{singleProductsDetails.consumerBase}</td>
                      </tr>
                      <tr>
                        <th>GROUP</th>
                        <td>-</td>
                        <td>{singleProductsDetails.itGroup}</td>
                      </tr>
                      <tr>
                        <th>CATEGORY</th>
                        <td>-</td>
                        <td>{singleProductsDetails.category}</td>
                      </tr>
                      <tr>
                        <th>GENDER</th>
                        <td>-</td>
                        <td>{singleProductsDetails.gender}</td>
                      </tr>
                      <tr>
                        <th>COMPLEXITY</th>
                        <td>-</td>
                        <td>{singleProductsDetails.complexity}</td>
                      </tr>
                      <tr>
                        <th>STD WT</th>
                        <td>-</td>
                        <td>{singleProductsDetails.stdWt}</td>
                      </tr>
                      <tr>
                        <th>STD UCP</th>
                        <td>-</td>
                        <td>{singleProductsDetails.stdUCP}</td>
                      </tr>
                      <tr>
                        <th>METAL COLOR</th>
                        <td>-</td>
                        <td>{singleProductsDetails.metalColor}</td>
                      </tr>
                      <tr>
                        <th>FINDING</th>
                        <td>-</td>
                        <td>{singleProductsDetails.findings}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-7">
                <h6 className="text-center my-2 feedBackText">
                  <b>INDENT DETAILS</b>
                </h6>
                <br />
              </div>
            </div>
            <div className="mt-5">
              <button className="CButton" onClick={AddProductsToCard}>
                {loading ? (
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : (
                  <span className="sr-only">ADD PRODUCT</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProductsL3;
