"use client";
import { Footer, NavbarUser, UserOrderContext } from "@/components";
import {
  BlueDot,
  EmptyStar,
  FullStar,
  OrangeDot,
  PinkDot,
  Rectangle1,
  Rectangle2,
  Rectangle3,
  RightArrow,
} from "@/images";
import Heart from "@/images/Heart";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import dotenv from "dotenv";
dotenv.config();
const page = () => {
  const { addCart, productId }: any = useContext(UserOrderContext);
  const [data, setData] = useState<any>([]);
  const URL = process.env.NEXT_PUBLIC_MONGO_CONNECTION;
  const handler = async () => {
    try {
      const getProduct = await axios.get(`${URL}/products/${productId}`);
      setData(getProduct?.data.getData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handler();
  }, [productId]);

  return (
    <div>
      <NavbarUser />
      <div className="w-full h-[100px] bg-[#F6F5FF]">
        <div className="flex gap-[10px] w-[1440px] mx-auto py-[38px]">
          <p>Home</p>
          <p>.</p>
          <p>Shop Left Sidebar</p>
        </div>
      </div>
      <div className="flex w-[1440px] m-auto">
        <div className="w-[1440px] mx-auto flex gap-10 my-[75px]">
          <div className="flex gap-[20px]">
            <div className="flex flex-col gap-[10px] rounded">
              <Rectangle1 />
              <Rectangle2 />
              <Rectangle3 />
            </div>
            <img src={data?.images} width={"375px"} height={"487px"} alt="" />
          </div>
          <div className="flex flex-col gap-[64px]">
            <div className="flex flex-col gap-[16px]">
              <h1 className="text-[#111C85]  h-[44px] font-extrabold text-4xl">
                {data?.productName}
              </h1>
              <div className="flex items-center gap-[2px]">
                <FullStar />
                <FullStar />
                <FullStar />
                <FullStar />
                <EmptyStar />
                <p className="w-[23px] h-[16px] font-extrabold text-xs">(32)</p>
              </div>
              <p className="w-[137px] h-[32px] font-normal text-[32px] text-[#151875] leading-8">
                {(data?.price * 1)
                  .toFixed(2)
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                ₮
              </p>
              <div className="flex gap-[8px]">
                <OrangeDot />
                <PinkDot />
                <BlueDot />
              </div>
              <p className="w-[591.93px] h-[62px] font-normal text-lg text-[#9295AA]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
            </div>
            <button className="w-[140px]">
              <div className="float-left flex items-center gap-[20px]">
                <button
                  className="p-2 bg-[#FB2E86] text-white rounded-xl"
                  onClick={() => addCart(data?._id)}
                >
                  Сагслах
                </button>
                <Heart />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[649px] bg-[#F9F8FE] mt-[24px]">
        <div className="w-[1440px] mx-auto flex flex-col gap-[40px] text-[#151875] pt-[120px]">
          <div className="flex gap-[30px]">
            <button>
              <h1 className="font-extrabold text-2xl">Нэмэлт мэдээлэл</h1>
            </button>
            <button>
              <h1 className="font-extrabold text-2xl">Үнэлгээ</h1>
            </button>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1 className="font-extrabold text-2xl">More details</h1>
            <div className="flex flex-col gap-[20px]">
              <div className="flex">
                <RightArrow />
                <p className="font-extrabold text-[#A9ACC6]">
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                  diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                  vulputate nunc nec. Dui, massa viverr .
                </p>
              </div>
              <div className="flex">
                <RightArrow />
                <p className="font-extrabold text-[#A9ACC6]">
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                  diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                  vulputate nunc nec. Dui, massa viverr .
                </p>
              </div>
              <div className="flex">
                <RightArrow />
                <p className="font-extrabold text-[#A9ACC6]">
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                  diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                  vulputate nunc nec. Dui, massa viverr .
                </p>
              </div>
              <div className="flex">
                <RightArrow />
                <p className="font-extrabold text-[#A9ACC6]">
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                  diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                  vulputate nunc nec. Dui, massa viverr .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <div className="w-[1440] flex flex-col mx-[auto] gap-[49px] my-[100px]">
          <h1 className="font-extrabold text-4xl w-[1200px] mx-auto">
            Холбоотой бүтээгдэхүүн
          </h1>
          <div className="flex gap-10 mx-auto">
            <div className="w-[270px] h-[363px] flex flex-col justify-center items-center gap-[10px]">
              <div className="h-[280px] bg-[#F6F7FB] p-[20px]">
                <img
                  src="https://s3-alpha-sig.figma.com/img/5d23/d89f/fb399a001ca2c9596b7e4e167945bbdc?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QtRuQ7scZohUz1uAGd3TPwdB6DAAFv5pvk-SgBJgvIzWpazvDA88mMqq-ONhsJqxbbmDr7sU1TM24DJ7r3gl6kR4FraW3JIAMQxyDvRBkuj8HDejIVsZu3OFLH7V3Maeo9AFVwlHRzysIiDebNq2lP7d5LBRaW9EPaLDt-TNlRdKhCyG1sZdZEgITohSCqH6eOt4RYvDZ9khjTVN4Hss~w70d8aI5RE6a-01Q8mq2JdLBRN9MAH0YGBEjsAwn7ya9frhLmReMTno8wqCpUefGC1SBGy-sp2uEKwVRm~~hruTanezFISpjCPfluxt19LG5JxgeVj9~nf9Sk55dil6Qw__"
                  alt="camera"
                />
              </div>
              <p className="font-bold text-lg/18 text-[#151875] text-center">
                Canon камер
              </p>
              <div className="flex gap-[8px]">
                <OrangeDot />
                <PinkDot />
                <BlueDot />
              </div>
              <p className="font-normal text-xl/21 text-[#151875] text-center">
                750’000₮
              </p>
            </div>
            <div className="w-[270px] h-[363px] flex flex-col justify-center items-center gap-[10px]">
              <div className="h-[280px] bg-[#EBF4F3] p-[20px]">
                <img
                  src="https://s3-alpha-sig.figma.com/img/9db5/545f/6002c578779f313538a8a68e1a6f8050?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oznEKJLSEDOSX96A-FKA5WWgpNJDEj6ASTaRzqlXkJGNgC1DTiSMjURwxS3Z6NwNhNJXO9BKSjadnGQDBKtoxD-4ZWIn1Oq7jDIRVDvTqRhgAuf~m3m4aiiBE6hsy5Pim-OOF5EL4DN7iaElZbgBSgrF0Qmkqi-dvYFijggFqUVVUYmbGXeZrB-6FHVU75zQtCFzdUGU~0KXkYsI3VkXjNXXlcUu2lcjKdlp0wP6TJJP3iCnh7kCgNY~RmNqB4PGXkiEz32Llilw57wj6plARviAIlefucgAQ-JNrgWb9M1sJOuPfgB15NuFaJqkjOmKI6EoJPO1QENSTUiejJL82Q__"
                  alt="camera"
                />
              </div>
              <p className="font-bold text-lg/18 text-[#151875] text-center">
                Усан ягаан сандал
              </p>
              <div className="flex gap-[8px]">
                <OrangeDot />
                <PinkDot />
                <BlueDot />
              </div>
              <p className="font-normal text-xl/21 text-[#151875] text-center">
                750’000₮
              </p>
            </div>
            <div className="w-[270px] h-[363px] flex flex-col justify-center items-center gap-[10px]">
              <div className="h-[280px] bg-[#F6F7FB] p-[20px]">
                <img
                  src="https://s3-alpha-sig.figma.com/img/795e/f307/40fb6d72006bc9fe7a747b3dfca0a5de?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VRE14vILtUEY2NGoc1314uOIAwt3rweRXT1Xz4afH~3QS45qMoziv9mHb4o3YIu3UI2OvcFAJgCF9wau1eXUgqpjt-c~AiYZqimtxuq~nTp9e~zT-z24f6bLRCp7WzCrkq~EoJoonhyn-dN8lgEb-LzkO7r~glSvblNkd9OW3F9Mvor4OhWJIpT4sEWWEwOXLN4LufhwXXBqVXgPC0CMELRhjxNUt0beH9Eqz6PJKKJvfxLLjn1q-K2oavIUE5h4h9MaMIQtwnAAvbkB-awf1jLJJj3NukG5s2yVnxlay7FFL2va98VKX00mwrnZoemMepzKf3xMm3CZf5jXg5UIrA__"
                  alt="camera"
                />
              </div>
              <p className="font-bold text-lg/18 text-[#151875] text-center">
                Саарал сандал
              </p>
              <div className="flex gap-[8px]">
                <OrangeDot />
                <PinkDot />
                <BlueDot />
              </div>
              <p className="font-normal text-xl/21 text-[#151875] text-center">
                750’000₮
              </p>
            </div>
            <div className="w-[270px] h-[363px] flex flex-col justify-center items-center gap-[10px]">
              <div className="h-[280px] bg-[#F6F7FB] p-[20px]">
                <img
                  src="https://s3-alpha-sig.figma.com/img/c298/504d/adeb68467abfedd08c1e1d67526e0d7a?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KxoGlcr~xTJPRW6bRvhe2IvqW018i~JlcUwXEXMfPCZyfksJZe5cyHCZwaAz5jP1nua-VKig8BZA1YDbIK1ua96v~WVjtNuzTZUXQE9G58suDsiixl6e74H69rQ9qr5Kttp9w6qOjrbpi1N-SnoF5wip2bW51X7B-sfsd16kuBXUiMevd~vooEXL5SYHlTwOj2Z~WMxXHG4Mpu4SQF32m3bM9IF8ATpooSiarhUT6zrC-ToR4uwPgczRT4Aw-OPWPesP5YE3L~LwCiBd45sui~iF7DTFlx4Pi~okvR7Ug6dnToIJAj92eva~vHU81PWTgSgwhxl81BXmPOPdpLgx2A__"
                  alt="camera"
                />
              </div>
              <p className="font-bold text-lg/18 text-[#151875] text-center">
                Laptop цүнх
              </p>
              <div className="flex gap-[8px]">
                <OrangeDot />
                <PinkDot />
                <BlueDot />
              </div>
              <p className="font-normal text-xl/21 text-[#151875] text-center">
                750’000₮
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
