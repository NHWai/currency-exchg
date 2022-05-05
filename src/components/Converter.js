import React from "react";
import InputRow from "./InputRow";
import OutputRow from "./OutputRow";

function Converter() {
  return (
    <>
      <h1>Convert</h1>
      <InputRow />
      <div className="equals">=</div>
      <OutputRow />
    </>
  );
}

export default Converter;
