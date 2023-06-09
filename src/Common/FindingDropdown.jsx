import React from "react";
import "../Style/ShowImage.css";

const FindingDropdown = (props) => {
  const { optionsList, findingValue } = props;
  return (
    <>
      <select onChange={findingValue} className="L3SelectDropdown">
        <option>Select Finding</option>
        {optionsList.map((item, i) => {
          return (
            <option key={i} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default FindingDropdown;
