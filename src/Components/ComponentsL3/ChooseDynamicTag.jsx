import React, { useState, useEffect } from "react";
import axios from "axios";
import { useStyles } from "../../Style/StyleJsx/ChooseDynamicTag";
import Multiselect from "multiselect-react-dropdown";
import { HostManager } from "../../APIList/HotMaster";
import BangleMultiUOMSize from "./BangleMultiUOMSize";
import FindingDropdown from "../../Common/FindingDropdown";

const ChooseDynamicTag = (props) => {
  const classes = useStyles();
  const [sizeRow, setSizeRow] = useState();
  const [ChildNodeV, setChildNodeV] = useState([]);
  const [ChildNodesN, setChildNodesN] = useState([]);
  const {
    singleProductsDetails,
    optionsList,
    GetTagFiledValues,
    GetUomSizeQuantity,
    GetFindingData,
    SizeState,
    findingsOptions,
  } = props;

  const setType2option = ["Chain", "Dori"];
  console.log("props==>", props);
  useEffect(() => {
    if (optionsList)
      setImmediate(() => {
        setSizeRow(
          optionsList.reduce(
            (total, value) => ({ ...total, [value[1]]: false }),
            {}
          )
        );
      });
  }, [optionsList]);

  const childNodeV = singleProductsDetails.childNodeV;
  useEffect(() => {
    axios
      .get(
        `${HostManager.reportsL1L2}/INDENTL3/express/size/dropdown/${childNodeV}`
      )
      .then((res) => res)
      .then((result) => {
        if (result.data.code === "1000") {
          setChildNodeV(result.data.value);
        }
        if (result.data.code === "1001") {
          console.log("Size Not Available");
        }
      })
      .catch((error) => console.log("error==>", error));
  }, [childNodeV]);

  const childNodeN = singleProductsDetails.childNodesN;
  useEffect(() => {
    axios
      .get(
        `${HostManager.reportsL1L2}/INDENTL3/express/size/dropdown/${childNodeN}`
      )
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          setChildNodesN(response.data.value);
        } else {
          console.log("Data Not Found");
        }
      })
      .catch((error) => console.log("error==>", error));
  }, [childNodeN]);

  const options = optionsList.map((element) => {
    return {
      valueData: element,
      labelValue: element,
    };
  });
  const fingerRingSize = SizeState.map((element) => {
    return {
      valueData: element,
      labelValue: element,
    };
  });
  const ChildNodeN = ChildNodesN.map((element) => {
    return {
      valueData: element,
      labelValue: element,
    };
  });

  const optionsOnlyE = ["Only_EARRING"];
  const optionE = optionsOnlyE.map((element) => {
    return {
      valueData: element,
      labelValue: element,
    };
  });
  const optionsOnlyF = ["Only_FINGER_RING"];
  const optionF = optionsOnlyF.map((element) => {
    return {
      valueData: element,
      labelValue: element,
    };
  });
  const optionsOnlyM = ["Only_MANGALSUTRA"];
  const optionM = optionsOnlyM.map((element) => {
    return {
      valueData: element,
      labelValue: element,
    };
  });
  const optionsOnlyV = ["Only_BANGLE"];
  const optionV = optionsOnlyV.map((element) => {
    return {
      valueData: element,
      labelValue: element,
    };
  });
  const optionsOnlyN = ["Only_NECKWEAR"];
  const optionN = optionsOnlyN.map((element) => {
    return {
      valueData: element,
      labelValue: element,
    };
  });

  const enableRows = (name, value) => {
    setSizeRow(function (old) {
      return {
        ...old,
        [name]: value,
      };
    });
  };
  const onInternalSelectChange = (selectedList, selectedItem) => {
    console.log("selected item for Add", selectedItem.labelValue);
    enableRows(selectedItem.labelValue, true);
  };

  const onInternalRemoveChange = (selectedList, removedItem) => {
    console.log("selected item for remove", removedItem.labelValue);
    enableRows(removedItem.labelValue, false);
  };
  const rowHandlerChange = (event) => {
    let getData = [];
    let count = 0;
    for (let rowName in sizeRow) {
      if (sizeRow[rowName]) {
        getData[count++] = {
          size: rowName,
          quantity: document.getElementById(`${rowName}sq`).value,
        };
      }
    }
    return GetTagFiledValues(getData);
  };
  const enableRow = (labelValue) => {
    for (let rowName in sizeRow) {
      if (rowName === labelValue && sizeRow[rowName]) {
        return true;
      }
    }
    return false;
  };

  return (
    <>
      <Multiselect
        options={options}
        displayValue="labelValue"
        onSelect={onInternalSelectChange}
        onRemove={onInternalRemoveChange}
        showCheckbox={true}
        closeOnSelect={true}
        placeholder="Choose Tag"
        disablePreSelectedValues={true}
      />
      <table className="w-100">
        <tbody className="d-flex">
          {options.map((row, index) => (
            <tr
              key={index}
              onChange={rowHandlerChange}
              id={row.labelValue}
              className={
                enableRow(row.labelValue) ? classes.show : classes.hide
              }
            >
              <td className="w-100">
                <input
                  type="text"
                  maxLength="1"
                  id={`${row.labelValue}sq`}
                  name={`${row.labelValue}sq`}
                  className={
                    row.labelValue === "Only_BANGLE" ||
                    row.labelValue === "Only_FINGER_RING" ||
                    row.labelValue === "Only_MANGALSUTRA"
                      ? classes.hide
                      : classes.inputField
                  }
                  placeholder={row.labelValue}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table style={{ width: "100%", margin: 0 }}>
        <tbody>
          {optionE.map((row, index) => (
            <tr
              key={index}
              onChange={rowHandlerChange}
              id={row.labelValue}
              className={
                enableRow(row.labelValue) ? classes.showDropdown : classes.hide
              }
            >
              <td className="w-100">
                {singleProductsDetails.findings && (
                  <FindingDropdown
                    labelName="Findings"
                    GetFindingData={GetFindingData}
                    optionsList={findingsOptions}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table style={{ width: "100%", margin: 0 }}>
        <tbody>
          {optionF.map((row, index) => (
            <tr
              key={index}
              onChange={rowHandlerChange}
              id={row.labelValue}
              className={
                enableRow(row.labelValue) ? classes.showDropdown : classes.hide
              }
            >
              <td className="w-100">
                <Multiselect
                  options={SizeState}
                  displayValue="labelValue"
                  onSelect={onInternalSelectChange}
                  onRemove={onInternalRemoveChange}
                  showCheckbox={true}
                  closeOnSelect={true}
                  placeholder="Choose Size"
                  disablePreSelectedValues={true}
                />
                <table className="w-100">
                  <tbody className="d-flex">
                    {fingerRingSize.map((row, index) => (
                      <tr
                        key={index}
                        onChange={rowHandlerChange}
                        id={row.labelValue}
                        className={
                          enableRow(row.labelValue)
                            ? classes.show
                            : classes.hide
                        }
                      >
                        <td className="w-100">
                          <input
                            type="text"
                            maxLength="1"
                            id={`${row.labelValue}sq`}
                            name={`${row.labelValue}sq`}
                            className={classes.inputField}
                            placeholder={row.labelValue}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table style={{ width: "100%", margin: 0 }}>
        <tbody>
          {optionM.map((row, index) => (
            <tr
              key={index}
              onChange={rowHandlerChange}
              id={row.labelValue}
              className={
                enableRow(row.labelValue) ? classes.showDropdown : classes.hide
              }
            >
              <td className="w-100">
                <Multiselect
                  options={ChildNodesN}
                  displayValue="labelValue"
                  onSelect={onInternalSelectChange}
                  onRemove={onInternalRemoveChange}
                  showCheckbox={true}
                  closeOnSelect={true}
                  placeholder="Choose Size"
                  disablePreSelectedValues={true}
                />
                <table className="w-100">
                  <tbody className="d-flex">
                    {ChildNodeN.map((row, index) => (
                      <tr
                        key={index}
                        onChange={rowHandlerChange}
                        id={row.labelValue}
                        className={
                          enableRow(row.labelValue)
                            ? classes.show
                            : classes.hide
                        }
                      >
                        <td className="w-100">
                          <input
                            type="text"
                            maxlength="1"
                            id={`${row.labelValue}sq`}
                            name={`${row.labelValue}sq`}
                            className={classes.inputField}
                            placeholder={row.labelValue}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table style={{ width: "100%", margin: 0 }}>
        <tbody>
          {optionV.map((row, index) => (
            <tr
              key={index}
              onChange={rowHandlerChange}
              id={row.labelValue}
              className={
                enableRow(row.labelValue) ? classes.showDropdown : classes.hide
              }
            >
              <td className="w-100">
                <BangleMultiUOMSize
                  optionsList={ChildNodeV}
                  GetUomSizeQuantity={GetUomSizeQuantity}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="w-100">
        <tbody>
          {optionN.map((row, index) => (
            <tr
              key={index}
              onChange={rowHandlerChange}
              id={row.labelValue}
              className={
                enableRow(row.labelValue) ? classes.showDropdown : classes.hide
              }
            >
              <td className="w-100">
                <FindingDropdown
                  onChangeHandler={GetFindingData}
                  optionsList={setType2option}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ChooseDynamicTag;
