import "./Card.css";
import product from "../../Assets/Products/shoes1.png";
import React from "react";

export default function Card() {
  return (
    <div className="container glass-effect">
      <img
        className="product-img"
        src={product}
        alt="product"
        width="100%"
        height="100%"
      ></img>
      <h1>Flat caprece</h1>
    </div>
  );
}
