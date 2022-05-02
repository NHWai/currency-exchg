import { createContext, useEffect, useState } from "react";

import exchangerate from "../apis/exchangerate";

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  useEffect(() => {
    const getData = async () => {
      const data = await exchangerate.get("/latest");

      setCurrencyOptions(data.data.rates);
    };
    getData();
  }, []);

  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [inputVal, setInputVal] = useState({
    val: "",
    rate: "",
  });

  return (
    <CurrencyContext.Provider
      value={{
        currencyOptions,
        setInputVal,
        inputVal,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContext;
