import React, { useContext, useState } from "react";
import { createProductContext } from ".";

export const CreateProductField = () => {
  const [images, setImages] = useState<string[]>([]);
  const { formDataRef }: any = useContext(createProductContext);
  const handleRef = (field: string, value: string | number) => {
    formDataRef.current = { ...formDataRef.current, [field]: value };
  };
  const handleImageUpload = async (e: any) => {
    try {
      setImages((prev) => [...prev, e.target.files[0]]);
    } catch (error) {
      console.log("Error uploading image:", error);
    }
  };

  return (
    <div className="flex flex-col gap-5 w-1/2">
      <div className="w-full bg-white rounded-xl p-6 gap-2 flex flex-col">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold">Бүтээгдэхүүн нэр</h1>
          <input
            type="text"
            className="border w-full p-3 rounded-lg"
            placeholder="Нэр"
            onChange={(e) => handleRef("productName", e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold">Нэмэлт мэдээлэл</h1>
          <input
            type="text"
            className="border w-full p-3 rounded-lg h-fit"
            placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар"
            onChange={(e) => handleRef("description", e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold">Барааны код</h1>
          <input
            type="text"
            className="border w-full p-3 rounded-lg"
            placeholder="#12345678"
            onChange={(e) => handleRef("productCode", e.target.value)}
          />
        </div>
      </div>      
      <div className="w-full h-[163px] bg-white rounded-xl p-6 gap-2 flex justify-between">
        <input type="text" className="border outline-none w-full p-4" placeholder="Image URL" onChange={(e) => handleRef("images", e.target.value)}/>
        <input type="text" className="border outline-none w-full p-4" placeholder="Image URL" onChange={(e) => handleRef("images", e.target.value)}/>
        <input type="text" className="border outline-none w-full p-4" placeholder="Image URL" onChange={(e) => handleRef("images", e.target.value)}/>
      </div>
      <div className="w-full h-[163px] bg-white rounded-xl p-6 gap-2 flex justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold">Үндсэн үнэ</h1>
          <input
            type="text"
            placeholder="Үндсэн үнэ"
            className="border p-2 rounded-lg w-[230px]"
            onChange={(e) => handleRef("price", e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold">Үлдэгдэл тоо ширхэг</h1>
          <input
            type="text"
            placeholder="Үлдэгдэл тоо ширхэг"
            className="border p-2 rounded-lg w-[230px]"
            onChange={(e) => handleRef("residual", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
