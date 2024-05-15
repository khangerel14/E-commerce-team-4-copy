"use client";
import { Footer, NavbarUser, PathUser, ProductUserDetail } from "@/components";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const page = () => {
  const router = useRouter();
  useEffect(() => {
    const rawJson: string | null = localStorage.getItem("userEmail");
    const user = rawJson && JSON.parse(rawJson);

    if (!user) {
      toast.error("Та нэвтэрнэ үү.");
      router.push("/user/login");
      return;
    }
  }, []);
  return (
    <div>
      <NavbarUser />
      <PathUser />
      <Toaster position="top-right" />
      <div className="flex flex-col gap-10 w-[1440px] mx-auto">
        <div className="flex flex-col gap-1 mt-20">
          <h1 className="text-xl text-[#151886] font-bold">Электрон бараа</h1>
          <p className="text-[#8A8FB9]">125 бүтээгдэхүүн</p>
        </div>
        <ProductUserDetail />
      </div>
      <Footer />
    </div>
  );
};

export default page;
