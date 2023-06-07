import React from "react";
import { Select } from "antd";

const CommonDropdown = (props) => {
  const { optionList, findingValue } = props;
  return (
    <>
      <Select onChange={findingValue}>
        {optionList.map((item, i) => {
          return (
            <option key={i} value={item}>
              {item}
            </option>
          );
        })}
      </Select>
    </>
  );
};

export default CommonDropdown;
