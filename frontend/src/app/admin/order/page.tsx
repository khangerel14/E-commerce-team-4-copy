"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  AdminOrderContextProvider,
  AdminOrderTable,
  AsideBar,
  Navbar,
  OrderStatus,
  Orderfilter,
} from "@/components";

const page = () => {
  const router = useRouter();
  const handler = (id: number) => {
    router.push("/admin/order/orderDetail");
    localStorage.setItem("orderId", JSON.stringify({ id }));
  };

  return (
    <AdminOrderContextProvider>
      <div>
        <Navbar />
        <div className="flex w-full m-auto">
          <AsideBar />
          <div className="bg-gray-200 w-full ">
            <OrderStatus />
            <div className="p-8 flex flex-col gap-5 font-bold">
              <Orderfilter />
              <AdminOrderTable handler={handler} />
            </div>
          </div>
        </div>
      </div>
    </AdminOrderContextProvider>
  );
};
export default page;
