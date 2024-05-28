"use client";
import { AsideBar, Navbar } from "@/components";
import { Down } from "@/images";
import { month } from "@/utils/Month";
import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";
import useSWR from "swr";
import dotenv from "dotenv";
dotenv.config();
const URL = process.env.NEXT_PUBLIC_MONGO_CONNECTION;

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Page = () => {
  const { data, error, isLoading } = useSWR(`${URL}/order`, fetcher);
  const [activeButton, setActiveButton] = useState("");
  const orderData = data?.getAllOrder;
  const birthDay = new Date();
  const today: number = birthDay.getDate();
  const filterData = orderData?.filter((e: { createdAt: string }) => {
    if (activeButton === "") {
      return e.createdAt.slice(8, 10) == String(today);
    } else if (activeButton === "week") {
      return e.createdAt.slice(8, 10) > String(today - 7);
    } else if (activeButton === "сараар") {
      return e;
    } else {
      return e.createdAt.slice(5, 7) === activeButton;
    }
  });

  return (
    <div>
      <Navbar />
      <div className="flex m-auto">
        <AsideBar />
        <div className="bg-[#ECEDF0] w-full py-10 px-10">
          <div className=" bg-white rounded-xl m-auto w-1/2">
            <div className="border-b-[1px] border-black-100">
              <div className="px-[24px] py-[20px] flex gap-4 justify-between">
                <div className="w-fit">
                  <p className="w-[73px] h-[28px] font-bold text-xl tracking-tighter">
                    Орлого
                  </p>
                </div>
                <button className="bg-[#1C20240A] px-[10px] py-[6px] rounded-lg">
                  <div className="flex gap-1 align-items vertical-align">
                    <Down />
                    <p className="font-semibold text-sm">Хуулга татах</p>
                  </div>
                </button>
              </div>
            </div>
            <div className="gap-1 p-[24px]">
              <div className="flex justify-between ">
                <p className="font-bold text-3xl tracking-tighter">235,000₮</p>
                <div className="flex gap-[8px]">
                  <button
                    className="rounded-lg border-1 px-[10px] py-[6px] "
                    style={{
                      backgroundColor: activeButton === "" ? "#18BA51" : "",
                    }}
                    onClick={() => setActiveButton("")}
                  >
                    <p className="font-semibold text-sm ">Өнөөдөр</p>
                  </button>
                  <button
                    className="rounded-lg border-1 px-[10px] py-[6px] "
                    onClick={(e) => setActiveButton("week")}
                    style={{
                      backgroundColor: activeButton === "week" ? "#18BA51" : "",
                    }}
                  >
                    <p className="font-semibold text-sm ">7 хоног</p>
                  </button>
                  <div className="bg-white rounded-lg border-[1px] p-2">
                    <select onChange={(e) => setActiveButton(e.target.value)}>
                      <option value="сараар">сараар</option>
                      {month.map((el) => {
                        return (
                          <option
                            style={{
                              backgroundColor:
                                activeButton === el.value ? "#18BA51" : "",
                            }}
                            value={el.value}
                          >
                            {el.label}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <table className="w-1/2 bg-white mx-auto mt-10 rounded-xl px-24">
            <tbody className="flex flex-col gap-4 mt-4">
              <tr className="flex justify-between w-full px-16">
                <th className="flex w-[200px] items-center justify-between font-semibold ">
                  Захиалгын ID дугаар
                </th>
                <th className="w-[100px]">Захиалагч</th>
                <th className="w-[130px] pl-16">Төлбөр</th>
                <th className="w-[150px] pr-5">Огноо</th>
              </tr>
              {filterData &&
                filterData.map(
                  (
                    val: {
                      _id: string | any[];
                      phoneNumber:
                        | string
                        | number
                        | boolean
                        | ReactElement<any, string | JSXElementConstructor<any>>
                        | Iterable<ReactNode>
                        | ReactPortal
                        | PromiseLikeOfReactNode
                        | null
                        | undefined;
                      amountPaid: number;
                      createdAt: string | any[];
                    },
                    key: Key | null | undefined
                  ) => {
                    return (
                      <div className="flex flex-col px-12">
                        <tr className="px-6 flex justify-between" key={key}>
                          <td className="w-[200px]">#{val._id.slice(0, 10)}</td>
                          <td className="w-[200px] pl-[40px]">
                            {val.phoneNumber}
                          </td>
                          <td className="w-[130px] pl-[40px]">
                            {val.amountPaid
                              .toFixed(2)
                              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                            ₮
                          </td>
                          <td className="w-[150px] pl-[50px]">
                            {val.createdAt.slice(0, 10)}
                          </td>
                        </tr>
                        <div className="border-b bg-grey mt-2"></div>
                      </div>
                    );
                  }
                )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Page;
