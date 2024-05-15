"use client";
import { Footer, NavbarUser, ShopCart, UserOrderContext } from "@/components";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import dotenv from "dotenv";
dotenv.config();

const page = () => {
  const { orderData, setOrderData }: any = useContext(UserOrderContext);
  const [data, setData] = useState<any>([]);
  const router = useRouter();
  const URL = process.env.NEXT_PUBLIC_MONGO_CONNECTION;

  const handler = async () => {
    const productsData: any = [];
    let order;
    try {
      for (let i = 0; i < orderData.length; i++) {
        order = await axios.get(`${URL}products/${orderData[i]._id}`);
        const productData = order?.data.getData;
        productsData.push({ productData });
      }
      setData([...productsData]);
    } catch (error) {}
  };
  let totalPrice = 0;
  for (let i = 0; i < data.length; i++) {
    totalPrice =
      totalPrice + data[i].productData.price * orderData[i]?.quantity;
  }

  useEffect(() => {
    const rawJson: string | null = localStorage.getItem("userEmail");
    const user = rawJson && JSON.parse(rawJson);

    if (!user) {
      router.push("/user/login");
      toast.error("Та нэвтэрнэ үү.");
      return;
    }
    handler();
  }, [orderData]);

  return (
    <div className="flex flex-col justify-between h-screen">
      <NavbarUser />
      <div className="flex my-[80px] justify-between w-[1440px] mx-auto">
        <div>
          <div className="w-fit">
            <div className="flex font-bold text-[20px] text-[#1D3178]">
              <p className="w-[300px]">Бүрэлдэхүүн</p>
              <p className="w-[240px]">Үнэ</p>
              <p className="w-[250px]">Тоо ширхэг</p>
              <p className="w-fit">Нийт</p>
            </div>
            <div className="flex flex-col gap-[20px] mt-[40px]">
              {data &&
                data?.map((e: any, index: number) => {
                  return (
                    <div key={index}>
                      <ShopCart
                        data={e.productData}
                        index={index}
                        quantity={orderData[index]?.quantity}
                      />
                    </div>
                  );
                })}
            </div>
            <div className="flex justify-end mt-[20px]">
              <button className="bg-[#FB2E86] w-[173px] flex justify-center px-4 py-2 text-white font-bold text-[14px] ">
                Kарт цэнэглэх
              </button>
            </div>
          </div>
        </div>
        <div className="w-[420px] flex flex-col">
          <p className="font-bold text-[20px] text-[#1D3178] flex justify-center">
            Нийт төлөх дүн
          </p>
          <div className="bg-[#F4F4FC] p-8 flex flex-col gap-4 mt-[40px]">
            <div className="flex justify-between">
              <p className="text-[18px] text-[#1D3178]">Нийлбэр:</p>
              <p className="text-[#1D3178] text-[18px] font-bold">
                {totalPrice
                  .toFixed(2)
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                ₮
              </p>
            </div>
            <div className=" border-b-[2px] border-gray-200"></div>
            <div className="flex justify-between">
              <p className="text-[18px] text-[#1D3178]">Төлөх дүн:</p>
              <p className="text-[#1D3178] text-[18px] font-bold">
                {totalPrice
                  .toFixed(2)
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                ₮
              </p>
            </div>
            <div className=" border-b-[2px] border-gray-200"></div>
            <button
              className="bg-[#19D16F] text-[16px] py-2 text-white font-bold"
              onClick={() => router.push("/user/purchase")}
            >
              Худалдаж авах
            </button>
          </div>
        </div>
      </div>
      <div className="items-end">
        <Footer />
      </div>
    </div>
  );
};

export default page;
