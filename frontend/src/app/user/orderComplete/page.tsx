"use client";
import { Footer, NavbarUser, OrderComplete } from "@/components";

import React from "react";

const page = () => {
  return (
    <div>
      <NavbarUser />
      <div className="w-[1440px] flex justify-center m-auto">
        <OrderComplete />
      </div>
      <Footer />
    </div>
  );
};

export default page;
