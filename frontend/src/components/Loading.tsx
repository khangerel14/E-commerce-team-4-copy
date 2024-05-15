import { Pineconelogo } from "@/images";
import React from "react";

export const Loading = () => {
  return (
    <div className="flex flex-col items-center py-[30px] px-[30px] h-screen justify-center">
      <div className="flex justify-start items-start text-start w-[100%]">
        <Pineconelogo />
      </div>
      <div className="flex items-center h-full justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    </div>
  );
};
