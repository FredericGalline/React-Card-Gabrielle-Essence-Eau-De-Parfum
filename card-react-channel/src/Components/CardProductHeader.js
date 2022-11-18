import React from "react";

const CardHeader = (props) => {
  return (
    <header>
      <div className="category">{props.category}</div>
      <h2>{props.productTitle}</h2>
      <div className="description">{props.productContent}</div>
    </header>
  );
};

export default CardHeader;
