import React, { useContext, useState } from "react";
import { createProductContext } from ".";
import { Plus } from "@/images";
import axios from "axios";
import { useRouter } from "next/navigation";
import dotenv from "dotenv";
dotenv.config();

export const CreateProduct = ({ createProduct }: any) => {
  const router = useRouter();
  const [images, setImages] = useState<string[]>([]);
  const { formDataRef }: any = useContext(createProductContext);
  const handleRef = (field: string, value: string | number) => {
    formDataRef.current = { ...formDataRef.current, [field]: value };
  };

  const URL = process.env.NEXT_PUBLIC_MONGO_CONNECTION;
  const handleSubmit = async () => {
    try {
      const res = await axios.post(`${URL}/products/product`, {
        productName: formDataRef.current.productName,
        categoryId: formDataRef.current.categoryId,
        price: formDataRef.current.price,
        productCode: formDataRef.current.productCode,
        description: formDataRef.current.description,
        residual: formDataRef.current.residual,
        mainCate: formDataRef.current.mainCate,
        subCate: formDataRef.current.subCate,
        images: formDataRef.current.images,
      });
      localStorage.setItem("product", JSON.stringify([res]));
      createProduct();
      router.push("/admin/product");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col gap-5 w-1/2">
      <div className="w-full bg-white rounded-xl p-6 gap-2 flex flex-col">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-lg">Ерөнхий ангилал</h1>
          <input
            type="text"
            className="border w-full p-3 rounded-lg h-16"
            placeholder="Сонгох"
            onChange={(e) => handleRef("mainCate", e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-lg">Дэд ангилал</h1>
          <input
            type="text"
            className="border w-full p-3 rounded-lg h-16"
            placeholder="Сонгох"
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
          placeholder="Таг нэмэх..."
          onChange={(e) => handleRef("categoryId", e.target.value)}
        />
        <p className="text-gray-600">Санал болгох: Гутал, Цүнх, Эмэгтэй</p>
      </div>
      <div className="flex gap-5 items-start justify-end mt-3">
        <button className="border p-3 px-5 text-black bg-white rounded-lg">
          Ноорог
        </button>
        <button
          className="border p-3 px-5 text-white bg-black rounded-lg"
          onClick={handleSubmit}
        >
          Нийтлэх
        </button>
      </div>
    </div>
  );
};
