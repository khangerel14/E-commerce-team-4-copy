"use client";

import { AsideBar, Navbar } from "@/components";
import { Check, Search } from "@/images";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import dotenv from "dotenv";
dotenv.config();

const page = () => {
  const [check, setCheck] = useState(false);
  const [shopInformation, setShopInformation] = useState("");
  const router = useRouter();
  const URL = process.env.NEXT_PUBLIC_MONGO_CONNECTION;
  const handler = async () => {
    try {
      if (typeof window != undefined) {
        const id = JSON.parse(window.localStorage.getItem("id") as string);
        const post = await axios.put(`${URL}/user${id}`, {
          shopInformation: shopInformation,
        });
        setCheck(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddProduct = () => {
    router.push("/addProduct");
  };

  return (
    <div>
      <Navbar />
      <div className="flex w-full m-auto">
        <AsideBar />
        <div className="bg-gray-200 w-[100%] h-[100vh]  flex justify-center py-[100px]">
          <div className="w-[729px] flex flex-col py-[20px] px-[20px] h-[304px] bg-white rounded-[10px] gap-[20px]">
            <p className="text-xl font-bold">Дэлгүүрийн профайл үүсгэх</p>
            <div className="flex flex-col justify-center items-center gap-[20px]">
              <div className="flex justify-between px-[20px] w-[676px] h-[60px] rounded-[10px] border-gray-300 border-2 items-center">
                <div className="flex gap-8">
                  {check === true ? (
                    <p className="flex justify-center items-center">
                      <Check />
                    </p>
                  ) : (
                    <input type="checkbox" />
                  )}
                  <p>Дэлгүүрийн төрлөө оруулна уу</p>
                </div>
                <a
                  href="#my_modal_8"
                  className=" border-2 border-gray-300 px-[10px] rounded-[8px] py-[5px]"
                >
                  Дэлгүүрийн төрөл
                </a>
                <div className="modal" role="dialog" id="my_modal_8">
                  <div className="modal-box w-[551px] h-[341px] px-[25px] py-[25px] flex flex-col justify-between">
                    <div className="flex flex-col gap-[30px]">
                      <h3 className="font-bold text-lg">
                        Та ямар төрлийн бүтээгдэхүүн борлуулах вэ?
                      </h3>
                      <div className="flex flex-col gap-[5px] ">
                        <div className="flex bg-gray-200 py-[10px] px-[10px] rounded-[8px] ">
                          <Search />
                          <input
                            onChange={(e) => setShopInformation(e.target.value)}
                            type="text"
                            placeholder="Дэргүүрийн төрлөө оруулна уу."
                            className="w-[100%] bg-gray-200"
                          />
                        </div>
                        <p className="text-gray-400">
                          Жич: Та үүнийг хүссэн үедээ өөрчилж болно.
                        </p>
                      </div>
                    </div>
                    <div className="modal-action">
                      <a
                        href="#"
                        className="btn bg-white text-black hover:text-black"
                      >
                        Цуцлах
                      </a>
                      <a
                        href="#"
                        className="btn  text-white hover:text-black "
                        style={{
                          backgroundColor:
                            shopInformation === "" ? "" : "black",
                        }}
                        onClick={handler}
                      >
                        Хадгалах
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between px-[20px] w-[676px] h-[60px] rounded-[10px] border-gray-300 border-2 items-center">
                <div className="flex gap-8">
                  <input type="checkbox" />
                  <p>Эхний бүтээгдэхүүнээ нэмнэ үү</p>
                </div>
                <button
                  onClick={handleAddProduct}
                  className="border-2 border-gray-300 px-[10px] rounded-[8px] py-[5px]"
                >
                  Бүтээгдэхүүн нэмэх
                </button>
              </div>
              <div className="flex justify-between px-[20px] w-[676px] h-[60px] rounded-[10px] border-gray-300 border-2 items-center">
                <div className="flex gap-8">
                  <input type="checkbox" />
                  <p>Хүргэлтийг тохируулна уу</p>
                </div>
                <button className="border-2 border-gray-300 px-[10px] rounded-[8px] py-[5px]">
                  Хүргэлт тохируулах
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
