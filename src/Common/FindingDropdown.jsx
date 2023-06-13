import React from "react";
import "../Style/ShowImage.css";

const FindingDropdown = (props) => {
  const { optionsList, GetFindingData } = props;
  return (
    <div className="mt-3">
      <select onChange={GetFindingData} className="L3SelectDropdown">
        <option value="">Select Finding</option>
        {optionsList.map((item, i) => {
          return (
            <option key={i} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FindingDropdown;
