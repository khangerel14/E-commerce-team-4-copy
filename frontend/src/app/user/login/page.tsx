"use client";
import { Footer, NavbarUser, PathUser } from "@/components";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import dotenv from "dotenv";
dotenv.config();
import { setCookie } from "nookies";
const URL = process.env.NEXT_PUBLIC_MONGO_CONNECTION;

const page = () => {
  const router = useRouter();
  const formDataRef = useRef({
    email: "",
    password: "",
    rePassword: "",
  });
  const handleRef = (field: string, value: string | number) => {
    formDataRef.current = { ...formDataRef.current, [field]: value };
  };
  const logIn = async () => {
    try {
      const res = await axios.post(`${URL}/user/logIn`, {
        ...formDataRef.current,
      });

      if (res) {
        router.push("/user/dashboard");
        setCookie(null, "email", res.data.email);
        toast.success("Амжилттай нэвтэрлээ <3");
      }
    } catch (error) {
      toast.error("email esvel password buruu baina .");
    }
  };
  const signUp = () => {
    router.push("/user/signUp");
  };
  return (
    <div className="flex flex-col w-full">
      <NavbarUser />
      <PathUser />
      <Toaster position="top-right" />
      <Toaster position="top-right" />
      <div className="flex flex-col p-6 h-96 w-[440px] mt-40 mx-auto shadow-xl items-center justify-between">
        <h1 className="font-bold text-3xl">Нэвтрэх</h1>
        <div className="flex flex-col items-center justify-between gap-4 text-[#9096B2]">
          <p>Доорх мэдээллийн оруулж нэвтэрнэ үү</p>
          <input
            type="text"
            className="w-full border p-2 rounded font-light outline-none"
            placeholder="Имэйл хаяг"
            onChange={(e) => handleRef("email", e.target.value)}
          />
          <input
            type="type"
            className="w-full border p-2 rounded font-light outline-none"
            placeholder="Нууц үг"
            onChange={(e) => handleRef("password", e.target.value)}
          />
          <button>Нууц үгээ мартсан</button>
          <button
            className="p-3 rounded text-white w-[392px] bg-[#FB2E86]"
            onClick={logIn}
          >
            Нэвтрэх
          </button>
          <button onClick={signUp}>Шинээр бүртгүүлэх</button>
        </div>
      </div>
      <button className="mb-40 mt-3 mx-auto border-b-2 w-fit text-[#9096B2]">
        мерчант нэвтрэх
      </button>
      <Footer />
    </div>
  );
};

export default page;
