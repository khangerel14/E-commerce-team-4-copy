"use client";
import { AdminContextProvider, SignUppage1 } from "@/components";
import React from "react";

const page = () => {
  return (
    <div>
      <AdminContextProvider>
        <SignUppage1 />
      </AdminContextProvider>
    </div>
  );
};

export default page;
