import React, { useState, useEffect } from "react";
import SideBar from "../../Common/SideBar";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import TopHeader from "../../Common/TopHeader";
import axios from "axios";

const YourProductsCart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => res)
      .then((response) => {
        setCartProducts(response.data);
      });
  }, []);
  console.log("cartProducts==>", cartProducts);
  return (
    <>
      <TopHeader />
      <div className="ComponentL3LowerHeader">
        <SideBar />
        <Link to="/Indent-express/L3/yor/cart/reports">
          <BsCartFill size={25} className="trolleyLowerHeader" />
        </Link>
      </div>
    </>
  );
};

export default YourProductsCart;
