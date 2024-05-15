"use client";
import { Trolley } from "@/images";
import Heart from "@/images/Heart";
import { useContext, useEffect } from "react";
import useSWR from "swr";
import { UserOrderContext } from ".";
import { useRouter } from "next/navigation";
import dotenv from "dotenv";
dotenv.config();

const API = "http://localhost:8000/products/product";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const Ontsloh = () => {
  const URL = process.env.NEXT_PUBLIC_MONGO_CONNECTION;

  const router = useRouter();
  const { data, error } = useSWR(`${URL}/products/product`, fetcher);
  const { addCart, handlerProductDetail }: any = useContext(UserOrderContext);
  const productData = data?.getAll;
  useEffect(() => {
    localStorage.removeItem("productId");
  }, []);
  return (
    <div className="flex flex-col justify-center items-center gap-[20px] w-[1440px] m-auto ">
      <p className="text-3xl font-bold">Онцлох бүтээгдэхүүн</p>
      <div className="flex gap-[50px] w-[1440px] justify-between">
        {productData &&
          productData.slice(0, 4).map((el: any, index: number) => {
            return (
              <div
                key={index + el._id}
                className="w-1/5 h-[461px] shadow-xl rounded-4 flex flex-col py-[20px] group cursor-pointer"
              >
                <div className=" opacity-0 group-hover:opacity-100 flex justify-between p-3">
                  <div className="flex gap-3">
                    <div
                      className="bg-grey cursor-pointer"
                      onClick={() => addCart(el._id)}
                    >
                      <Trolley />
                    </div>
                    <div>
                      <Heart />
                    </div>
                  </div>
                  <button
                    className="p-1 text-[14px] text-white rounded bg-[#FB2E86]"
                    onClick={() => handlerProductDetail(el._id)}
                  >
                    Барааны дэлгэрэнгүй
                  </button>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 mt-3">
                  <img src={el.images} className="w-[216px] h-[271px]" />

                  <p className="text-[#FB2E86] text-xl ">{el.productName}</p>
                  <p className="text-[#151875] text-xl">
                    {el.price
                      .toFixed(2)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1'")}
                    ₮
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
