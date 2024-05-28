"use client";
import React, { useContext } from "react";
import { AdminContext } from "./AdminContext";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { Pineconelogo, ToLeft } from "@/images";
import dotenv from "dotenv";
dotenv.config();

export const SignUppage4 = ({ back }: any) => {
  const { formDataRef }: any = useContext(AdminContext);
  const router = useRouter();
  const signupData = JSON.parse(localStorage.getItem("signupData") as string);
  const { user }: any = useAuth0();
  const URL = process.env.NEXT_PUBLIC_MONGO_CONNECTION;
  const createUser = async () => {
    try {
      const createUser = await axios.post(`${URL}`, {
        email: user?.email ?? signupData.current.email,
        name: user?.nickname ?? signupData.current.name,
        shopInformation: formDataRef.current.shopInformation,
        city: formDataRef.current.city,
        district: formDataRef.current.district,
        khoroo: formDataRef.current.khoroo,
        exprience: formDataRef.current.exprience,
        product: formDataRef.current.product,
      });
      if (createUser) {
        toast.success("Амжилттай бүртгэгдлээ. 👏");
        localStorage.removeItem("userData");
        setTimeout(() => {
          router.push(`/dashboard`);
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };
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
        <li className="step step-neutral">Бүс нутаг</li>
        <li className="step step-neutral">Нэмэлт мэдээлэл</li>
      </ul>
      <div className="flex flex-col gap-12 w-96">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-3xl">Жоохон танилцъя</h1>
          <p>Энэ мэдээллийг дэлгүүрийн тохиргоонд туслах зорилгоор ашиглана</p>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold">
              Та борлуулалт хийж байсан туршлагатай юу?
            </h1>
            <input
              type="text"
              placeholder="Та борлуулалт хийж байсан туршлагатай юу?"
              className="p-3 border rounded-lg w-full"
              onChange={(e) => handleOnChange("exprience", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold">
              Та ямар төрлийн бүтээгдэхүүн борлуулах вэ?
            </h1>
            <input
              type="text"
              placeholder="Та ямар төрлийн бүтээгдэхүүн борлуулах вэ?"
              className="p-3 border rounded-lg w-full"
              onChange={(e) => handleOnChange("product", e.target.value)}
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
            className=" p-3 rounded-lg text-white hover:scale-90 bg-gray-400  hover:bg-black"
            onClick={createUser}
          >
            Дараах
          </button>
          <Toaster position="top-right" />
        </div>
      </div>
    </div>
  );
};
