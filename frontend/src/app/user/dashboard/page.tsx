"use client";
import {
  Carousel,
  Footer,
  NavbarUser,
  New,
  Ontsloh,
  Service,
} from "@/components";
import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

const page = () => {
  const router = useRouter();
  const cookies = parseCookies();
  const email = cookies.email;
  useEffect(() => {
    if (!email) {
      router.push("/user/login");
      toast.error("Та нэвтэрнэ үү.");
      return;
    }
  }, []);
  return (
    <div>
      <NavbarUser />
      <Carousel />
      <div className="flex w-[1440px] flex-col mx-auto gap-32 my-32">
        <Ontsloh />
        <New />
      </div>
      <Service />
      <Footer />
    </div>
  );
};

export default page;
