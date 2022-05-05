import React from "react";
import "../css/App.css";

import WelcomePage from "./WelcomePage";
import Converter from "./Converter";
import Route from "./Route";

import { CurrencyProvider } from "../context/currencyContext";

export default function App() {
  return (
    <CurrencyProvider>
      <div className="App">
        <Route path="/">
          <WelcomePage />
        </Route>
        <Route path="/converter">
          <Converter />
        </Route>
      </div>
    </CurrencyProvider>
  );
}
