import React from "react";

export const PathUser = () => {
  const path = window.location.pathname;

  return (
    <div className="h-20 bg-[#F6F5ff] w-full">
      <div className="flex justify-between mx-auto w-[1440px] items-center h-full">
        <div className="flex gap-2 items-center">
          <h1>Home</h1>
          <p className="text-[#FB2E86]">{}</p>
        </div>
      </div>
    </div>
  );
};
