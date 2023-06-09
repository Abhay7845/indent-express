import React from "react";
import "../Style/ShowImage.css";

const Set2TypeDropdown = (props) => {
  const { optionsList, GetSet2TypeData } = props;
  return (
    <>
      <select onChange={GetSet2TypeData} className="L3SelectDropdown">
        <option value="">Select Set2Type</option>
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

export default Set2TypeDropdown;
