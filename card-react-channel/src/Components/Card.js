import React from "react";
import "./Card.css";
import productImageSrc from "./image/image-product-desktop.jpg";
import BlocPrice from "./BlocPrice";
import products from "./Data";

const Card = (props) => {
  return (
    <div className="contenair">
      <img
        src={productImageSrc}
        className="product-img"
        alt={props.productImage}
      />
      <div className="content">
        <header>
          <div className="category">{props.category}</div>
          <h2>{props.productTitle}</h2>
          <div className="description">{props.productContent}</div>
        </header>

        <BlocPrice
          key={props.index}
          price={props.price}
          salePrice={props.salePrice}
        />
      </div>
    </div>
  );
};

export default Card;
