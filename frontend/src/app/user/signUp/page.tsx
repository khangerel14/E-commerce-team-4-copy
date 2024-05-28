"use client";
import { Footer, NavbarUser, PathUser } from "@/components";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import dotenv from "dotenv";
dotenv.config();

const signUp = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const formDataRef = useRef({
    email: "",
    password: "",
    rePassword: "",
  });
  const handleRef = (field: string, value: string | number) => {
    formDataRef.current = { ...formDataRef.current, [field]: value };
  };
  const URL = process.env.NEXT_PUBLIC_MONGO_CONNECTION;
  const signUp = async () => {
    if (formDataRef.current.password === formDataRef.current.rePassword) {
      try {
        const res = await axios.post(`${URL}/user`, {
          ...formDataRef.current,
        });

        if (res.status === 201) {
          localStorage.setItem(
            "userEmail",
            JSON.stringify(formDataRef.current.email)
          );
        }
        router.push("/user/dashboard");
        toast.success("amjilttai nevterlee.");
      } catch (error) {}
    } else {
      toast.error("password zow boglono uu.");
    }
  };
  const logIn = () => {
    router.push("/user/login");
  };
  return (
    <div className="flex flex-col w-full">
      <NavbarUser />
      <PathUser />
      <div className="flex flex-col p-6 h-fit w-[440px] my-40 mx-auto shadow-xl items-center gap-5">
        <h1 className="font-bold text-3xl">Бүртгүүлэх</h1>
        <div className="flex flex-col items-center justify-between gap-4 text-[#9096B2]">
          <p>Доорх мэдээллийг бөглөнө үү</p>
          <input
            type="text"
            className="w-full border p-2 rounded font-light"
            placeholder="Имэйл хаяг"
            onChange={(e) => handleRef("email", e.target.value)}
          />
          <input
            type="text"
            className="w-full border p-2 rounded font-light"
            placeholder="Нууц үг"
            onChange={(e) => handleRef("password", e.target.value)}
          />
          <input
            type="text"
            className="w-full border p-2 rounded font-light"
            placeholder="Нууц үг давтах"
            onChange={(e) => handleRef("rePassword", e.target.value)}
          />
          <button>Нууц үгээ мартсан</button>
          <button
            className="p-3 rounded text-white w-[392px] bg-[#FB2E86]"
            onClick={signUp}
          >
            Бүртгүүлэх
          </button>
          <button onClick={logIn}>Нэвтрэх хэсэг</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default signUp;
