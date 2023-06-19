import React from "react";

const CommonImage = (props) => {
  const { itemCode } = props;
  const imageCode = itemCode.substring(2, 9);
  const imageURL = `https://jewbridge.titanjew.in/CatalogImages/api/ImageFetch/?Type=ProductImages&ImageName=${imageCode}.jpg`;

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
