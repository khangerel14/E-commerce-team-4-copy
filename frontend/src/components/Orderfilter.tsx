import { Search } from "@/images";
import { month } from "@/utils/Month";
import React, { useContext, useEffect, useState } from "react";
import { AdminOrderContext } from ".";

export const Orderfilter = () => {
  const {
    activeButton,
    dayFilter,
    weekFilter,
    monthFilter,
    searchFilter,
  }: any = useContext(AdminOrderContext);
  const birthDay = new Date();
  const today: number = birthDay.getDate();

  if (activeButton === today) {
    useEffect(() => {
      dayFilter();
    }, []);
  }
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-3">
          <button
            className="p-2 bg-white rounded"
            style={{
              backgroundColor: activeButton === today ? "green" : "",
              color: activeButton === today ? "white" : "",
            }}
            onClick={() => dayFilter()}
            value={0}
          >
            Өнөөдөр
          </button>
          <button
            className="p-2 bg-white rounded"
            value={1}
            style={{
              backgroundColor: activeButton === "week" ? "green" : "",
              color: activeButton === "week" ? "white" : "",
            }}
            onClick={() => weekFilter()}
          >
            7 Хоног
          </button>
          <select
            onChange={(e) => monthFilter(e.target.value)}
            style={{
              backgroundColor: activeButton === "month" ? "green" : "",
              color: activeButton === "month" ? "white" : "",
            }}
            className="flex p-2 bg-white justify-center items-center rounded gap-2"
          >
            <option>Сараар</option>
            {month.map((e, index) => {
              return (
                <option key={index} value={e.value}>
                  {e.label}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex py-2 px-6 bg-white gap-4 w-[360px] rounded items-center">
          <Search />
          <input
            type="text"
            placeholder="Дугаар Имэйл"
            className="w-full outline-none font-normal"
            onChange={(e) => searchFilter(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
