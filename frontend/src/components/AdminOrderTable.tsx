import React, { useContext } from "react";
import axios from "axios";
import { orderHandleStatus } from "@/utils/OrderhandleStatus";
import { Right } from "@/images";
import { AdminOrderContext } from ".";
import dotenv from "dotenv";
dotenv.config();

export const AdminOrderTable = ({ filterData, handler }: any) => {
  const { orderData }: any = useContext(AdminOrderContext);
  const URL = process.env.NEXT_PUBLIC_MONGO_CONNECTION;
  const handleOrderStatus = async (id: number, orderStatus: string) => {
    try {
      const update = await axios.put(`${URL}/order/${id}`, {
        status: orderStatus,
      });
    } catch (error) {}
  };

  return (
    <div>
      <div className="bg-white h-fit border rounded-xl border-gray-300 w-full">
        <h1 className="text-[36px] p-4">Захиалга</h1>
        <div className="bg-gray-200 py-6 w-full flex px-6">
          <table className="w-full flex   justify-between  ">
            <tbody className="w-full flex flex-col justify-between">
              <tr className="w-full flex justify-between">
                <th className="w-[200px] flex justify-start">
                  Захиалгын ID дугаар
                </th>
                <th className="w-[200px] flex justify-start">Захиалагч</th>
                <th className="w-[200px] flex justify-start">Огноо</th>
                <th className="w-[200px] flex justify-start">Цаг</th>
                <th className="w-[200px] flex justify-start">Төлбөр</th>
                <th className="w-[200px] flex justify-start">Статус</th>
                <th className="w-[200px] flex justify-start">Дэлгэрэнгүй</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="px-6">
          {orderData &&
            orderData?.map((el: any, index: number) => {
              return (
                <div className="w-full" key={index}>
                  <tr className=" w-full flex justify-between items-center bg-white">
                    <td className="w-[200px] flex justify-start">
                      #{el.orderNumber}
                    </td>
                    <td className="w-[200px] ">
                      <p>{el.userId?.name}</p>
                      <p className="text-[14px] text-gray font-light">
                        {el.userId?.email}
                      </p>
                    </td>
                    <td className="w-[200px]  text-gray font-light">
                      {el.createdAt.slice(0, 10)}
                    </td>
                    <td className="w-[200px]  text-gray font-light">
                      {el.createdAt.slice(11, 16)}
                    </td>
                    <td className="w-[200px]  text-gray font-light">
                      {el.amountPaid
                        .toFixed(2)
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                    </td>
                    <td className="w-[200px]  text-gray font-light">
                      <select
                        className="py-1 px-2 rounded-xl border "
                        style={{
                          backgroundColor:
                            el.status === "Хүргэгдсэн"
                              ? "#C1E6CF"
                              : "" || el.status === "Хүргэлтэнд гарсан"
                              ? "#B7DDFF"
                              : "" || el.status === "Шинэ захиалга"
                              ? "white"
                              : "" || el.status === "Бэлтгэгдэж байна"
                              ? "#ECEDFO"
                              : "" || el.status === "Цуцлагдсан"
                              ? "#FCBABE"
                              : "",
                        }}
                        value={el.name}
                        onChange={(e) => {
                          handleOrderStatus(el._id, e.target.value);
                        }}
                      >
                        <option value={`${el.status}`}>{el.status}</option>
                        {orderHandleStatus.map((e: any, index: number) => {
                          return <option key={index}>{e.name}</option>;
                        })}
                      </select>
                    </td>
                    <td
                      className="w-[200px] text-[14px] pl-[85px]  cursor-pointer"
                      onClick={() => handler(el._id)}
                    >
                      <Right />
                    </td>
                  </tr>
                  <div className="border-b bg-gray-200 w-full"></div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
