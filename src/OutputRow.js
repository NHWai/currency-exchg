import React, { useState, useEffect } from "react";

export default function Output({ currencyOptions, inputVal }) {
  const [rate, setRate] = useState("");
  const [outputVal, setOutputVal] = useState("");
  console.log(inputVal, rate, outputVal);

  useEffect(() => {
    const truVal = inputVal.val * (rate / inputVal.rate);
    console.log(truVal);
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
      <span className="span">{outputVal ? Math.round(outputVal) : "---"}</span>
      <select onChange={(e) => setRate(currencyOptions[e.target.value])}>
        <option> Choose</option>
        {renderedItems}
      </select>
    </div>
  );
}
