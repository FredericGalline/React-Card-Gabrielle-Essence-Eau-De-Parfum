import React from "react";
import "./Card.css";
import productImageSrc from "./image/image-product-desktop.jpg";
import CardHeader from "./CardProductHeader";
import CardFooter from "./CardProductFooter";
import Products from "./CardProductData";
import CartButton from "./CartButton";

const Card = (props) => {
  return (
    <div className="contenair">
      <img
        src={productImageSrc}
        className="product-img"
        alt={props.productImage}
      />
      <div className="content">
        <CardHeader
          category={props.category}
          productTitle={props.title}
          productContent={props.content}
        />
        <CardFooter salePrice={props.salePrice} price={props.price} />
      </div>
    </div>
  );
};

export default Card;
