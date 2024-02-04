import React from "react";

const Input = ({ type, onChange, label,value }) => {
  return (
    <div className="capitalize mt-2">
      <p className="px-3 text-pretty font-medium mb-2">
        {label} 
      </p>
      <input
        name={label}
        type={type}
        value={value}
        id={label}
        className=" outline-none rounded-xl w-5/6 h-8 p-2 font-medium text-center"
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
