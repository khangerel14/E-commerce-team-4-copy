import Group from "@/images/Group";
import React from "react";

export const Footer = () => {
  return (
    <div>
      <div className="w-full h-96 bg-[#EEEFFB]">
        <div className="flex w-[1440px] mx-auto justify-between items-center h-full">
          <div className="flex flex-col gap-5 justify-center items-start">
            <h1 className="text-3xl font-bold">eCommerce</h1>
            <div className="flex bg-white h-fit w-fit p-1 rounded-md">
              <input
                type="text"
                className="p-2 h-10 w-52"
                placeholder="Имэйл хаяг"
              />
              <button className="bg-[#FB2E86] h-10 rounded-lg px-5 text-white">
                Бүртгүүлэх
              </button>
            </div>
            <div className="flex flex-col gap-2 text-[#8A8FB9]">
              <p>Хаяг</p>
              <p>
                Олимпын гудамж, 1-р хороо, Сүхбаатар дүүрэг, Улаанбаатар хот,{" "}
                <br />
                Гурван гол - 401 тоот
              </p>
            </div>
          </div>
          <div className="flex gap-32 w-1/2 justify-start">
            <div className="flex flex-col gap-4 items-start text-[#8A8FB9]">
              <h1 className="text-xl text-black font-semibold">Ангилал</h1>
              <button>Хувцас</button>
              <button>Камер, хэрэгсэл</button>
              <button>Ухаалаг утас, таблет</button>
              <button>Чихэвч</button>
              <button>Гэр ахуйн бараа</button>
            </div>
            <div className="flex flex-col gap-4 items-start text-[#8A8FB9]">
              <h1 className="text-xl text-black font-semibold">Бусад</h1>
              <button>Бидний тухай</button>
              <button>Холбоо барих</button>
              <button>Түгээмэл асуулт хариулт</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center h-12 bg-[#E7E4F8]">
        <div className="flex justify-between w-[1300px] mx-auto">
          <p>©ecommerce</p>
          <Group />
        </div>
      </div>
    </div>
  );
};
