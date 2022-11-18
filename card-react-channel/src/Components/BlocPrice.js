import React from "react";

const BlocPrice = (props) => {
  return (
    <div className="price-bloc">
      <div className="price">
        <div className="sale-price">{props.salePrice}</div>
        <div className="original-price">{props.price}</div>
      </div>
      <button>
        <img src="./image/icon-cart.svg" alt="" />
        <p>Add to cart</p>
      </button>
    </div>
  );
};

export default BlocPrice;
