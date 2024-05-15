"use client";
import { useRouter } from "next/navigation";
import {
  Calendar,
  Category,
  Dollar,
  ExpandMore,
  PlusIcon,
  Search,
} from "@/images";
import { AsideBar, Navbar, ProductTableData } from "@/components";
import useSWR from "swr";
import { rate } from "@/utils/Rate";
import { month } from "@/utils/Month";
import { useEffect, useState } from "react";
import dotenv from "dotenv";
dotenv.config();

const API = "http://localhost:8000/products/product";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const page = () => {
  const URL = process.env.NEXT_PUBLIC_MONGO_CONNECTION;
  const router = useRouter();
  const [filter, setFilter] = useState("");
  const { data, error, isLoading } = useSWR(`${URL}/products/product`, fetcher);
  const productsData = data?.getAll;
  const handler = () => {
    router.push("/admin/product/addProduct");
  };
  const filterdata = productsData?.filter((e: any) => {
    if (filter === "") {
      return e;
    } else if (filter !== "") {
      return e.subCate.includes(filter) || e.createdAt.slice(5, 7) === filter;
    }
  });
  return (
    <div>
      <Navbar />
      <div className="border-black flex m-auto">
        <AsideBar />
        <div className="bg-[#ECEDF0] w-full">
          <div className="flex bg-[#ECEDF0] gap-16 h-[56px] align-middle border-b-[1px] border-black-100 items-center pl-10">
            <p>Бүтээгдэхүүн</p>
            <p>Ангилал</p>
          </div>
          <div className="p-[24px] gap-[24px]">
            <button
              className="bg-[#121316] rounded-lg w-[280px] h-[48px] ]"
              onClick={handler}
            >
              <div className="flex gap-[4px] justify-center align-middle items-center h-[24px]">
                <PlusIcon />
                <div className="text-white font-semibold text-base/[20px] tracking-[-0.3px]">
                  Бүтээгдэхүүн нэмэх
                </div>
              </div>
            </button>
            <div className="w-full h-[40px] justify-between mt-[24px] flex">
              <div className="flex gap-[13px]">
                <button className="bg-white h-[40px] rounded-lg border-[1px]">
                  <div className="flex mx-[11px] gap-[4px]">
                    <Category />
                    <select onChange={(e) => setFilter(e.target.value)}>
                      <option value="">Ангилал</option>
                      {rate.map((e, index: number) => {
                        return (
                          <option value={e.name} key={index}>
                            {e.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </button>
                <button className="bg-white h-[40px] rounded-lg border-[1px]">
                  <div className="flex mx-[11px] gap-[4px]">
                    <Dollar />
                    <div>Үнэ</div>
                    <ExpandMore />
                  </div>
                </button>
                <button className="bg-white h-[40px] rounded-lg border-[1px]">
                  <div className="flex mx-[11px] gap-[4px]">
                    <Calendar />
                    <select onChange={(e) => setFilter(e.target.value)}>
                      <option value="">сараар</option>
                      {month.map((e, index: number) => {
                        return (
                          <option key={index} value={e.value}>
                            {e.label}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </button>
              </div>
              <div className="flex w-[419px] mr-0 rounded bg-white ">
                <div className="flex items-center px-2 ">
                  <Search />
                </div>
                <input
                  className="w-[500px] rounded"
                  type="text"
                  placeholder="Бүтээгдэхүүний нэр, SKU, UPC"
                />
              </div>
            </div>
            <div className=" mt-[24px] w-full justify-between rounded-xl border-[1px] bg-white">
              <table className="mx-auto">
                <tbody>
                  <tr className="flex">
                    <th className="w-[68px] py-[12px] px-[24px] "></th>
                    <th className="w-[300px] py-[12px] pl-0 pr-[100px] font-semibold text-sm inline-flex">
                      Бүтээгдэхүүн
                    </th>
                    <th className="w-[240px] py-[12px] pl-0 pr-[100px] font-semibold text-sm inline-flex">
                      Ангилал
                    </th>
                    <th className="w-[260px] py-[12px] pl-0 pr-[100px] font-semibold text-sm inline-flex">
                      Үнэ
                    </th>
                    <th className="w-[260px] py-[12px] pl-0 pr-[100px] font-semibold text-sm inline-flex">
                      Үлдэгдэл
                    </th>
                    <th className="w-[260px] py-[12px] pl-0 pr-[100px] font-semibold text-sm inline-flex">
                      Зарагдсан
                    </th>
                    <th className="w-[260px] py-[12px] pl-0 pr-[100px] font-semibold text-sm inline-flex">
                      Нэмсэн огноо
                    </th>
                  </tr>
                  {filterdata &&
                    filterdata.map((e: any, index: number) => {
                      return (
                        <ProductTableData data={e} index={index} key={index} />
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
