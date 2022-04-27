import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import InputRow from "./InputRow";
import OutputRow from "./OutputRow";

export default function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [inputVal, setInputVal] = useState({
    val: "",
    rate: "",
  });

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("https://api.exchangerate.host/latest");

      setCurrencyOptions(data.data.rates);
    };
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Convert</h1>
      <InputRow setInputVal={setInputVal} currencyOptions={currencyOptions} />
      <div className="equals">=</div>
      <OutputRow inputVal={inputVal} currencyOptions={currencyOptions} />
    </div>
  );
}
