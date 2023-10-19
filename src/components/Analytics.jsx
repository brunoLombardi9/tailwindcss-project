import React from "react";
import Button from "./Button";

const Analytics = () => {
  return (
    <div className="w-full bg-white p-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="mx-auto w-[500] my-4" src="/laptop.jpg" alt="laptop" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Analytics Centrally</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          error minus, accusantium consequuntur quae sit veritatis cum provident
          voluptates omnis pariatur reprehenderit tenetur laudantium nisi aut
          quaerat corrupti natus illo.</p>
          <Button text={"Get Started"}/>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
