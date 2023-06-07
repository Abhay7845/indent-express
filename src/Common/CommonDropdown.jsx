import React from "react";

const CommonDropdown = (props) => {
  const { optionsList, findingValue } = props;
  return (
    <>
      <select onChange={findingValue}>
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

export default CommonDropdown;
