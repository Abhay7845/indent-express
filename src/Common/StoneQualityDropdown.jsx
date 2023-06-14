import React from "react";
import "../Style/ShowImage.css";

const StoneQualityDropdown = (props) => {
  const { optionsList, GetStoneData, singleProductsDetails } = props;
  const stdUCP = singleProductsDetails.stdUCP;
  return (
    <div className="mt-3">
      <select onChange={GetStoneData} className="L3SelectDropdown">
        <option value="">Select Stone Quality</option>
        <option value={stdUCP}>stdUCP-{stdUCP}</option>
        {optionsList.map((item, i) => {
          return <option key={i}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default StoneQualityDropdown;
