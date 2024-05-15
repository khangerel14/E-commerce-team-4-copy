import { Double } from "@/images";
import React from "react";

export const Modal = ({ createProduct }: any) => {
  return (
    <div className="flex justify-center items-center w-full h-full absolute inset-0">
      <div
        className="w-full h-screen glass relative inset-0"
        onClick={createProduct}
      ></div>
      <div className="flex flex-col gap-3 w-64 h-44 bg-white items-center justify-center p-3 rounded-xl absolute">
        <Double />
        <p className="text-center">Бүтээгдэхүүн амжилттай нэмэгдлээ.</p>
      </div>
    </div>
  );
};
