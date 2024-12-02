import React from "react";
import { handleChange } from "../utils/handleChange";

const Input = ({ data, setUserdata, userData}) => {

  return (
    <input
      type={data.type}
      name={data.name}
      className="text-sm p-1 rounded-sm focus-visible:outline-none"
      value={userData&&userData[data.inputfor]}
      placeholder={data.placeholder}
      onChange={(e) => handleChange(e.target.value, data.inputfor, setUserdata)}
    />
  );
};

export default Input;
