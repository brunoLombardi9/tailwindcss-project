import React from "react";
import Typed from "react-typed";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold">GROW WITH DATA ANALyTYCS</p>
        <h1>Grow with data.</h1>
        <div className="flex justify-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Fast, flexible financing for
          </p>
          <Typed
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-2"
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 pt-2">
          Monitor your data analytycs to increase revenue for BTB, BTC, & SASS
          plataforms.
        </p>
       <Button color={"green"} text={"Get Started"}/>
      </div>
    </div>
  );
};

export default Hero;
