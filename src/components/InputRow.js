import React, { useContext } from "react";
import CurrencyContext from "../context/currencyContext";

export default function InputRow() {
  const { currencyOptions, setInputVal } = useContext(CurrencyContext);

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
