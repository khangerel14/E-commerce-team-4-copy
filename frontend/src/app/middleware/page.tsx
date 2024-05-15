"use client";
import { Loading } from "@/components";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import dotenv from "dotenv";
dotenv.config();

const page = () => {
  const { user }: any = useAuth0();
  const router = useRouter();
  const URL = process.env.NEXT_PUBLIC_MONGO_CONNECTION;

  const handler = async () => {
    try {
      const getUser = await axios.post(`${URL}/user/one`, {
        email: "pineconeteam4@gmail.com",
      });

      if (getUser && getUser?.data.getUser.role === "admin") {
        router.push(`/admin/dashboard/${getUser?.data.getUser._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handler();
  }, []);
  return (
    <div>
      <Loading />
    </div>
  );
};

export default page;
