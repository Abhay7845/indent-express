import React, { useState, useEffect } from "react";
import axios from "axios";
import { useStyles } from "../../Style/StyleJsx/ChooseDynamicTag";
import Multiselect from "multiselect-react-dropdown";
import { HostManager } from "../../APIList/HotMaster";

const ChooseDynamicTag = (props) => {
  const classes = useStyles();
  const [sizeRow, setSizeRow] = useState();
  const [ChildNodeV, setChildNodeV] = useState([]);
  const { singleProductsDetails, optionsList } = props;
  console.log("singleProductsDetails==>", singleProductsDetails);
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

  const findings = singleProductsDetails.findings;
  const findingsOptions = !findings ? "" : findings.split(",");
  const options = optionsList.map((element) => {
    return {
      valueData: element,
      labelValue: element,
    };
  });
  // const fingerRingSize = FingerRingSize.map((element) => {
  //   return {
  //     valueData: element,
  //     labelValue: element,
  //   };
  // });
  // const ChildNodeN = ChildNodeNSize.map((element) => {
  //   return {
  //     valueData: element,
  //     labelValue: element,
  //   };
  // });

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
  const setType2option = ["Chain", "Dori"];

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
    console.log("getData==>", getData);
    // return onChangeHandler(getData);
  };
  const enableRow = (labelValue) => {
    for (let rowName in sizeRow) {
      if (rowName === labelValue && sizeRow[rowName]) {
        return true;
      }
    }
    return false;
  };

  const childNodeV = singleProductsDetails.childNodeV;

  useEffect(() => {
    axios
      .get(`${HostManager.reportsL1L2}/npim/size/dropdown/${childNodeV}`)
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
          {/* {optionE.map((row, index) => (
            <tr
              key={index}
              onChange={rowHandlerChange}
              id={row.labelValue}
              className={
                enableRow(row.labelValue) ? classes.showDropdown : classes.hide
              }
            >
              {singleProductsDetails.findings ? (
                <DropDownMaterialUI
                  labelName="Findings"
                  onChangeHandler={findingsResHandler}
                  optionsList={findingsOptions}
                />
              ) : (
                ""
              )}
            </tr>
          ))} */}
        </tbody>
      </table>
      <table style={{ width: "100%", margin: 0 }}>
        {/* <tbody>
          {optionF.map((row, index) => (
            <tr
              key={index}
              onChange={rowHandlerChange}
              id={row.labelValue}
              className={
                enableRow(row.labelValue) ? classes.showDropdown : classes.hide
              }
            >
              <Multiselect
                options={["A", "B"]}
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
                        enableRow(row.labelValue) ? classes.show : classes.hide
                      }
                    >
                      <input
                        type="text"
                        maxlength="1"
                        id={`${row.labelValue}sq`}
                        name={`${row.labelValue}sq`}
                        className={classes.inputField}
                        placeholder={row.labelValue}
                      />
                    </tr>
                  ))}
                </tbody>
              </table>
            </tr>
          ))}
        </tbody> */}
      </table>
      <table style={{ width: "100%", margin: 0 }}>
        <tbody>
          {/* {optionM.map((row, index) => (
            <tr
              key={index}
              onChange={rowHandlerChange}
              id={row.labelValue}
              className={
                enableRow(row.labelValue) ? classes.showDropdown : classes.hide
              }
            >
              <Multiselect
                options={["ChildNodeN", "A"]}
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
                        enableRow(row.labelValue) ? classes.show : classes.hide
                      }
                    >
                      <input
                        type="text"
                        maxlength="1"
                        id={`${row.labelValue}sq`}
                        name={`${row.labelValue}sq`}
                        className={classes.inputField}
                        placeholder={row.labelValue}
                      />
                    </tr>
                  ))} 
                </tbody>
              </table>
            </tr>
          ))} */}
        </tbody>
      </table>
      <table style={{ width: "100%", margin: 0 }}>
        {/* <tbody>
          {optionV.map((row, index) => (
            <tr
              key={index}
              onChange={rowHandlerChange}
              id={row.labelValue}
              className={
                enableRow(row.labelValue) ? classes.showDropdown : classes.hide
              }
            >
              <MultiselectUomAndSize
                optionsList={ChildNodeV}
                sizeUomQuantityResHandler={sizeUomQuantityResHandler}
              />
            </tr>
          ))}
        </tbody> */}
      </table>
      <table className="w-100">
        <tbody>
          {/* {optionN.map((row, index) => (
            <tr
              key={index}
              onChange={rowHandlerChange}
              id={row.labelValue}
              className={
                enableRow(row.labelValue) ? classes.showDropdown : classes.hide
              }
            >
              <DropDownMaterialUI
                labelName="Type Set-2"
                onChangeHandler={typeSet2ResHandler}
                optionsList={setType2option}
              />
            </tr>
          ))} */}
        </tbody>
      </table>
    </>
  );
};

export default ChooseDynamicTag;
