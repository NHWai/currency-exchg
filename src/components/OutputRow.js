import React, { useState, useEffect, useContext } from "react";
import CurrencyContext from "../context/currencyContext";

export default function Output() {
  const { currencyOptions, inputVal } = useContext(CurrencyContext);

  const [rate, setRate] = useState("");
  const [outputVal, setOutputVal] = useState("");

  useEffect(() => {
    const truVal = inputVal.val * (rate / inputVal.rate);

    setOutputVal(truVal);
  }, [rate, inputVal]);

  const renderedItems = Object.keys(currencyOptions).map((key) => {
    return (
      <React.Fragment key={key}>
        <option value={key}>{key}</option>
      </React.Fragment>
    );
  });

  return (
    <div>
      <span className="span">
        {outputVal ? outputVal.toLocaleString() : "---"}
      </span>
      <select onChange={(e) => setRate(currencyOptions[e.target.value])}>
        <option> Choose</option>
        {renderedItems}
      </select>
    </div>
  );
}
