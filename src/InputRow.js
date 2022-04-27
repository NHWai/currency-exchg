import React, { useState } from "react";

export default function InputRow({ currencyOptions, setInputVal }) {
  function getInput(e) {
    const rate = currencyOptions[e.target.value];
    setInputVal((pre) => {
      return { ...pre, rate: rate };
    });
  }

  function onInputChg(e) {
    const val = +e.target.value;
    setInputVal((pre) => {
      return { ...pre, val: val };
    });
  }

  const renderedItems = Object.keys(currencyOptions).map((key) => {
    return (
      <React.Fragment key={key}>
        <option value={key}>{key}</option>
      </React.Fragment>
    );
  });

  return (
    <div>
      <input className="input" type="number" onChange={onInputChg} />
      <select onChange={getInput}>
        <option> Choose</option>
        {renderedItems}
      </select>
    </div>
  );
}
