import React, { useState, useEffect } from "react";
import axios from "axios";
import TopHeader from "../../Common/TopHeader";
import SideBar from "../../Common/SideBar";
import { BsCartFill } from "react-icons/bs";
import Loader from "../../Common/Loader";
import ShowImage from "./ShowImage";

const AddProductsL3 = (props) => {
  const { showAlert } = props;
  const storeCode = localStorage.getItem("indent-expressId");
  const [loading, setLoading] = useState(false);
  const [singleProductsDetails, setSingleProductsDetails] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://tanishqdigitalnpim.titan.in:8443/IndentExpress/INDENTL3/express/item/wise/rpt/L3/${storeCode}`
      )
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          const productsDetails = response.data.value.filter(
            (item) => item.id === 2
          );
          setSingleProductsDetails(productsDetails);
        }
        if (response.data.code === "1001") {
          showAlert("Sorry Data Not Found", "danger");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log("error==>", error);
        setLoading(false);
      });
  }, [storeCode, showAlert]);
  console.log("singleProductsDetails==>", [...singleProductsDetails]);

  return (
    <>
      {loading === true ? <Loader /> : ""}
      <TopHeader />
      <div className="ComponentL3LowerHeader">
        <SideBar />
        <BsCartFill size={25} className="trolleyLowerHeader" />
      </div>

      {singleProductsDetails.map((data, i) => {
        const { itemCode, videoLink } = data;
        const imageCode = !itemCode ? "" : itemCode.substring(2, 9);
        const imageURL = `https://jewbridge.titanjew.in/CatalogImages/api/ImageFetch/?Type=ProductImages&ImageName=${imageCode}`;
        return (
          <div key={i} className="row row-cols-1 row-cols-md-2 mx-1 my-3">
            <div className="col-md-5">
              <ShowImage imageURL={imageURL} videoLink={videoLink} />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5
                  className="text-center p-1 itemCodeText"
                  style={{ backgroundColor: "#f5ea84" }}
                >
                  {data.itemCode}
                </h5>
                <div className="row my-3">
                  <div className="col-md-6">
                    <div>
                      <h6 className="text-center my-2">
                        <b>PRODUCT DETAILS</b>
                      </h6>
                      <br />
                      <table className="w-100">
                        <tbody className="productsDetailsStyle">
                          <tr>
                            <th>COLLECTION</th>
                            <td>- &nbsp;&nbsp;</td>
                            <td>{data.collection}</td>
                          </tr>
                          <tr>
                            <th>NEED STATE</th>
                            <td>-</td>
                            <td>{data.needState}</td>
                          </tr>
                          <tr>
                            <th>GROUP</th>
                            <td>-</td>
                            <td>{data.itGroup}</td>
                          </tr>
                          <tr>
                            <th>CATEGORY</th>
                            <td>-</td>
                            <td>{data.category}</td>
                          </tr>
                          <tr>
                            <th>GENDER</th>
                            <td>-</td>
                            <td>{data.gender}</td>
                          </tr>
                          <tr>
                            <th>COMPLEXITY</th>
                            <td>-</td>
                            <td>{data.complexity}</td>
                          </tr>
                          <tr>
                            <th>STD WT</th>
                            <td>-</td>
                            <td>{data.stdWt}</td>
                          </tr>
                          <tr>
                            <th>STD UCP</th>
                            <td>-</td>
                            <td>{data.stdUCP}</td>
                          </tr>
                          <tr>
                            <th>METAL COLOR</th>
                            <td>-</td>
                            <td>{data.metalColor}</td>
                          </tr>
                          <tr>
                            <th>FINDING</th>
                            <td>-</td>
                            <td>{data.findings}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h6 className="text-center my-2 feedBackText">
                      <b>FEEDBACK</b>
                    </h6>
                    <br />
                  </div>
                </div>
                <div className="mt-5">
                  <button className="CButton">
                    {loading ? (
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      />
                    ) : (
                      <span className="sr-only">SUBMIT</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AddProductsL3;
