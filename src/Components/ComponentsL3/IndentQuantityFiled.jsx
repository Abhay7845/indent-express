import React from "react";

const IndentQuantityFiled = (props) => {
  const { GetIndentQuantityValue, quantityRes } = props;

  return (
    <input
      type="number"
      pattern="[0-9]"
      min="0"
      max="9"
      id="numberInput"
      maxLength={1}
      minLength={1}
      value={`${quantityRes}`}
      onInput={GetIndentQuantityValue}
      className="IndentQuantity"
      placeholder="Enter Indent Quantity"
    />
  );
};

export default IndentQuantityFiled;
