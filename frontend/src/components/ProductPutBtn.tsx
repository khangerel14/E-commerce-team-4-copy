"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Edit } from "@/images";

export const ProductPutBtn = ({ val }: any) => {
  const router = useRouter();
  const editProductPage = (_id: Number) => {
    localStorage.setItem("putProduct", JSON.stringify(_id));
    router.push(`/admin/product/editProduct?productId=${_id}`);
  };
  return (
    <div>
      <button className="flex" onClick={() => editProductPage(val)}>
        <Edit />
      </button>
    </div>
  );
};
