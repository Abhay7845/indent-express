import React from "react";
import "../Style/ShowImage.css";

const StoneQualityDropdown = (props) => {
  const { optionsList, GetStoneData } = props;

  return (
    <>
      <select onChange={GetStoneData} className="L3SelectDropdown">
        <option value="">Select Stone Quality</option>
        {optionsList.map((item, i) => {
          return <option key={i}>{item}</option>;
        })}
      </select>
    </>
  );
};

export default StoneQualityDropdown;
