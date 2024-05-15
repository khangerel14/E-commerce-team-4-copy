import React, { useContext } from "react";
import { UserOrderContext } from ".";

export const PurchaseField = () => {
  const { formDataRef }: any = useContext(UserOrderContext);
  const handleOnChange = (field: string, value: string | number) => {
    formDataRef.current = { ...formDataRef.current, [field]: value };
  };

  return (
    <div className="w-[1040px] mx-auto my-20">
      <div>
        <h2 className="text-[24px] text-[#1D3178] font-bold">Hekto Demo</h2>
        <p>Cart/ Information/ Shipping/ Payment</p>
      </div>
      <div className="py-[40px]">
        <div className="bg-[#F8F8FD] w-[792px] px-[40px] py-[80px] flex flex-col ">
          <div className="flex flex-col gap-[20px]">
            <h3 className="text-[#1D3178] text-[18px] font-bold ">
              Contact Information
            </h3>
            <div>
              <input
                type="text"
                className=" border-none bg-[#F8F8FD] outline-none w-full text-[14px]"
                placeholder="Email or mobile phone number"
                onChange={(e) => handleOnChange("phoneNumber", e.target.value)}
              />
              <div className="border-b-2 border-[#BFC6E0]"></div>
            </div>

            <div className="flex gap-2">
              <input type="checkbox" className="bg-[#19D16F]" />
              <p className="text-[#B7B3C7]">
                Keep me up to date on news and excluive offers
              </p>
            </div>
          </div>
          <div className="w-full mt-[60px] ">
            <div className="flex flex-col gap-[40px]">
              <h2 className="text-[#1D3178] text-[18px] font-bold">
                Shipping address
              </h2>
              <div className="flex gap-[60px] ">
                <div className="w-1/2">
                  <input
                    type="text"
                    className="border-none bg-[#F8F8FD] outline-none w-full text-[14px]"
                    placeholder="First name (optional)"
                    onChange={(e) =>
                      handleOnChange("firstName", e.target.value)
                    }
                  />
                  <div className="border-b-2 border-[#BFC6E0] "></div>
                </div>
                <div className="w-1/2">
                  <input
                    type="text"
                    className="border-none bg-[#F8F8FD] outline-none w-full text-[14px]"
                    placeholder="Last name"
                    onChange={(e) => handleOnChange("lastName", e.target.value)}
                  />
                  <div className="border-b-2 border-[#BFC6E0] "></div>
                </div>
              </div>
              <div>
                <input
                  type="text"
                  className="border-none bg-[#F8F8FD] outline-none w-full text-[14px]"
                  placeholder="Address"
                  onChange={(e) => handleOnChange("address", e.target.value)}
                />
                <div className="border-b-2 border-[#BFC6E0] "></div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Appaetnentment,suit,e.t.c (optinal)"
                  className="border-none bg-[#F8F8FD] outline-none w-full text-[14px]"
                  onChange={(e) => handleOnChange("apartment", e.target.value)}
                />
                <div className="border-b-2 border-[#BFC6E0] "></div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="city"
                  className="border-none bg-[#F8F8FD] outline-none w-full text-[14px]"
                  onChange={(e) => handleOnChange("city", e.target.value)}
                />
                <div className="border-b-2 border-[#BFC6E0] "></div>
              </div>
              <div className="flex gap-[40px] w-full">
                <div className="w-1/2">
                  <input
                    type="text"
                    className="border-none bg-[#F8F8FD] outline-none w-full text-[14px]"
                    placeholder="Bangladesh"
                  />
                  <div className="border-b-2 border-[#BFC6E0] w-full"></div>
                </div>
                <div className="w-1/2">
                  <input
                    type="text"
                    className="border-none bg-[#F8F8FD] outline-none w-full text-[14px]"
                    placeholder="Postal Code"
                  />
                  <div className="border-b-2 border-[#BFC6E0] "></div>
                </div>
              </div>
            </div>
          </div>
          <button className=" bg-[#FB2E86] px-[20px]  py-[10px] w-fit text-white font-bold mt-[80px] rounded">
            Continue Shipping
          </button>
        </div>
      </div>
    </div>
  );
};
