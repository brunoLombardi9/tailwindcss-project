import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const navOptions = ["Home", "Company", "Resources", "About", "Contact"];
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
  }

  return (
    <div className="flex justify-between h-24 max-w-[1240px] mx-auto p-4 text-white">
      <p className="w-full text-3xl font-bold text-[#00df9a]">REACT.</p>
      <ul className="hidden md:flex">
        {navOptions.map((option) => (
          <li className="p-4" key={option}>
            {option}
          </li>
        ))}
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={`ease-in-out duration-500
        fixed md:hidden h-full border-r w-[60%] border-gray-900 bg-[#000300]
          ${nav ? "left-0 top-0 " : "left-[-100%] "}`}
      >
        <ul className=" uppercase">
          {navOptions.map((option) => (
            <li className="p-4 border-b border-gray-600" key={option}>
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
