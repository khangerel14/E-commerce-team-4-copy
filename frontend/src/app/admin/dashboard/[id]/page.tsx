"use client";
import {
  AsideBar,
  DashboardEmpty,
  Navbar,
  Amountpaid,
  Order,
  User,
  Chart,
  Chartreg,
} from "@/components";
import useSWR from "swr";
import dotenv from "dotenv";
dotenv.config();

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const page = () => {
  const URL = process.env.NEXT_PUBLIC_MONGO_CONNECTION;
  const { data, error, isLoading } = useSWR(`${URL}/products/product`, fetcher);
  const productData = data?.getAll;
  return (
    <div>
      {!data ? (
        <DashboardEmpty />
      ) : (
        <div>
          <Navbar />
          <div className="flex m-auto">
            <AsideBar />
            <div className=" h-[100vh] flex flex-col gap-[24px] bg-gray-200 py-[40px] px-[40px] w-full">
              <div className="flex justify-between gap-[24px]">
                <Amountpaid />
                <Order />
                <User />
              </div>
              <div className="flex justify-between gap-[40px]">
                <div className="w-1/2 bg-white rounded-[10px] px-[40px] flex flex-col py-[40px] gap-[30px]">
                  <h1 className="text-xl font-bold">Шилдэг бүтээгдэхүүн</h1>
                  <div className="flex w-[100%] justify-around bg-gray-200 h-[50px] items-center">
                    <p>№</p>
                    <p>Бүтээгдэхүүн</p>
                    <p>Зарагдсан</p>
                    <p>Үнэ</p>
                  </div>
                  <div>
                    {productData &&
                      productData?.map((el: any, index: number) => {
                        return (
                          <div
                            className="flex justify-between w-[100%] border-b-2 border-gray-200"
                            key={index}
                          >
                            <p className="w-1/5 flex ml-[50px] items-center">
                              {index + 1}
                            </p>
                            <div className="flex w-1/4 items-center  justify-start gap-4">
                              <img
                                className="w-1/4 h-[40px] rounded-[50%] flex justify-center"
                                src={el.images}
                              />
                              <p className="text-black  flex justify-center">
                                {el.productName}
                              </p>
                            </div>
                            <p className="w-1/4 flex justify-center items-center">
                              {el.sold}
                            </p>
                            <p className="w-1/4 flex pl-[30px] items-center ">
                              {el.price
                                .toFixed(2)
                                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1'")}
                              ₮
                            </p>
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div className="flex flex-col gap-[40px]  w-1/2">
                  <div className="w-full h-1/2  rounded-[10px] px-[24px] ">
                    <Chart />
                  </div>
                  <div className="w-full h-1/2 px-[24px]  rounded-[10px] flex flex-col ">
                    <Chartreg />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
