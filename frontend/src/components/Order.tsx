"use client";
import useSWR from "swr";
import dotenv from "dotenv";
dotenv.config();
const URL = process.env.NEXT_PUBLIC_MONGO_CONNECTION;
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const Order = () => {
  const birthDay = new Date();
  const today: number = birthDay.getDate();
  const { data, error, isLoading } = useSWR(`${URL}/order`, fetcher);
  console.log(data);

  const oCount = data?.getAllOrder.filter(
    (e: { createdAt: { slice: (arg0: number, arg1: number) => number } }) => {
      return e.createdAt.slice(8, 10) == today;
    }
  );

  const count = oCount?.length;
  return (
    <div className="h-[170px] bg-white rounded-[10px] p-5 flex flex-col justify-between w-1/3">
      <p className="font-bold text-xl">Захиалга</p>
      <p className="text-[44px] font-bold">{count}</p>
      <p className="text-[18px]">Өнөөдөр</p>
    </div>
  );
};
