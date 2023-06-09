/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Loader from "../../Common/Loader";
import ShowImage from "./ShowImage";
import "../../Style/ShowImage.css";
import ChooseDynamicTag from "./ChooseDynamicTag";
import BangleMultiUOMSize from "./BangleMultiUOMSize";
import { HostManager } from "../../APIList/HotMaster";
import axios from "axios";
import ChooseMultiSize from "./ChooseMultiSize";
import TableDataDetails from "./TableDataDetails";
import IndentQuantityFiled from "./IndentQuantityFiled";
import FindingDropdown from "../../Common/FindingDropdown";
import StoneQualityDropdown from "../../Common/StoneQualityDropdown";
import Set2TypeDropdown from "../../Common/Set2TypeDropdown";
import StoneQualityTable from "./StoneQualityTable";

const AddProductsL3 = (props) => {
  const [loading, setLoading] = useState(false);
  const [option, setOption] = useState([]);
  const [SizeState, setSizeState] = useState([]);
  // INPUT FILED VALUE VARIABLE
  const [tagQuantitys, SetTagQuantitys] = useState([]);
  const [sizeUomQuantityRes, SetSizeUomQuantityRes] = useState([]);
  const [sizeQuantityRes, setSizeQuantityRes] = useState([]);
  const [findingsRes, setFindingsRes] = useState("");
  const [stoneQualityRes, setStoneQualityRes] = useState("");
  const [quantityRes, setQuantityRes] = useState("");
  const [typeSet2Res, setTypeSet2Res] = useState("");

  console.log("tagQuantitys==>", tagQuantitys);
  console.log("sizeUomQuantityRes==>", sizeUomQuantityRes);
  console.log("sizeQuantityRes==>", sizeQuantityRes);
  console.log("findingsRes==>", findingsRes);
  console.log("quantityRes==>", quantityRes);
  console.log("stoneQualityRes==>", stoneQualityRes);
  console.log("typeSet2Res==>", typeSet2Res);

  const { singleProductsDetails } = props;
  const { itemCode, videoLink } = singleProductsDetails;
  const digit = !itemCode ? "" : itemCode[6];
  console.log("option==>", option);
  const imageCode = !itemCode ? "" : itemCode.substring(2, 9);
  const imageURL = `https://jewbridge.titanjew.in/CatalogImages/api/ImageFetch/?Type=ProductImages&ImageName=${imageCode}`;

  const findings = singleProductsDetails.findings;
  const findingsOptions = !findings ? [""] : findings.split(",");

  const AddProductsToCard = () => {
    setLoading(false);
  };
  // DYNAMIC TAG
  const finger = !singleProductsDetails.childNodeF ? "" : "Only_FINGER_RING";
  const harm = !singleProductsDetails.childNodeH ? "" : "Only_HARAM";
  const Tikka = !singleProductsDetails.childNodeK ? "" : "Only_TIKKA";
  const other = !singleProductsDetails.childNodeO ? "" : "Only_OTHER";
  const bangle = !singleProductsDetails.childNodeV ? "" : "Only_BANGLE";
  const earing = !singleProductsDetails.childNodesE ? "" : "Only_EARRING";
  const neckwear = !singleProductsDetails.childNodesN ? "" : "Only_NECKWEAR";

  const optionForOtherAllSet = [
    "Single_Tag",
    "Separate_Tag",
    earing,
    neckwear,
    harm,
    Tikka,
    other,
    finger,
    bangle,
  ];
  const tagsOptions = optionForOtherAllSet.filter((item) => !item === false);
  const optionForSet0 = [
    "Single_Tag",
    "Separate_Tag",
    "Only_EARRING",
    "Only_CHAIN_WITH_PENDANT",
  ];
  const optionForSet1 = [
    "Single_Tag",
    "Separate_Tag",
    "Only_EARRING",
    "Only_NECKWEAR_OR_PENDANT",
  ];
  const tagsTCategory = [
    "Single_Tag",
    "Separate_Tag",
    "Only_EARRING",
    "Only_MANGALSUTRA",
  ];
  useEffect(() => {
    if (digit === "0") {
      setOption(optionForSet0);
    }
    if (digit === "1") {
      setOption(optionForSet1);
    }
    if (digit === "T") {
      setOption(tagsTCategory);
    }
    if (
      digit === "2" ||
      digit === "3" ||
      digit === "4" ||
      digit === "5" ||
      digit === "6" ||
      digit === "7"
    ) {
      setOption(tagsOptions);
    }
  }, [digit]);

  useEffect(() => {
    axios
      .get(
        `${HostManager.reportsL1L2}/INDENTL3/express/size/dropdown/${itemCode}`
      )
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          setSizeState(response.data.value);
        } else if (response.data.code === "1001") {
          console.log("Size Not Found");
        }
      })
      .catch((error) => console.log("error==>", error));
  }, [itemCode]);

  const GetTagFiledValues = (getTagSize) => {
    SetTagQuantitys(getTagSize);
  };
  const GetUomSizeQuantity = (getUMOSize) => {
    SetSizeUomQuantityRes(getUMOSize);
  };
  const GetChooseSizeData = (getSizeData) => {
    setSizeQuantityRes(getSizeData);
  };
  const GetFindingData = (findingValue) => {
    setFindingsRes(findingValue.target.value);
  };
  const GetStoneData = (stoneValue) => {
    setStoneQualityRes(stoneValue.target.value);
  };
  const GetSet2TypeData = (set2TypeValue) => {
    setTypeSet2Res(set2TypeValue.target.value);
  };

  const GetIndentQuantityValue = (indentQuantity) => {
    const newValue = indentQuantity.target.value;
    const lastNumber = parseInt(newValue.toString().slice(-1));
    setQuantityRes(lastNumber);
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
                {digit === "0" ||
                digit === "1" ||
                digit === "2" ||
                digit === "3" ||
                digit === "4" ||
                digit === "5" ||
                digit === "6" ||
                digit === "7" ? (
                  <ChooseDynamicTag
                    optionsList={option}
                    singleProductsDetails={singleProductsDetails}
                    GetTagFiledValues={GetTagFiledValues}
                    GetUomSizeQuantity={GetUomSizeQuantity}
                    GetFindingData={GetFindingData}
                    SizeState={SizeState}
                    GetSet2TypeData={GetSet2TypeData}
                  />
                ) : (
                  ""
                )}
                {digit === "V" ? (
                  <BangleMultiUOMSize
                    optionsList={SizeState}
                    GetUomSizeQuantity={GetUomSizeQuantity}
                  />
                ) : (
                  ""
                )}

                {digit === "F" ? (
                  <ChooseMultiSize
                    optionsList={["A", "B", "C"]}
                    singleProductsDetails={singleProductsDetails}
                    GetChooseSizeData={GetChooseSizeData}
                  />
                ) : (
                  ""
                )}
                <br />
                {digit === "0" ||
                digit === "1" ||
                digit === "2" ||
                digit === "3" ||
                digit === "4" ||
                digit === "5" ||
                digit === "6" ||
                digit === "7" ? (
                  <TableDataDetails
                    singleProductsDetails={singleProductsDetails}
                  />
                ) : (
                  ""
                )}
                <br />
                <IndentQuantityFiled
                  GetIndentQuantityValue={GetIndentQuantityValue}
                  quantityRes={quantityRes}
                />
                <br />
                {singleProductsDetails.findings && (
                  <FindingDropdown
                    optionsList={findingsOptions}
                    GetFindingData={GetFindingData}
                  />
                )}
                <br />
                <StoneQualityDropdown
                  optionsList={["stone1", "stone2", "stone3"]}
                  GetStoneData={GetStoneData}
                />
                <br />
                <Set2TypeDropdown
                  optionsList={["Chain", "Dori"]}
                  GetSet2TypeData={GetSet2TypeData}
                />
              </div>
            </div>
            <StoneQualityTable />
            <div className="mt-1">
              <button className="CButton" onClick={AddProductsToCard}>
                {loading ? (
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : (
                  <span className="sr-only">ADD TO CART</span>
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
