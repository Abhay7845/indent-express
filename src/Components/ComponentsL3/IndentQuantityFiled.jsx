import React, { useState, useEffect } from "react";
import OTPInput from "otp-input-react";

const IndentQuantityFiled = (props) => {
  const { GetIndentQuantityValue, quantityRes } = props;
  const [showHelper, setHelper] = useState(0);

  useEffect(() => {
    if (quantityRes !== "") {
      if (
        quantityRes.length > 1 ||
        parseInt(quantityRes) === 0 ||
        parseInt(quantityRes) > 10
      ) {
        setHelper(1);
      } else {
        setHelper(0);
      }
    }
  }, [quantityRes]);

  return (
    <div>
      <b>INDENT QUANTITY</b>
      <OTPInput
        value={quantityRes}
        onChange={GetIndentQuantityValue}
        OTPLength={1}
        otpType="number"
      />
      <p className="text-danger">
        {showHelper === 0 ? "" : "Please enter a valid quantity"}
      </p>
    </div>
  );
};

export default IndentQuantityFiled;
