"use client";

import { useState } from "react";
import { NumericFormat } from "react-number-format";

const InputNumber = ({ customClass, placeholder, ...rest }) => {
  const [number, setNumber] = useState(rest.value);
  return (
    <NumericFormat
      {...rest}
      value={number}
      className={
        customClass
          ? customClass
          : `block leading-none w-full border-0 border-b-2 border-brand-primary/20 focus:ring-0 pl-0 focus:border-blue-800 py-1.5 pr-10 placeholder:text-brand-primary`
      }
      placeholder={placeholder ? placeholder.toString() : ""}
      onValueChange={(value) => {
        setNumber(value.floatValue);
      }}
    />
  );
};

export default InputNumber;
