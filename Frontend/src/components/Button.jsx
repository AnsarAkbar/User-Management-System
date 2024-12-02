import React from "react";

const Button = ({ value, setShowform}) => {
  return <button type="submit"  className="bg-green-600 rounded-md text-white px-3 py-1 ">{value}</button>;
};

export default Button;
