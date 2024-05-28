"use client";
import { orderStatus } from "@/utils/OrderStatus";
import React, { useContext, useState } from "react";
import { AdminOrderContext } from ".";

export const OrderStatus = () => {
  const { statusFilter }: any = useContext(AdminOrderContext);
  const [activeIndex, setActiveIndex] = useState(orderStatus[0].name);
  const handleStatus = (index: number, value: any) => {
    setActiveIndex(orderStatus[0 + index].name);
    statusFilter(value);
  };
  return (
    <div className="flex">
      {orderStatus.map((el, index) => {
        return (
          <button
            key={index}
            className="p-3 border-b"
            value={el.name}
            style={{
              borderBottomColor: activeIndex === el.name ? "#000" : "",
              color: activeIndex === el.name ? "#000" : "",
            }}
            onClick={() => handleStatus(index, el.name)}
          >
            {el.name}
          </button>
        );
      })}
    </div>
  );
};
