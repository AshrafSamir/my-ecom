import "./Card.css";
import product from "../../Assets/Products/shoes1.png";
import InputNumber from "../form-inputs/inputNumber/InputNumber.js";
import RadioGroup from "../form-inputs/radioGroup/RadioGroup.js";
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

      <div className="form-container">
        <div className="size-container">
          <label className="main-label">SIZE :</label>
          <RadioGroup values={[37, 38, 39, 40]} />
        </div>
        <div className="quantatiy-container">
          <label className="main-label">QUANTITY :</label>
          <InputNumber min={0} max={100} />
        </div>
        <button className="submit-button">ADD ITEM</button>
      </div>
    </div>
  );
}
