import React from "react";
import TopHeader from "./TopHeader";
import "../Style/RedirectionTab.css";
import { Link } from "react-router-dom";
import BGImage from "../Asset/Img/L1L2Background.jpg";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const RedirectionHomePage = () => {
  const ROLE = localStorage.getItem("indent-expressRole");
  return (
    <>
      <TopHeader />
      <div className="DropDownFormStyle">
        <div className="row w-100">
          {ROLE === "L1" || ROLE === "L2" ? (
            <div className="d-flex w-100 mx-3 w-100">
              <Link
                className="col-md-6 redirectionTab"
                to="/Indent-express/L1/L2/physical/home"
              >
                PHYSICAL
              </Link>
              <Link
                className="col-md-6 redirectionTab"
                to="/Indent-express/feedback/L1/L2"
              >
                DIGITAL
              </Link>
            </div>
          ) : (
            ""
          )}
          {ROLE === "L3" && (
            <div className="d-flex w-100 mx-3">
              <Link
                className="col-md-6 redirectionTab"
                to="/Indent-express/L3/physical/home"
              >
                PHYSICAL
              </Link>
              <Link
                className="col-md-6 redirectionTab"
                to="/Indent-express/L3/digital/home"
              >
                DIGITAL
              </Link>
            </div>
          )}
        </div>
      </div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={BGImage}
              className="d-block w-100 L1L2BGImage"
              alt="Image_Not Load"
            />
            <div className="carousel-caption d-none d-md-block text-dark">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={BGImage}
              className="d-block w-100 L1L2BGImage"
              alt="Image_Not Load"
            />
            <div className="carousel-caption d-none d-md-block text-dark">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={BGImage}
              className="d-block w-100 L1L2BGImage"
              alt="Image_Not Load"
            />
            <div className="carousel-caption d-none d-md-block text-dark">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <BsArrowLeftCircleFill size={40} className="text-dark" />
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <BsArrowRightCircleFill size={40} className="text-dark" />
        </button>
      </div>
    </>
  );
};

export default RedirectionHomePage;
