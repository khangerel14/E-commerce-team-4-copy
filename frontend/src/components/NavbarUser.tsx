"use client";
import {
  Call,
  Down,
  Mail,
  Save,
  SearchUser,
  Trolley,
  Up,
  UserNav,
} from "@/images";
import React, { useContext, useEffect, useState } from "react";
import HomeUser from "./HomeUser";
import { useRouter } from "next/navigation";
import { UserOrderContext } from ".";

export const NavbarUser = () => {
  const { orderData }: any = useContext(UserOrderContext);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const userEmail = JSON.parse(localStorage.getItem("userEmail") as string);
  const dropdown = () => {
    setIsOpen(!isOpen);
  };
  const homePage = () => {
    router.push("/user/dashboard");
  };
  const shopCart = () => {
    router.push("/user/shopCart");
  };
  const saveList = () => {
    router.push("/user/saveList");
  };
  const logIn = () => {
    router.push("/user/logIn");
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center text-white h-11 bg-[#7E33E0]">
        <div className="flex w-[1440px] mx-auto justify-between items-center">
          <div className="flex items-center gap-14">
            <button className="flex items-center gap-4">
              <Mail /> Pinecone@ecommerce.mn
            </button>
            <button className="flex items-center gap-4">
              <Call /> 77123456
            </button>
          </div>
          <div className="flex items-center gap-6">
            {userEmail ? (
              <button className="flex items-center gap-4">
                <p>{userEmail}</p>
                <UserNav />
              </button>
            ) : (
              <button className="flex items-center gap-4" onClick={logIn}>
                <p>Нэвтрэх</p>
                <UserNav />
              </button>
            )}
            <button className="flex items-center gap-4" onClick={saveList}>
              Хадгалах <Save />
            </button>
            <button
              className="flex items-center gap-4 relative"
              onClick={shopCart}
            >
              <Trolley />
              <p className="absolute bottom-2 left-3 text-[12px] h-[14px] w-[14px] bg-red-700 rounded-3xl flex justify-center items-center">
                {orderData.length}
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center h-[70px] bg-[#ffffff]">
        <div className="flex w-[1440px] mx-auto justify-between items-center">
          <div className="flex items-end gap-14">
            <button
              className="text-[#0D0E43] text-3xl font-bold"
              onClick={homePage}
            >
              Ecommerce
            </button>
            <div className="flex gap-6 items-center">
              <div className="flex flex-col inset-0 relative items-center">
                <button
                  className="flex gap-1 items-center text-[#FB2E86]"
                  onClick={dropdown}
                >
                  Нүүр {isOpen ? <Up /> : <Down />}
                </button>
                {isOpen && <HomeUser />}
              </div>
              <button className="text-[#0D0E43] hover:text-gray-500">
                Ангилал
              </button>
            </div>
          </div>
          <div className="flex">
            <input
              type="text"
              className="border w-[270px] h-9 p-2 outline-none"
            />
            <button className="flex justify-center items-center w-12 h-9 bg-[#FB2E86] text-white">
              <SearchUser />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
