import React from "react";

const Button = ({submit}) => {
  return (
    <span>
      <button
       className="rounded-2xl  w-fit capitalize text-md text-center px-14 py-3  mt-4 text-pretty font-medium bg-gray-600 hover:bg-gray-500">
        {submit}
      </button>
    </span>
  );
};

export default Button;
