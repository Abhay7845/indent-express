/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Loader from "../../Common/Loader";
import ShowImage from "./ShowImage";
import "../../Style/ShowImage.css";
import axios from "axios";
import swal from "sweetalert";
import ChooseDynamicTag from "./ChooseDynamicTag";
import BangleMultiUOMSize from "./BangleMultiUOMSize";
import { HostManager } from "../../APIList/HotMaster";
import ChooseMultiSize from "./ChooseMultiSize";
import TableDataDetails from "./TableDataDetails";
import IndentQuantityFiled from "./IndentQuantityFiled";
import StoneQualityDropdown from "../../Common/StoneQualityDropdown";
import StoneQualityTable from "./StoneQualityTable";
import { IMAGE_URL } from "../../Data/DataList";

const AddProductsL3 = (props) => {
  const [loading, setLoading] = useState(false);
  const [option, setOption] = useState([]);
  const [SizeState, setSizeState] = useState([]);
  const [CoupleGentsSize, setCoupleGentsSize] = useState([]);
  const [CoupleLadiesSize, setCoupleLadiesSize] = useState([]);
  const storeCode = localStorage.getItem("indent-expressId");
  // INPUT FILED VALUE VARIABLE
  const [tagQuantity, SetTagQuantity] = useState([]);
  const [sizeUomQuantity, SetSizeUomQuantityRes] = useState([]);
  const [sizeQuantity, setSizeQuantityRes] = useState([]);
  const [findingsRes, setFindingsRes] = useState("");
  const [stoneQuality, setStoneQualityRes] = useState("");
  const [indentQuantity, setIndentQuantityRes] = useState("");
  const [typeSet2, setTypeSet2Res] = useState("");
  const [coupleBandValue, setCoupleBandValue] = useState("");
  const { singleProductsDetails } = props;
  const { itemCode, videoLink } = singleProductsDetails;
  const digit = !itemCode ? "" : itemCode[6];
  const imageCode = !itemCode ? "" : itemCode.substring(2, 9);
  const imageURL = `${IMAGE_URL}${imageCode}`;

  // STONE QUANTITY DATA
  const SI_2GH = singleProductsDetails.si2Gh;
  const VS_GH = singleProductsDetails.vsGh;
  const VVS1 = singleProductsDetails.vvs1;
  const I2_GH = singleProductsDetails.i2Gh;
  const SI2_IJ = singleProductsDetails.si2Ij;
  const stoneTableData = [SI_2GH, VS_GH, VVS1, I2_GH, SI2_IJ];
  const stoneDropdown = stoneTableData.filter((item) => !item === false);

  // FINDINGS OPTIONS
  const findings = singleProductsDetails.findings;
  const findingsOptions = !findings ? [""] : findings.split(",");
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

  // DROPDOWN SIZE FOR NORMAL
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
          setSizeState([]);
        }
      })
      .catch((error) => console.log("error==>", error));
  }, [itemCode]);

  useEffect(() => {
    axios
      .get(
        `${HostManager.reportsL1L2}/INDENTL3/express/L3/dropdown/couple/band/${itemCode}/COUPLE%20GENTS`
      )
      .then((res) => res)
      .then((result) => {
        if (result.data.Code === "1000") {
          setCoupleGentsSize(result.data.value);
        } else if (result.data.Code === "1001") {
          setCoupleGentsSize([]);
        }
      })
      .catch((error) => console.log("error==>", error));
  }, [itemCode]);
  useEffect(() => {
    axios
      .get(
        `${HostManager.reportsL1L2}/INDENTL3/express/L3/dropdown/couple/band/${itemCode}/COUPLE%20LADIES`
      )
      .then((res) => res)
      .then((result) => {
        if (result.data.Code === "1000") {
          setCoupleLadiesSize(result.data.value);
        } else if (result.data.Code === "1001") {
          setCoupleLadiesSize([]);
        }
      })
      .catch((error) => console.log("error==>", error));
  }, [itemCode]);

  const GetTagFiledValues = (getTagSize) => {
    SetTagQuantity(getTagSize);
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
    setIndentQuantityRes(lastNumber);
  };

  // ADD TO CART PRODUCTS
  const AddProductsToCard = () => {
    setLoading(true);
    const AddToCardProduct = {
      category: singleProductsDetails.category,
      childNodesE: singleProductsDetails.childNodesE,
      childNodesN: singleProductsDetails.childNodesN,
      childNodeF: singleProductsDetails.childNodeF,
      childNodeH: singleProductsDetails.childNodeH,
      childNodeK: singleProductsDetails.childNodeK,
      childNodeV: singleProductsDetails.childNodeV,
      collection: singleProductsDetails.collection,
      consumerbase: singleProductsDetails.consumerBase,
      indCategory: singleProductsDetails.category,
      indentLevelType: singleProductsDetails.indentLevelType,
      itemCode: singleProductsDetails.itemCode,
      itgroup: singleProductsDetails.itGroup,
      npimEventNo: singleProductsDetails.npimEventNo,
      reasons: singleProductsDetails.reasons,
      rsoName: singleProductsDetails.rsoName,
      saleable: singleProductsDetails.saleable,
      stoneQualityVal: null,
      set2Type: typeSet2,
      indQty: indentQuantity,
      sizeQuantitys: sizeQuantity,
      sizeUomQuantitys: sizeUomQuantity,
      findings: findingsRes,
      stoneQuality: stoneQuality,
      tagQuantitys: tagQuantity,
      strCode: storeCode,
      submitStatus: singleProductsDetails.submitStatus,
    };
    axios
      .post(
        `${HostManager.reportsL1L2}/INDENTL3/express/insert/responses/from/L3`,
        AddToCardProduct
      )
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          swal({
            title: "Success!",
            text: "Your Data Has been Added To Cart Successfully",
            icon: "success",
            buttons: "OK",
          });
        }
        if (response.data.code === "1001") {
          alert("Your Data Has been Added To Cart Successfully");
          swal({
            title: "Warning",
            text: "No more data available for the selected category",
            icon: "warning",
            buttons: "OK",
          });
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log("error==>", error);
        setLoading(false);
      });
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
                    findingsOptions={findingsOptions}
                  />
                ) : (
                  ""
                )}
                {digit === "V" && (
                  <BangleMultiUOMSize
                    optionsList={SizeState}
                    GetUomSizeQuantity={GetUomSizeQuantity}
                  />
                )}
                {!singleProductsDetails.category ? (
                  ""
                ) : singleProductsDetails.category
                    .toUpperCase()
                    .replace(/\s{2,}/g, " ")
                    .trim() === "FINGER RING" ? (
                  <ChooseMultiSize
                    optionsList={SizeState}
                    singleProductsDetails={singleProductsDetails}
                    GetChooseSizeData={GetChooseSizeData}
                  />
                ) : (
                  ""
                )}
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
                {digit === "N" ||
                digit === "O" ||
                digit === "X" ||
                digit === "H" ||
                digit === "J" ||
                digit === "S" ||
                digit === "W" ||
                digit === "E" ||
                digit === "P" ||
                digit === "Y" ||
                digit === "K" ||
                digit === "A" ||
                digit === "G" ? (
                  <IndentQuantityFiled
                    GetIndentQuantityValue={GetIndentQuantityValue}
                    indentQuantity={indentQuantity}
                  />
                ) : (
                  ""
                )}

                {!singleProductsDetails.category
                  ? ""
                  : singleProductsDetails.category
                      .toUpperCase()
                      .replace(/\s{2,}/g, " ")
                      .trim() === "COUPLE BAND" && (
                      <div>
                        <select
                          className="L3SelectDropdown"
                          onChange={(e) => setCoupleBandValue(e.target.value)}
                        >
                          <option value="">CHOOSE COUPLE TAG</option>
                          <option value="Single_Tag">SINGLE TAG</option>
                          <option value="Separate_Tag">SEPARATE TAG</option>
                        </select>
                        {coupleBandValue === "Single_Tag" && (
                          <div className="mt-2">
                            <ChooseMultiSize
                              optionsList={SizeState}
                              singleProductsDetails={singleProductsDetails}
                              GetChooseSizeData={GetChooseSizeData}
                            />
                          </div>
                        )}
                        {coupleBandValue === "Separate_Tag" && (
                          <div className="my-1">
                            <span className="text-primary">FOR GENTS</span>
                            <ChooseMultiSize
                              optionsList={CoupleGentsSize}
                              singleProductsDetails={singleProductsDetails}
                              GetChooseSizeData={GetChooseSizeData}
                            />
                            <span className="text-primary mt-2">
                              FOR LADIES
                            </span>
                            <ChooseMultiSize
                              optionsList={CoupleLadiesSize}
                              singleProductsDetails={singleProductsDetails}
                              GetChooseSizeData={GetChooseSizeData}
                            />
                          </div>
                        )}
                      </div>
                    )}
                {stoneDropdown.length > 0 && (
                  <StoneQualityDropdown
                    optionsList={stoneDropdown}
                    GetStoneData={GetStoneData}
                    singleProductsDetails={singleProductsDetails}
                  />
                )}
              </div>
            </div>
            {stoneDropdown.length > 0 && (
              <StoneQualityTable tableRowData={singleProductsDetails} />
            )}

            <div className="mt-1">
              <button
                className="CButton"
                data-bs-dismiss="modal"
                onClick={AddProductsToCard}
              >
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
