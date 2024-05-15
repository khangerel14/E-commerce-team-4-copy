"use client";
import useSWR from "swr";

const URL = "http://localhost:8000/order";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const Order = () => {
  const birthDay = new Date();
  const today: number = birthDay.getDate();
  const { data, error, isLoading } = useSWR(URL, fetcher);

  const oCount: any = data?.getAllOrder.filter((e: any) => {
    return e.createdAt.slice(8, 10) == today;
  });

  const count = oCount?.length;
  return (
    <div className="h-[170px] bg-white rounded-[10px] p-5 flex flex-col justify-between w-1/3">
      <p className="font-bold text-xl">Захиалга</p>
      <p className="text-[44px] font-bold">{count}</p>
      <p className="text-[18px]">Өнөөдөр</p>
    </div>
  );
};
