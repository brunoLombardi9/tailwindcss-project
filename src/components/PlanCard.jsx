import React from "react";
import Button from "./Button";

const PlanCard = ({ img, accountType, price, storage, users, maxData }) => {
  return (
    <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg md:hover:scale-105 duration-300">
      <img className="w-20 mx-auto mt-[-3rem] bg-white" src={img} alt="/" />
      <h2 className="text-2xl font-bold text-center py-8">{accountType}</h2>
      <p className="text-center font-bold text-4xl">${price}</p>
      <div>
        <p className="py-2 border-b mx-8 mt-8">{storage} storage</p>
        <p className="py-2 border-b mx-8">{users} Granted User</p>
        <p className="py-2 border-b mx-8">Send up to {maxData} GB</p>
      </div>
      <Button color={"green"} text={"Start Trial"} />
    </div>
  );
};

export default PlanCard;
