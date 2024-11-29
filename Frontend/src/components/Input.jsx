import React from "react";
import { handleChange } from "../utils/handleChange";

const Input = ({ data, setUserdata }) => {
  return (
    <input
      type={data.type}
      name={data.name}
      placeholder={data.placeholder}
      onChange={(e) => handleChange(e.target.value, data.inputfor, setUserdata)}
    />
  );
};

export default Input;
