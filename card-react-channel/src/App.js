import React from "react";
import "./App.css";
import Card from "./Components/Card";
//import productImageSrc from "./Components/image/image-product-desktop.jpg";

const products = [
  {
    //image: { productImageSrc },
    category: "PERFUME",
    title: "Gabrielle Essence Eau De Parfum",
    content:
      "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
    price: "$169.99",
    salePrice: "$149.99",
  },
  {
    //image: { productImageSrc },
    category: "PERFUME",
    title: "Fleur d'anus de Jean Peste",
    content:
      "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
    price: "$289.99",
    salePrice: "$179.99",
  },
];

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
