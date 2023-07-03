/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import TableDataDownload from "./TableDataDownload";
import * as Icon from "react-bootstrap-icons";
import "../Style/TableForAll.css";
import axios from "axios";
import swal from "sweetalert";
import ChooseDynamicTag from "../Components/ComponentsL3/ChooseDynamicTag";
import BangleMultiUOMSize from "../Components/ComponentsL3/BangleMultiUOMSize";
import { HostManager } from "../APIList/HotMaster";
import IndentQuantityFiled from "../Components/ComponentsL3/IndentQuantityFiled";
import ChooseMultiSize from "../Components/ComponentsL3/ChooseMultiSize";
import StoneQualityTable from "../Components/ComponentsL3/StoneQualityTable";
import StoneQualityDropdown from "./StoneQualityDropdown";
import CommonImage from "./CommonImage";
import { IMAGE_URL } from "../Data/DataList";
import ShowImage from "../Components/ComponentsL3/ShowImage";
import Loader from "./Loader";

const CardTableList = (props) => {
  const { reportsName } = props;
  const [loading, setLoading] = useState(false);
  const storeCode = localStorage.getItem("indent-expressId");
  const [searchItemCode, setSearchItemCode] = useState("");
  const [option, setOption] = useState([]);
  const [coupleBandValue, setCoupleBandValue] = useState("");
  const [reportRowTable, setReportRowTable] = useState({});
  const [SizeState, setSizeState] = useState([]);
  const [CoupleGentsSize, setCoupleGentsSize] = useState([]);
  const [CoupleLadiesSize, setCoupleLadiesSize] = useState([]);
  const [col, setCol] = useState([]);
  const [rows, setRows] = useState([]);
  const [cardDeletedRows, setCardDeletedRows] = useState({});
  // INPUT FILED VALUE VARIABLE
  const [tagQuantity, SetTagQuantity] = useState([]);
  const [sizeUomQuantity, SetSizeUomQuantity] = useState([]);
  const [sizeQuantity, setSizeQuantity] = useState([]);
  const [findingsRes, setFindings] = useState("");
  const [stoneQuality, setStoneQuality] = useState("");
  const [indentQuantity, setIndentQuantity] = useState("");
  const [typeSet2, setTypeSet2] = useState("");
  const { itemCode } = reportRowTable;
  const digit = !itemCode ? "" : itemCode[6];
  const imageCode = !itemCode ? "" : itemCode.substring(2, 9);
  const imageURL = `${IMAGE_URL}${imageCode}`;

  // STONE QUANTITY DATA
  const SI_2GH = reportRowTable.si2Gh;
  const VS_GH = reportRowTable.vsGh;
  const VVS1 = reportRowTable.vvs1;
  const I2_GH = reportRowTable.i2Gh;
  const SI2_IJ = reportRowTable.si2Ij;
  const stoneTableData = [SI_2GH, VS_GH, VVS1, I2_GH, SI2_IJ];
  const stoneDropdown = stoneTableData.filter((item) => !item === false);

  const finger = !reportRowTable.childNodeF ? "" : "Only_FINGER_RING";
  const harm = !reportRowTable.childNodeH ? "" : "Only_HARAM";
  const Tikka = !reportRowTable.childNodeK ? "" : "Only_TIKKA";
  const other = !reportRowTable.childNodeO ? "" : "Only_OTHER";
  const bangle = !reportRowTable.childNodeV ? "" : "Only_BANGLE";
  const earing = !reportRowTable.childNodesE ? "" : "Only_EARRING";
  const neckwear = !reportRowTable.childNodesN ? "" : "Only_NECKWEAR";

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

  // CARD REPORTS DATA
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${HostManager.reportsL1L2}/INDENTL3/express/item/wise/rpt/L3/${storeCode}`
      )
      .then((res) => res)
      .then((response) => {
        console.log("response1234==>", response.data.value);
        if (response.data.code === "1000") {
          setCol(response.data.coloum);
          setRows(response.data.value);
        }
        if (response.data.code === "1001") {
          setCol([]);
          setRows([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log("error=>", error);
        setLoading(false);
      });
  }, [storeCode, cardDeletedRows.id, reportRowTable.id]);

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

  const DeleteRow = (DeleteRow) => {
    setLoading(true);
    setCardDeletedRows(DeleteRow);
    const DeleRowInputData = {
      itemCode: DeleteRow.itemCode,
      strCode: storeCode,
      saleable: "",
      exIndCategory: !DeleteRow.indCategory ? "" : DeleteRow.indCategory,
      exStonequality: !DeleteRow.stoneQuality ? "0-0" : DeleteRow.stoneQuality,
      indCategory: "0",
      indQty: "0",
      size: "0",
      uom: "0",
      stoneQuality: "0-0",
      npimEventNo: "1",
      exUOM: !DeleteRow.uom ? "" : DeleteRow.uom,
      exSize: !DeleteRow.size ? "" : DeleteRow.size,
      findings: "",
      reasons: "",
      rsoName: "",
      set2Type: "",
      IndentLevelType: "L3",
      stoneQualityVal: "0",
      submitStatus: "report",
      sizeUomQuantitys: [],
      sizeQuantitys: [],
      tagQuantitys: [],
    };
    console.log("DeleRowInputData==>", DeleRowInputData);
    axios
      .post(
        `${HostManager.reportsL1L2}/INDENTL3/express/update/responses/from/L3`,
        DeleRowInputData
      )
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          swal({
            title: "Success",
            text: "Cancel Indent Has been Successful",
            icon: "success",
            buttons: "OK",
          });
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log("");
      });
  };
  const UpdateRowData = (UpdateRow) => {
    window.scrollTo({ top: "0", behavior: "smooth" });
    setReportRowTable(UpdateRow);
  };

  const DataRows = rows.filter((eachRow) =>
    eachRow.itemCode.includes(searchItemCode.toUpperCase())
  );

  //GET INPUT VALUES
  const GetTagFiledValues = (getTagSize) => {
    SetTagQuantity(getTagSize);
  };
  const GetUomSizeQuantity = (getUMOSize) => {
    SetSizeUomQuantity(getUMOSize);
  };
  const GetChooseSizeData = (getSizeData) => {
    setSizeQuantity(getSizeData);
  };
  const GetFindingData = (findingValue) => {
    setFindings(findingValue.target.value);
  };
  const GetStoneData = (stoneValue) => {
    setStoneQuality(stoneValue.target.value);
  };
  const GetSet2TypeData = (set2TypeValue) => {
    setTypeSet2(set2TypeValue.target.value);
  };

  const GetIndentQuantityValue = (indentQuantity) => {
    const newValue = indentQuantity.target.value;
    const lastNumber = parseInt(newValue.toString().slice(-1));
    setIndentQuantity(lastNumber);
  };

  // CANCEL INDENT API CALLING
  const CancelIndent = () => {
    setLoading(true);
    const CancelIndentInputsData = {
      itemCode: reportRowTable.itemCode,
      strCode: storeCode,
      saleable: "",
      exIndCategory: !reportRowTable.indCategory
        ? ""
        : reportRowTable.indCategory,
      exStonequality: !reportRowTable.stoneQuality
        ? "0-0"
        : reportRowTable.stoneQuality,
      indCategory: "0",
      indQty: "0",
      size: "0",
      uom: "0",
      stoneQuality: "0-0",
      npimEventNo: "1",
      exUOM: !reportRowTable.uom ? "" : reportRowTable.uom,
      exSize: !reportRowTable.size ? "" : reportRowTable.size,
      findings: "",
      reasons: "",
      rsoName: "",
      set2Type: "",
      IndentLevelType: "L3",
      stoneQualityVal: "0",
      submitStatus: "report",
      sizeUomQuantitys: [],
      sizeQuantitys: [],
      tagQuantitys: [],
    };
    console.log("CancelIndentInputsData==>", CancelIndentInputsData);
    axios
      .post(
        `${HostManager.reportsL1L2}/INDENTL3/express/update/responses/from/L3`,
        CancelIndentInputsData
      )
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          swal({
            title: "Success",
            text: "Cancel Indent Has been Successful",
            icon: "success",
            buttons: "OK",
          });
        }
        setReportRowTable("");
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log("");
      });
  };

  const UpdateTableRowData = () => {
    setLoading(true);
    const UpdateInputData = {
      itemCode: reportRowTable.itemCode,
      strCode: storeCode,
      saleable: "",
      reasons: "",
      childNodesE: reportRowTable.childNodesE,
      childNodesN: reportRowTable.childNodesN,
      childNodeF: reportRowTable.childNodeF,
      childNodeK: reportRowTable.childNodeK,
      childNodeV: reportRowTable.childNodeV,
      childNodeH: reportRowTable.childNodeH,
      childNodeO: reportRowTable.childNodeO,
      indCategory: reportRowTable.category,
      submitStatus: "report",
      stoneQualityVal: reportRowTable.stoneQualityVal,
      rsoName: "",
      npimEventNo: 1,
      indentLevelType: "L3",
      collection: "",
      consumerbase: reportRowTable.needState,
      itgroup: reportRowTable.itGroup,
      category: reportRowTable.category,
      exSize: reportRowTable.size,
      exUOM: reportRowTable.uom,
      exIndCategory: reportRowTable.indCategory,
      set2Type: typeSet2,
      indQty: indentQuantity,
      stoneQuality: stoneQuality,
      exStonequality: reportRowTable.stoneQuality,
      findings: findingsRes,
      sizeUomQuantitys: sizeUomQuantity,
      sizeQuantitys: sizeQuantity,
      tagQuantitys: tagQuantity,
    };
    axios
      .post(
        `${HostManager.reportsL1L2}/INDENTL3/express/update/responses/from/L3`,
        UpdateInputData
      )
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          swal({
            title: "Success",
            text: "Your Data Has been Updated Successfully",
            icon: "success",
            buttons: "OK",
          });
        }
        if (response.data.code === "1001") {
          swal({
            title: "error",
            text: "Your Data is Not Updated",
            icon: "error",
            buttons: "OK",
          });
        }
        setReportRowTable("");
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };
  // CONFIRM MAIL API CALLING
  const ConfirmMailData = rows.filter(
    (item) => item.confirmationStatus !== "Successful"
  );

  const ConfirmMail = () => {
    setLoading(true);
    axios
      .post(
        `${HostManager.reportsL1L2}/INDENTL3/express/item/wise/rpt/edr/L3/${storeCode}`,
        ConfirmMailData
      )
      .then((res) => res)
      .then((response) => {
        console.log("response==>", response.data);
        if (response.data.code === "1000") {
          swal({
            title: "Success",
            text: "Success",
            icon: "success",
            buttons: "OK",
          });
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log("");
        setLoading(false);
      });
  };

  // SEND MAIL API CALLING
  const SendMail = () => {
    setLoading(true);
    axios
      .get(
        `${HostManager.reportsL1L2}/INDENTL3/express/L3/mail/content/${storeCode}`
      )
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          const success =
            "Thankyou for completing the Indent Confirmation Process successfully";
          const error =
            "There was an error in Triggering email Please try Again";
          const msg =
            response.data.value.storeNPIMStatus === "LOCKED"
              ? `${response.data.value.storeNPIMStatus}, And Mail Already Sent`
              : response.data.mailStatus === "Sent successfully"
              ? success
              : error;
          swal({
            title: "Success",
            text: msg,
            icon: "success",
            buttons: "OK",
          });
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log("");
        setLoading(false);
      });
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
                    onClick={() => UpdateRowData(params.row)}
                  />
                  <Icon.Trash
                    className="DeleteButton"
                    onClick={() => DeleteRow(params.row)}
                  />
                </div>
              )}
              {reportsName === "Cancel_Item_List" && (
                <Icon.PencilSquare
                  className="EditButton"
                  onClick={() => UpdateRowData(params.row)}
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
        renderCell: (params) => {
          return <CommonImage itemCode={params.row.itemCode} />;
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
  return (
    <>
      {loading === true && <Loader />}
      {reportRowTable.itemCode === undefined ? (
        ""
      ) : (
        <div className="row row-cols-1 row-cols-md-2 mx-1 my-3">
          <div className="col-md-5">
            <ShowImage imageURL={imageURL} />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5
                className="text-center p-1 itemCodeText"
                style={{ backgroundColor: "#f5ea84" }}
              >
                {reportRowTable.itemCode}
              </h5>
              <div className="row my-3">
                <div className="col-md-6">
                  <div>
                    <h6 className="text-center my-2">
                      <b>PRODUCT DESCRIPTION</b>
                    </h6>
                    <br />
                    <table className="w-100">
                      <tbody className="productsDetailsStyle">
                        <tr>
                          <th>GROUP</th>
                          <td>-</td>
                          <td>{reportRowTable.itGroup}</td>
                        </tr>
                        <tr>
                          <th>CATEGORY</th>
                          <td>-</td>
                          <td>{reportRowTable.category}</td>
                        </tr>
                        <tr>
                          <th>NEED STATE</th>
                          <td>-</td>
                          <td>{reportRowTable.needState}</td>
                        </tr>
                        <tr>
                          <th>STD WT</th>
                          <td>-</td>
                          <td>{reportRowTable.stdWt}</td>
                        </tr>
                        <tr>
                          <th>STD UCP</th>
                          <td>-</td>
                          <td>{reportRowTable.stdUCP}</td>
                        </tr>
                        <tr>
                          <th>IND-CATEGORY</th>
                          <td>-</td>
                          <td>{reportRowTable.indCategory}</td>
                        </tr>
                        <tr>
                          <th>SIZE</th>
                          <td>-</td>
                          <td>{reportRowTable.size}</td>
                        </tr>
                        <tr>
                          <th>UOM</th>
                          <td>-</td>
                          <td>{reportRowTable.uom}</td>
                        </tr>
                        <tr>
                          <th>QUANTITY</th>
                          <td>-</td>
                          <td>{reportRowTable.itemQty}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-md-6">
                  <h6 className="text-center my-2 feedBackText">
                    <b>INDENT DETAILS</b>
                  </h6>
                  <br />
                  {!reportRowTable.category ? (
                    ""
                  ) : reportRowTable.category
                      .toUpperCase()
                      .replace(/\s{2,}/g, " ")
                      .trim() === "T CATEGORY" ||
                    digit === "0" ||
                    digit === "1" ||
                    digit === "2" ||
                    digit === "3" ||
                    digit === "4" ||
                    digit === "5" ||
                    digit === "6" ||
                    digit === "7" ? (
                    <ChooseDynamicTag
                      optionsList={option}
                      reportRowTable={reportRowTable}
                      GetTagFiledValues={GetTagFiledValues}
                      GetUomSizeQuantity={GetUomSizeQuantity}
                      GetFindingData={GetFindingData}
                      GetSet2TypeData={GetSet2TypeData}
                    />
                  ) : (
                    ""
                  )}
                  <div style={{ marginTop: "-15px" }}>
                    {digit === "V" && (
                      <BangleMultiUOMSize
                        optionsList={SizeState}
                        GetUomSizeQuantity={GetUomSizeQuantity}
                      />
                    )}
                  </div>
                  {!reportRowTable.category ? (
                    ""
                  ) : reportRowTable.category
                      .toUpperCase()
                      .replace(/\s{2,}/g, " ")
                      .trim() === "FINGER RING" ||
                    digit === "L" ||
                    digit === "C" ||
                    digit === "Y" ||
                    digit === "B" ? (
                    <div className="mt-3">
                      <ChooseMultiSize
                        optionsList={SizeState}
                        GetChooseSizeData={GetChooseSizeData}
                      />
                    </div>
                  ) : (
                    ""
                  )}

                  {/* TOE RING */}
                  {!reportRowTable.category ? (
                    ""
                  ) : reportRowTable.category
                      .toUpperCase()
                      .replace(/\s{2,}/g, " ")
                      .trim() === "TOE RING" ? (
                    <ChooseMultiSize
                      optionsList={SizeState}
                      GetChooseSizeData={GetChooseSizeData}
                    />
                  ) : (
                    ""
                  )}

                  {!reportRowTable.category
                    ? ""
                    : reportRowTable.category
                        .toUpperCase()
                        .replace(/\s{2,}/g, " ")
                        .trim() === "COUPLE BAND" && (
                        <div className="mt-3">
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
                                GetChooseSizeData={GetChooseSizeData}
                              />
                            </div>
                          )}
                          {coupleBandValue === "Separate_Tag" && (
                            <div className="my-1">
                              <span className="text-primary">FOR GENTS</span>
                              <ChooseMultiSize
                                optionsList={CoupleGentsSize}
                                GetChooseSizeData={GetChooseSizeData}
                              />
                              <span className="text-primary mt-2">
                                FOR LADIES
                              </span>
                              <ChooseMultiSize
                                optionsList={CoupleLadiesSize}
                                GetChooseSizeData={GetChooseSizeData}
                              />
                            </div>
                          )}
                        </div>
                      )}

                  {digit === "N" ||
                  digit === "O" ||
                  digit === "D" ||
                  digit === "X" ||
                  digit === "H" ||
                  digit === "J" ||
                  digit === "S" ||
                  digit === "W" ||
                  digit === "E" ||
                  digit === "P" ||
                  digit === "K" ||
                  digit === "A" ||
                  digit === "G" ? (
                    <div className="mt-3">
                      <IndentQuantityFiled
                        GetIndentQuantityValue={GetIndentQuantityValue}
                        indentQuantity={indentQuantity}
                      />
                    </div>
                  ) : (
                    ""
                  )}

                  {stoneDropdown.length > 0 && (
                    <StoneQualityDropdown
                      optionsList={stoneDropdown}
                      GetStoneData={GetStoneData}
                      singleProductsDetails={reportRowTable}
                    />
                  )}
                </div>
              </div>
              {stoneDropdown.length > 0 && (
                <StoneQualityTable tableRowData={reportRowTable} />
              )}

              <div className="d-flex">
                <button className="CButton mx-1" onClick={CancelIndent}>
                  CANCEL INDENT
                </button>
                <button className="CButton" onClick={UpdateTableRowData}>
                  UPDATE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
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
          <b className="text-primary">COUNT- {DataRows.length}</b>
        </div>
        <div className="col-md-4 confirmButtons">
          <button className="confirmSendmail mx-2" onClick={ConfirmMail}>
            CONFIRM
          </button>
          <button className="confirmSendmail" onClick={SendMail}>
            SEND MAIL
          </button>
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
export default CardTableList;
