import "./inputNumber.css";
import React, { useState } from "react";

export default function InputNumber({min, max}) {
  const [value, setValue] = useState(0);

  const increment = () => {
    

    if (typeof max === "number" && value >= max) return;

    setValue(value + 1);
  };

  const decrement = () => {

    if (typeof min === "number" && value <= min) return;

    setValue(value - 1);
  };
  return (
    <div className="input-number">
      <button type="button" onClick={decrement}>
        &minus;
      </button>
      <span>{value && value}</span>
      <button type="button" onClick={increment}>
        &#43;
      </button>
    </div>
  );
}
