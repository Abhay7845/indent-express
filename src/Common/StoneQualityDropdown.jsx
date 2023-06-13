import React from "react";
import "../Style/ShowImage.css";

const StoneQualityDropdown = (props) => {
  const { optionsList, GetStoneData, singleProductsDetails } = props;
  const stdUCP = singleProductsDetails.stdUCP;
  return (
    <>
      <select onChange={GetStoneData} className="L3SelectDropdown">
        <option value="">Select Stone Quality</option>
        <option value={stdUCP}>stdUCP-{stdUCP}</option>
        {optionsList.map((item, i) => {
          return <option key={i}>{item}</option>;
        })}
      </select>
    </>
  );
};

export default StoneQualityDropdown;
