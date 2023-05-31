import React from "react";

const Button = ({color, text}) => {
  const btnColor = color === "green" ? "bg-[#00df9a] text-black" : "bg-black text-[#00df9a]";

  return (
    <button
      className={`${btnColor} w-[200px] rounded-md font-medium my-6 mx-auto py-3`}
    >
      {text}
    </button>
  );
};

export default Button;
