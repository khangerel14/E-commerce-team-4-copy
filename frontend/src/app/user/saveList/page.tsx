"use client";
import { SaveProduct, SearchProduct, Star, TrolleyProduct } from "@/images";
import useSWR from "swr";
import React from "react";
import { Footer, NavbarUser, PathUser } from "@/components";
import dotenv from "dotenv";
dotenv.config();

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const page = () => {
  const URL = process.env.NEXT_PUBLIC_MONGO_CONNECTION;
  const { data, error } = useSWR(`${URL}/products/product`, fetcher);

  const allProduct = data?.getAll;
  const lenth = data?.getAll.length;

  if (error) return <div>Error fetching</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <NavbarUser />
      <PathUser />
      <div className="flex flex-col gap-10 mx-auto w-[1440px] mt-20 mb-32">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl text-[#151886] font-bold">
            Хадгалсан бүтээгдэхүүн{" "}
          </h1>
          <p className="text-[#8A8FB9]">{lenth} бүтээгдэхүүн</p>
        </div>
        {allProduct.map((val: any) => {
          return (
            <div className="flex gap-10">
              <img src={val.images} alt="" className="w-[240px] h-[240px]" />
              <div className="flex flex-col justify-between my-4">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-5 items-center">
                    <h1 className="font-semibold text-[#151875]">
                      {val.productName}
                    </h1>
                    <div className="flex gap-1">
                      <div className="h-2 w-2 bg-yellow-500 rounded-3xl"></div>
                      <div className="h-2 w-2 bg-red-500 rounded-3xl"></div>
                      <div className="h-2 w-2 bg-blue-500 rounded-3xl"></div>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <p className="text-[#151875] font-medium">{val.price}₮</p>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <p className="text-md text-[#9295AA]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta itaque recusandae quasi, velit voluptate, sapiente
                    optio reprehenderit saepe corrupti temporibus modi
                    veritatis.
                  </p>
                </div>
                <div className="flex items-center gap-5">
                  <button className="p-2 bg-[#FB2E86] px-4 rounded font-semibold text-white">
                    Худалдан авах
                  </button>
                  <button className="p-2 bg-[#F6F5FF] px-4 rounded font-semibold text-[#535399]">
                    Хасах
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default page;
