import React from "react";
import "../css/App.css";
import InputRow from "./InputRow";
import OutputRow from "./OutputRow";

import { CurrencyProvider } from "../context/currencyContext";

export default function App() {
  return (
    <CurrencyProvider>
      <div className="App">
        <h1>Convert</h1>
        <InputRow />
        <div className="equals">=</div>
        <OutputRow />
      </div>
    </CurrencyProvider>
  );
}
