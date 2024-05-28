"use client";
import React, { useContext } from "react";
import { AdminContext } from "./AdminContext";
import { Pineconelogo, ToLeft } from "@/images";

export const SignUppage2 = ({ next, back }: any) => {
  const { formDataRef }: any = useContext(AdminContext);
  const handleOnChange = (field: string, value: string | number) => {
    formDataRef.current = { ...formDataRef.current, [field]: value };
  };
  return (
    <div className="flex flex-col justify-center items-center gap-[100px] py-[30px] px-[30px]">
      <div className="flex justify-start items-start text-start w-[100%]">
        <Pineconelogo />
      </div>
      <ul className="steps w-[900px]">
        <li className="step step-neutral">Дэлгүүрийн нэр</li>
        <li className="step">Бүс нутаг</li>
        <li className="step">Нэмэлт мэдээлэл</li>
      </ul>
      <div className="flex flex-col gap-12 w-96">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-3xl">Дэлгүүрийн мэдээлэл</h1>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold">Танай дэлгүүрийн нэр юу вэ?</h1>
            <input
              type="text"
              placeholder="Дэлгүүрийн нэр"
              className="p-3 border rounded-lg w-full"
              onChange={(e) =>
                handleOnChange("shopInformation", e.target.value)
              }
            />
          </div>
        </div>
        <div className="flex justify-between">
          <button
            className="flex justify-center items-center h-10 w-10 bg-gray-100 rounded-[50%]"
            onClick={back}
          >
            <ToLeft />
          </button>
          <button
            className=" p-3 rounded-lg text-white bg-gray-400  hover:bg-black"
            onClick={next}
          >
            Дараах
          </button>
        </div>
      </div>
    </div>
  );
};
