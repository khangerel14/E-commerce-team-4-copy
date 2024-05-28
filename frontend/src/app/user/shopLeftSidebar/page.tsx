"use client";
import { Footer, NavbarUser, PathUser, ProductUserDetail } from "@/components";
import { Star } from "@/images";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import useSWR from "swr";
import dotenv from "dotenv";
import { parseCookies } from "nookies";
dotenv.config();

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const page = () => {
  const URL = process.env.NEXT_PUBLIC_MONGO_CONNECTION;
  const router = useRouter();
  const { data, error } = useSWR(`${URL}/products/product`, fetcher);
  const length = data?.getAll.length;

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
      <Toaster position="top-right" />
      <div className="flex w-[1440px] mx-auto flex-col">
        <div className="flex flex-col gap-1 mt-24 mb-16">
          <h1 className="text-xl text-[#151886] font-bold">Электрон бараа</h1>
          <p className="text-[#8A8FB9]">{length} бүтээгдэхүүн</p>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col h-fit w-[300px] gap-20">
            <div className="flex flex-col gap-4">
              <h1 className="border-b-2 text-2xl font-bold border-black text-[#151875] w-32">
                Үнэлгээ
              </h1>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id=""
                  className="bg-yellow-400 h-5 w-5"
                />
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
                <p>(243)</p>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id=""
                  className="bg-yellow-400 h-5 w-5"
                />
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
                <p>(243)</p>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id=""
                  className="bg-yellow-400 h-5 w-5"
                />
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
                <p>(243)</p>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id=""
                  className="bg-yellow-400 h-5 w-5"
                />
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
                <p>(243)</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="border-b-2 text-2xl font-bold border-black text-[#151875] w-32">
                Ангилал
              </h1>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id=""
                  className="bg-yellow-400 h-5 w-5"
                />
                <p>Prestashop</p>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id=""
                  className="bg-yellow-400 h-5 w-5"
                />
                <p>Magento</p>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id=""
                  className="bg-yellow-400 h-5 w-5"
                />
                <p>Bigcommerce</p>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id=""
                  className="bg-yellow-400 h-5 w-5"
                />
                <p>OsCommerce</p>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id=""
                  className="bg-yellow-400 h-5 w-5"
                />
                <p>3D Cart</p>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id=""
                  className="bg-yellow-400 h-5 w-5"
                />
                <p>Bags</p>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id=""
                  className="bg-yellow-400 h-5 w-5"
                />
                <p>Watches</p>
              </div>
            </div>
          </div>
          <ProductUserDetail />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
