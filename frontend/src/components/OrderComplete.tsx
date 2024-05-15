import { CheckList, Clock, Correct } from "@/images";
import React from "react";

export const OrderComplete = () => {
  return (
    <div className="my-[150px] flex flex-col px-5">
      <div className="w-32">
        <Clock />
      </div>
      <div className="flex items-end">
        <div className="border-dashed border-b border-l border-gray-300  flex justify-center flex-col items-center gap-[20px] ml-11">
          <Correct />
          <h2 className="text-[32px] text-[#101750] font-bold flex justify-center">
            Таны захиалга амжилттай
          </h2>
          <p className="text-[#8D92A7] px-[300px] flex text-center">
            Thank you for your order! Your order is being processed and will be
            completed within 3-6 hours. You will receive an email confirmation
            when your order is completed.
          </p>
          <button className="bg-[#FF1788] text-white font-bold px-10 py-4 mb-20 rounded">
            Үргэлжлүүлэх
          </button>
        </div>
        <div className="w-32">
          <CheckList />
        </div>
      </div>
    </div>
  );
};
