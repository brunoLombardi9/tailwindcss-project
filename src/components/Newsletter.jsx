import React from "react";
import Button from "./Button";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Wants tips & tricks to optimize your flow?
          </h2>
          <p>Sign up to our newsletter and stay up to date</p>
        </div>

        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 ">
            <input
              className="p-3 w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <Button color="green" text="Notify Me" />
          </div>
          <p>
            We care about the protection of your data. Read our{" "}
            <span className="text-[#00df9a] underline">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
