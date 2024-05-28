"use client";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Img, Plus, ToLeft } from "@/images";
import { AsideBar, Navbar } from "@/components";
import dotenv from "dotenv";
dotenv.config();

type data = {
  productName: string;
  description: string;
  productCode: string;
  price: string;
  tag: string;
  residual: string;
  mainCate: string;
  subCate: string;
};
const URL = process.env.NEXT_PUBLIC_MONGO_CONNECTION;

const page = () => {
  const [data, setData] = useState<data>();
  const router = useRouter();
  const formDataRef = useRef({
    productName: "",
    description: "",
    productCode: "",
    categoryId: "",
    price: "",
    tag: "",
    residual: "",
    mainCate: "",
    subCate: "",
  });
  const handleRef = (field: string, value: string | number) => {
    formDataRef.current = { ...formDataRef.current, [field]: value };
  };
  const gettingData = async () => {
    const productId = JSON.parse(localStorage.getItem("putProduct") as string);
    try {
      const res = await axios.get(`${URL}/products/${productId}`);
      setData(res.data.getData);
    } catch (error) {
      console.log(error);
    }
  };
  const putProduct = async () => {
    const productId = JSON.parse(localStorage.getItem("putProduct") as string);
    try {
      const res = await axios.put(
        `http://localhost:8000/products/${productId}`,
        { ...formDataRef.current }
      );
      console.log(res);
      router.push("/Product");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    gettingData();
  }, []);
  console.log(data);
  const name = data?.productName;
  const description = data?.description;
  const productCode = data?.productCode;
  const price = data?.price;
  const tag = data?.tag;
  const residual = data?.residual;
  const mainCate = data?.mainCate;
  const subCate = data?.subCate;
  return (
    <div className="flex flex-col mx-auto relative">
      <Navbar />
      <div className="flex flex-col mx-auto w-full">
        <div className="flex mx-auto justify-between w-full">
          <AsideBar />
          <div className="bg-[#FEFEFE] h-14 w-full ">
            <div className="flex gap-10 items-center">
              <a href="/Product">
                <button className="flex h-14 w-14 items-center justify-center">
                  <ToLeft />
                </button>
              </a>
              <h1 className="text-xl">Бүтээгдэхүүн нэмэх</h1>
            </div>
            <div className="flex bg-[#F0F0F0] w-full h-screen p-9 flex-col">
              <div className="flex w-full h-fit justify-between gap-10">
                <div className="flex flex-col gap-5 w-1/2">
                  <div className="w-full bg-white rounded-xl p-6 gap-2 flex flex-col">
                    <div className="flex flex-col gap-1">
                      <h1 className="font-semibold">Бүтээгдэхүүн нэр</h1>
                      <input
                        type="text"
                        className="border w-full p-3 rounded-lg"
                        placeholder={name}
                        onChange={(e) =>
                          handleRef("productName", e.target.value)
                        }
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h1 className="font-semibold">Нэмэлт мэдээлэл</h1>
                      <input
                        type="text"
                        className="border w-full p-3 rounded-lg h-fit"
                        placeholder={description}
                        onChange={(e) =>
                          handleRef("description", e.target.value)
                        }
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h1 className="font-semibold">Барааны код</h1>
                      <input
                        type="text"
                        className="border w-full p-3 rounded-lg"
                        placeholder={productCode}
                        onChange={(e) =>
                          handleRef("productCode", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="w-full h-52 bg-white rounded-xl p-6 gap-2 flex flex-col">
                    <h1 className="font-semibold text-xl">
                      Бүтээгдэхүүн зураг
                    </h1>
                    <div className="flex gap-6 justify-start items-center h-full">
                      <div className="flex items-center justify-center">
                        <input
                          type="image"
                          src=""
                          alt=""
                          className="flex justify-center items-center h-[124px] w-[124px] border border-dashed rounded-xl relative"
                        />
                        <div className="absolute">
                          <Img />
                        </div>
                      </div>
                      <div className="flex items-center justify-center">
                        <input
                          type="image"
                          src=""
                          alt=""
                          className="flex justify-center items-center h-[124px] w-[124px] border border-dashed rounded-xl relative"
                        />
                        <div className="absolute">
                          <Img />
                        </div>
                      </div>
                      <div className="flex items-center justify-center">
                        <input
                          type="image"
                          src=""
                          alt=""
                          className="flex justify-center items-center h-[124px] w-[124px] border border-dashed rounded-xl relative"
                        />
                        <div className="absolute">
                          <Img />
                        </div>
                      </div>
                      <button className="h-10 w-10 rounded-[50%] bg-gray-200 flex justify-center items-center left-3">
                        <Plus />
                      </button>
                    </div>
                  </div>
                  <div className="w-full h-[163px] bg-white rounded-xl p-6 gap-2 flex justify-between">
                    <div className="flex flex-col gap-1">
                      <h1 className="font-semibold">Үндсэн үнэ</h1>
                      <input
                        type="text"
                        placeholder={price}
                        className="border p-2 rounded-lg w-[230px]"
                        onChange={(e) => handleRef("price", e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h1 className="font-semibold">Үлдэгдэл тоо ширхэг</h1>
                      <input
                        type="text"
                        placeholder={residual}
                        className="border p-2 rounded-lg w-[230px]"
                        onChange={(e) => handleRef("residual", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5 w-1/2">
                  <div className="w-full bg-white rounded-xl p-6 gap-2 flex flex-col">
                    <div className="flex flex-col gap-1">
                      <h1 className="font-semibold text-lg">Ерөнхий ангилал</h1>
                      <input
                        type="text"
                        className="border w-full p-3 rounded-lg h-16"
                        placeholder={mainCate}
                        onChange={(e) => handleRef("mainCate", e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h1 className="font-semibold text-lg">Дэд ангилал</h1>
                      <input
                        type="text"
                        className="border w-full p-3 rounded-lg h-16"
                        placeholder={subCate}
                        onChange={(e) => handleRef("subCate", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full bg-white rounded-xl p-6 gap-4 flex flex-col">
                    <h1 className="text-xl font-semibold">Төрөл</h1>
                    <div className="flex gap-7 items-center">
                      <p>Өнгө</p>
                      <div className="h-10 w-10 rounded-[50%] bg-black"></div>
                      <div className="h-10 w-10 rounded-[50%] bg-red-700"></div>
                      <div className="h-10 w-10 rounded-[50%] bg-purple-700"></div>
                      <button className="h-10 w-10 rounded-[50%] bg-gray-200 flex justify-center items-center">
                        <Plus />
                      </button>
                    </div>
                    <div className="flex gap-7 items-center">
                      <p>Хэмжээ</p>
                      <div className="h-10 w-10 rounded-[50%] bg-gray-200 flex items-center justify-center">
                        M
                      </div>
                      <div className="h-10 w-10 rounded-[50%] bg-gray-200 flex items-center justify-center">
                        L
                      </div>
                      <div className="h-10 w-10 rounded-[50%] bg-gray-200 flex items-center justify-center">
                        XL
                      </div>
                      <div className="h-10 w-10 rounded-[50%] bg-gray-200 flex items-center justify-center">
                        2XL
                      </div>
                      <div className="h-10 w-10 rounded-[50%] bg-gray-200 flex items-center justify-center">
                        3XL
                      </div>
                      <button className="h-10 w-10 rounded-[50%] bg-gray-200 flex justify-center items-center">
                        <Plus />
                      </button>
                    </div>
                    <button className="border p-3 px-5 w-fit rounded-md font-semibold">
                      Төрөл нэмэх
                    </button>
                  </div>
                  <div className="w-full bg-white rounded-xl p-6 gap-2 flex flex-col">
                    <h1 className="font-semibold text-lg">Таг</h1>
                    <input
                      type="text"
                      className="border w-full p-3 rounded-lg h-16"
                      placeholder={tag}
                      onChange={(e) => handleRef("categoryId", e.target.value)}
                    />
                    <p className="text-gray-600">
                      Санал болгох: Гутал, Цүнх, Эмэгтэй
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 items-start justify-end mt-3">
                <button className="border p-3 px-5 text-black bg-white rounded-lg">
                  Ноорог
                </button>
                <button
                  className="border p-3 px-5 text-white bg-black rounded-lg"
                  onClick={putProduct}
                >
                  Нийтлэх
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
