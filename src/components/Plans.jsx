import React from "react";
import PlanCard from "./PlanCard";

const singleUser = {
    img: "/single.png",
    accountType: "Single User",
    price: 149,
    storage: "500 GB",
    users: 1,
    maxData: 2,
  };
  const partnership = {
    img: "/double.png",
    accountType: "Partnership",
    price: 199,
    storage: "1 TB",
    users: 3,
    maxData: 4,
  };

  const group = {
    img: "/triple.png",
    accountType: "Group account",
    price: 299,
    storage: "2 TB",
    users: 10,
    maxData: 10,
  };

const Plans = () => {
    const data = [singleUser, partnership, group]

  return (
    <div className="w-full py-[10rem] px-4 bg-white ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-10">
        {data.map((obj) => (
          <PlanCard
            img={obj.img}
            accountType={obj.accountType}
            price={obj.price}
            storage={obj.storage}
            users={obj.users}
            maxData={obj.maxData}
          />
        ))}
      </div>
    </div>
  );
};

export default Plans;
