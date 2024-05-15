"use client";
import React, { useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import useSWR from "swr";
import {
  Applelogo,
  Arrowlogo,
  Googlelogo,
  Microsoftlogo,
  Pineconelogo,
} from "@/images";
import dotenv from "dotenv";
dotenv.config();

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const SignUppage1 = ({ next }: any) => {
  const URL = process.env.NEXT_PUBLIC_MONGO_CONNECTION;
  const { data, error, isLoading } = useSWR(`${URL}`, fetcher);
  const getAllUser = data?.getAll;
  const { loginWithRedirect } = useAuth0();
  const router = useRouter();
  const userRef = useRef({
    email: "",
    name: "",
  });
  const handleOnChange = (field: string, value: string | number) => {
    userRef.current = { ...userRef.current, [field]: value };
  };

  const handler = async () => {
    const filter = getAllUser.filter(
      (e: any) => userRef.current.email === e.email
    );
    if (filter.length === 0) {
      localStorage.setItem("signupData", JSON.stringify(userRef));
      router.push("/signupstep");
    } else {
      toast.error("Таны имэйл бүртгэлтэй байна. 🤙");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-[100px] py-[30px] px-[30px]">
      <div className="flex justify-start items-start text-start w-[100%]">
        <Pineconelogo />
      </div>
      <div className="border-gray-200 rounded-[10px] border-2 flex flex-col justify-center items-center w-[450px] py-[22px] px-[22px] gap-[20px] ">
        <p className="text-[30px] font-bold">Бүртгүүлэх</p>
        <div>
          <p>Таны имэйл</p>
          <input
            className="bg-gray-200 w-[400px] px-[8px] rounded-[5px] h-[50px]"
            type="email"
            placeholder="имэйл"
            onChange={(e) => handleOnChange("email", e.target.value)}
          />
        </div>
        <div>
          <p>Таны нэр</p>
          <input
            className="bg-gray-200 w-[400px] px-[8px]  rounded-[5px] h-[50px]"
            type="email"
            placeholder="Hэр"
            onChange={(e) => handleOnChange("name", e.target.value)}
          />
        </div>
        <button
          className="bg-black text-white w-[100%] h-[50px] rounded-[5px] flex justify-end gap-[150px] px-2 items-center hover:scale-95"
          onClick={handler}
        >
          <p>Дараах </p>
          <Arrowlogo />
        </button>
        <Toaster position="top-right" />
        <div className="border-t-[2px] border-b-[2px]  border-gray-200 py-[20px] flex flex-col w-[100%] gap-[20px]">
          <button
            className="bg-gray-200 h-[50px] flex justify-center items-center gap-[10px]  rounded-[5px] text-black w-[100%] hover:scale-95 "
            onClick={() => {
              loginWithRedirect(), next;
            }}
          >
            <Googlelogo />
            <p>Google-ээр нэвтрэх</p>
          </button>
          <button
            className="bg-gray-200 h-[50px] flex justify-center items-center gap-[10px]  rounded-[5px] text-black w-[100%] hover:scale-95"
            onClick={() => loginWithRedirect()}
          >
            <Microsoftlogo />
            <p>Microsoft-оор нэвтрэх</p>
          </button>
          <button
            className="bg-gray-200 h-[50px] flex justify-center items-center gap-[10px]  rounded-[5px] text-black w-[100%] hover:scale-95"
            onClick={() => loginWithRedirect()}
          >
            <Applelogo />
            <p>Apple-аар нэвтрэх</p>
          </button>
        </div>
        <button>Бүртгэлтэй юу? Нэвтрэх</button>
      </div>
    </div>
  );
};
