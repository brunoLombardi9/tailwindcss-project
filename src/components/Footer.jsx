import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  const solutions = ["Analytycs", "Marketing", "Commerce", "Insights"];
  const support = ["Pricing", "Documentation", "Guides", "API status"];
  const company = ["About", "Blog", "Jobs", "Press"];
  const legal = ["Claim", "Policy", "Terms"];

  return (
    <div className="max-w-[1240px] mx-auto py-16 grid lg:grid-cols-3 gap-8 text-gray-300 px-2">
      <div>
        <h3 className="w-full text-3xl font-bold text.[#00df9a]">React.</h3>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odit
          cum sapiente doloremque eum quae impedit.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaDribbbleSquare size={30} />
          <FaFacebookSquare size={30} />
          <FaGithubSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className="col-span-3 flex justify-between">
        <div>
          <h4 className="font-medium text-gray-400">Solutions</h4>
          <ul>
            {solutions.map((option) => (
              <li className="py-2 text-sm" key={option}>
                {option}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-gray-400">Support</h4>
          <ul>
            {support.map((option) => (
              <li className="py-2 text-sm" key={option}>
                {option}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-gray-400">Company</h4>
          <ul>
            {company.map((option) => (
              <li className="py-2 text-sm" key={option}>
                {option}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-gray-400">Legal</h4>
          <ul>
            {legal.map((option) => (
              <li className="py-2 text-sm" key={option}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
