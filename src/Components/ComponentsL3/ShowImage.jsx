import React, { useState } from "react";
import LoadingGif from "../../Asset/Img/Loading_Img.gif";
import ReactImageMagnify from "react-image-magnify";
import { Tabs, Tab, AppBar, Avatar } from "@material-ui/core";

const ShowImage = (props) => {
  const { imageURL } = props;
  const [ImgLoad, setImgLoad] = useState(true);
  const [value, setValue] = useState(0);

  const ClickGetNextImage = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <ReactImageMagnify
        {...{
          smallImage: {
            src: ImgLoad ? LoadingGif : `${imageURL}.jpg`,
            height: 472,
            width: window.innerWidth * (40.41145833 / 100),
            onLoad: () => {
              imageURL.length <= 0 ? setImgLoad(true) : setImgLoad(false);
            },
            alt: "Image_Not Available",
          },
          largeImage: {
            src: ImgLoad ? LoadingGif : `${imageURL}.jpg`,
            width: 1000,
            height: 900,
            onLoad: () => {
              imageURL.length <= 0 ? setImgLoad(true) : setImgLoad(false);
            },
            alt: "Image_Not Available",
          },
          shouldUsePositiveSpaceLens: true,
          enlargedImagePosition: "over",
          enlargedImageClassName: "large_img",
        }}
      />
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={ClickGetNextImage}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab
            style={{ minWidth: "1%" }}
            icon={<Avatar variant="square" src={`${imageURL}.jpg`} />}
          />
          <Tab
            style={{ minWidth: "1%" }}
            icon={<Avatar variant="square" src={`${imageURL}_${value}.jpg`} />}
          />
          <Tab
            style={{ minWidth: "1%" }}
            icon={<Avatar variant="square" src={`${imageURL}_${value}.jpg`} />}
          />
          <Tab
            style={{ minWidth: "1%" }}
            icon={<Avatar variant="square" src={`${imageURL}_${value}.jpg`} />}
          />
          <Tab
            style={{ minWidth: "1%" }}
            icon={<Avatar variant="square" src={`${imageURL}_${value}.jpg`} />}
          />
        </Tabs>
      </AppBar>
    </>
  );
};

export default ShowImage;
