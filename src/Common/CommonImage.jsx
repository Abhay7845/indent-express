import React from "react";
import { IMAGE_URL } from "../Data/DataList";

const CommonImage = (props) => {
  const { itemCode } = props;
  const imageCode = itemCode.substring(2, 9);
  const imageURL = `${IMAGE_URL}${imageCode}.jpg`;

  return (
    <img
      src={imageURL}
      alt="Image_Not Found"
      width="70"
      height="70"
      className="img-thumbnail"
    />
  );
};

export default CommonImage;
