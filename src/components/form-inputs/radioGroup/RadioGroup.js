import "./RadioGroup.css";
import React from "react";

export default function RadioGroup({ values }) {
  return (
    <div className="radio-group-container">
      {values.map((value) => (
        <div key={value} className="input-container">
          <input type="radio" name="radio"></input>
          <div className="input-label">
            <label>{value}</label>
          </div>
        </div>
      ))}
    </div>
  );
}
