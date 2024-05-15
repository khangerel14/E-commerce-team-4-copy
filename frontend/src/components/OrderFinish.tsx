import React, { useContext } from "react";
import { UserOrderContext } from ".";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import dotenv from "dotenv";
dotenv.config();

export const OrderFinish = ({ price }: any) => {
  const { orderData, formDataRef, setOrderData }: any =
    useContext(UserOrderContext);
  const router = useRouter();
  const URL = process.env.NEXT_PUBLIC_MONGO_CONNECTION;
  const handler = async () => {
    try {
      for (let i = 0; i < orderData.length; i++) {
        const productPut = axios.put(`${URL}/${orderData[i]._id}`, {
          qty: orderData[i].quantity,
        });
      }
      const order = await axios.post(`${URL}/order`, {
        orderNumber: "#988999",
        phoneNumber: formDataRef.current.phoneNumber,
        userId: "65f9523ea6a0bd0f2af96b58",
        amountPaid: price,
        amountToBePaid: price,
        address: formDataRef.current.address,
        city: formDataRef.current.city,
        apartment: formDataRef.current.apartment,
        lastName: formDataRef.current.lastName,
        firstName: formDataRef.current.firstName,
        details: orderData,
      });
      router.push("/user/orderComplete");
      setOrderData([]);
    } catch (error) {
      toast.error("aldaa garlaa dahin oroldono uu.");
    }
  };

  return (
    <div className="bg-[#F4F4FC] p-8 mt-[20px] flex flex-col w-[400px] ">
      <div className="flex justify-between  ">
        <p className="text-[#1D3178] ">Нийлбэр:</p>
        <p className="text-[#151878] text-[18px] font-bold">
          {price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}₮
        </p>
      </div>
      <div className=" border-b-[2px] mt-[10px] border-[#E1E1E4]"></div>
      <div className="flex justify-between mt-4">
        <p className="text-[#1D3178] ">Төлөх дүн:</p>
        <p className="text-[#151878] text-[18px] font-bold">
          {price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}₮
        </p>
      </div>
      <div className=" border-b-[2px] mt-[10px] border-[#E1E1E4]"></div>
      <Toaster position="top-right" />
      <button
        className="text-white bg-[#19D16F] w-full py-3 rounded mt-5"
        onClick={handler}
      >
        Худалдан авах
      </button>
    </div>
  );
};
