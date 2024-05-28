"use client";
import { Footer, NavbarUser, PathUser, ProductUser } from "@/components";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import useSWR from "swr";
import dotenv from "dotenv";
import { parseCookies } from "nookies";
dotenv.config();

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const page = () => {
  const URL = process.env.NEXT_PUBLIC_MONGO_CONNECTION;
  const { data, error } = useSWR(`${URL}/products/product`, fetcher);

  const allProduct = data?.getAll;

  const router = useRouter();
  const cookies = parseCookies();
  const email = cookies.email;
  useEffect(() => {
    if (!email) {
      router.push("/user/login");
      toast.error("Та нэвтэрнэ үү.");
      return;
    }
  }, []);
  if (error) return <div>Error fetching</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <NavbarUser />
      <PathUser />
      <div className="flex flex-col w-[1440px] mx-auto gap-10 mb-32">
        <div className="flex flex-col gap-1 mt-20">
          <h1 className="text-xl text-[#151886] font-bold">Электрон бараа</h1>
          <p className="text-[#8A8FB9]">125 бүтээгдэхүүн</p>
        </div>
        <div className="flex flex-wrap justify-between gap-10s">
          {allProduct.map((val: any, index: number) => {
            return (
              <div className="flex flex-col gap-2 items-center" key={index}>
                <img src={val.images} alt="" className="w-[290px] h-[290px]" />
                <div className="flex flex-col items-center">
                  <h1 className="font-semibold text-[#151875]">
                    {val.productName}
                  </h1>
                  <div className="flex gap-1">
                    <div className="h-2 w-2 bg-yellow-500 rounded-3xl"></div>
                    <div className="h-2 w-2 bg-red-500 rounded-3xl"></div>
                    <div className="h-2 w-2 bg-blue-500 rounded-3xl"></div>
                  </div>
                  <p className="text-[#151875] font-medium">{val.price}₮</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
