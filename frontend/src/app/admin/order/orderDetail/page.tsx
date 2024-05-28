"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Deliver, Down, ToLeft } from "@/images";
import { AsideBar, Navbar } from "@/components";
import dotenv from "dotenv";
dotenv.config();
const URL = process.env.NEXT_PUBLIC_MONGO_CONNECTION;

const page = () => {
  const orderId = JSON.parse(localStorage.getItem("orderId") as string);
  const [data, setData] = useState<string[] | any>([]);
  const getOrderData = async () => {
    try {
      const get = await axios.get(`${URL}/order/${orderId.id}`);
      setData(get.data.getOneOrder);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getOrderData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex mx-auto ">
        <AsideBar />
        <div className="flex flex-col w-full">
          <div className="flex gap-5 items-center">
            <button className="flex h-14 w-14 items-center justify-center">
              <ToLeft />
            </button>
            <h1 className="text-xl">Захиалгын дэлгэрэнгүй</h1>
          </div>
          <div className="flex bg-[#F0F0F0] w-full h-screen p-9 justify-between gap-10">
            <div className="flex bg-white w-1/2 rounded-xl p-6 h-full">
              <div className="flex flex-col w-full gap-5 h-fit">
                <div className="flex justify-between w-fit">
                  <div className="flex flex-col gap-1">
                    <h1 className="text-gray-700">Захиалгын ID дугаар:</h1>
                    <p className="font-semibold">#{data.orderNumber}</p>
                  </div>
                  <div>
                    <button className="flex gap-3 border rounded-3xl p-1 px-4 text-gray-700">
                      Шинэ захиалга <Down />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="text-gray-700">Захиалагч: Хувь хүн</h1>
                  <div className="flex gap-1">
                    <p className="font-semibold">{data.firstName}</p>
                    <p>
                      {data.userId?.email}, {data.phoneNumber}
                    </p>
                  </div>
                </div>
                {data.details?.map((e: any, index: number) => {
                  return (
                    <div
                      className="flex bg-gray-100 h-fit w-full rounded-xl"
                      key={index}
                    >
                      <img
                        src={e.images[0]}
                        className="bg-grey"
                        width={"180px"}
                        height={"180px"}
                      />
                      <div className="flex flex-col p-3 justify-between w-full">
                        <h1 className="font-semibold text-xl text-black">
                          {e.productName}
                        </h1>
                        <div className="my-3">
                          <p>{e.createdAt.slice(0, 10)}</p>
                          <p>Бүтээгдэхүүний ID: {e._id.slice(0, 10)}</p>
                        </div>
                        <div className="flex justify-between">
                          <p>
                            Тоо ширхэг:{e.qty} * ₮
                            {e.price
                              .toFixed(2)
                              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                          </p>
                          <p className="font-semibold">
                            ₮
                            {(e.qty * e.price)
                              .toFixed(2)
                              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex w-1/2 h-fit flex-col gap-5">
              <div className="rounded-xl bg-white w-full">
                <div className="p-7 border-b-2 pb-6">
                  <h1>Хүргэлтийн мэдээлэл</h1>
                </div>
                <div className="p-7">
                  <p>Гэр:</p>
                  <p className="font-semibold">
                    {data.city},{data.address},{data.apartment},байр,8-р орц,6
                    давхар
                  </p>
                </div>
              </div>
              <div className="rounded-xl bg-white w-full">
                <div className="p-7 border-b-2 pb-6">
                  <h1>Төлбөрийн мэдээлэл</h1>
                </div>
                <div className="p-7">
                  <p>Бүтээгдэхүүн:</p>
                  <div className="flex flex-col gap-3 mt-4">
                    {data.details?.map((e: any) => {
                      return (
                        <div className="flex justify-between">
                          <div className="flex gap-2">
                            <p>{e.productName}</p>
                            <p className="pl-2 font-bold"> * {e.qty}</p>
                          </div>
                          <p>
                            ₮
                            {(e.price * e.qty)
                              .toFixed(2)
                              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                          </p>
                        </div>
                      );
                    })}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <h1>Хүргэлт</h1>
                        <Deliver />
                      </div>
                      <p>₮ 5,000</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3"></div>
                  <hr className="my-5" />
                  <div className="flex justify-between items-center font-semibold">
                    <p>Нийт төлсөн дүн</p>
                    <p>
                      ₮
                      {(data?.amountPaid + 5000)
                        .toFixed(2)
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
