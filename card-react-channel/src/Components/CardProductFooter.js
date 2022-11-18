import React from "react";
import CartButton from "./CartButton";

const CardFooter = (props) => {
  return (
    <div className="footer">
      <div className="price">
        <div className="sale-price">{props.salePrice}</div>
        <div className="original-price">{props.price}</div>
      </div>
      <CartButton />
    </div>
  );
};

export default CardFooter;
