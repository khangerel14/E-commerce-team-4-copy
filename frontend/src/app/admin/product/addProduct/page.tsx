"use client";
import React, { useState } from "react";
import { ToLeft } from "@/images";
import {
  AsideBar,
  CreateProduct,
  CreateProductProvider,
  Modal,
  Navbar,
} from "@/components";
import { CreateProductField } from "@/components/CreateProductField";

const page = () => {
  const [open, setOpen] = useState(false);
  const createProduct = () => {
    setOpen(!open)
  }
  return (
    <CreateProductProvider className="flex flex-col mx-auto relative">
      <Navbar />
      <div className="flex flex-col mx-auto w-full">
        <div className="flex mx-auto justify-between w-full">
          <AsideBar />
          <div className="bg-[#FEFEFE] h-14 w-full ">
            <div className="flex gap-10 items-center">
              <a href="/admin/product">
                <button className="flex h-14 w-14 items-center justify-center">
                  <ToLeft />
                </button>
              </a>
              <h1 className="text-xl">Бүтээгдэхүүн нэмэх</h1>
            </div>
            <div className="flex bg-[#F0F0F0] w-full h-screen p-9 flex-col">
              <div className="flex w-full h-fit justify-between gap-10">
                <CreateProductField />
                <CreateProduct createProduct={createProduct }/>
              </div>
            </div>
          </div>
        </div>
        { open && <Modal createProduct={createProduct } />}
      </div>
    </CreateProductProvider>
  );
};

export default page;
