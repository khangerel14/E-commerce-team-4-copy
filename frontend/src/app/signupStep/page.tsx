"use client";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import {
  AdminContextProvider,
  Loading,
  SignUppage2,
  SignUppage3,
  SignUppage4,
} from "@/components";

const page = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const next = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setActiveIndex(activeIndex + 1);
    }, 1000);
  };
  const back = () => {
    setActiveIndex(activeIndex - 1);
  };
  const backSignup = () => {
    router.push("/admin/signup");
  };
  return (
    <AdminContextProvider>
      {loading === false && activeIndex === 0 && (
        <SignUppage2 next={next} back={backSignup} />
      )}
      {activeIndex === 0 && loading === true ? (
        <Loading />
      ) : (
        loading === false &&
        activeIndex === 1 && <SignUppage3 next={next} back={back} />
      )}
      {activeIndex === 1 && loading === true ? (
        <Loading />
      ) : (
        activeIndex === 2 && <SignUppage4 back={back} />
      )}
    </AdminContextProvider>
  );
};

export default page;
