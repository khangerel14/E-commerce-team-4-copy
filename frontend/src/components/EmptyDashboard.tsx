"use client";
import { useRouter } from "next/navigation";
import { ToLeft, Working } from "@/images";
import { AsideBar, Navbar } from ".";

export const DashboardEmpty = () => {
  const router = useRouter();
  const handler = () => {
    router.push("/admin/settings");
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <AsideBar />
        <div className="bg-[#ECEDF0] h-auto w-full relative">
          <div className="flex w-[821px] h-[290px] rounded-2xl drop-shadow-2xl absolute mt-[367px] mx-auto items-center justify-center bg-white inset-0">
            <div className="w-[359.56px]">
              <Working />
            </div>
            <div className="mt-[87.25px] ml-[25px] w-[349px]">
              <div>
                <h1 className="font-semibold text-lg text-center tracking-tighter">
                  Харуулах сүүлийн үеийн мэдээлэл алга
                </h1>
                <p className="font-normal text-sm text-center tracking-tighter">
                  Та мэдээлэл харахын тулд мэдээллээ тохируулж дуусгана уу.
                </p>
              </div>
              <button
                className="bg-[#121316] rounded-lg mx-[55px] mt-[25px]"
                onClick={handler}
              >
                <div className="flex py-[5px] px-[10px]">
                  <p className="text-white ">Тохиргоог үргэлжлүүлэх</p>
                  <div className="rotate-180 text-white">
                    <ToLeft />
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="">
            <div className="flex gap-[24px] w-full mt-[82px] px-8">
              <div className="w-full h-[150px] bg-white rounded-xl"></div>
              <div className="w-full h-[150px] bg-white rounded-xl"></div>
              <div className="w-full h-[150px] bg-white rounded-xl"></div>
            </div>
            <div className="flex w-full mt-[32px] px-8 justify-between">
              <div className="w-full h-[706px] bg-white rounded-xl"></div>
              <div className="flex flex-col gap-[24px]">
                <div className="w-full h-[349px] bg-white rounded-xl"></div>
                <div className="w-full h-[333px] bg-white rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
