import React from "react";
import "./App.css";
import Card from "./Components/Card";
//import productImageSrc from "./Components/image/image-product-desktop.jpg";
import products from "./Components/Data";

const App = () => {
  return (
    <div className="App">
      <h1>Ma super parfumerie</h1>
      <div className="products">
        {products.map((product, index) => (
          <Card
            key={index}
            productImage={product.image}
            category={product.category}
            productTitle={product.title}
            productContent={product.content}
            price={product.price}
            salePrice={product.salePrice}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
