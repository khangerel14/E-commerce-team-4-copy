"use client";
import {
  Carousel,
  Footer,
  NavbarUser,
  New,
  Ontsloh,
  Service,
} from "@/components";
import React from "react";

const Home = () => {
  return (
    <div>
      <NavbarUser />
      <Carousel />
      <div className="px-[202px] py-[100px] flex flex-col gap-[100px]">
        <Ontsloh />
        <New />
      </div>
      <Service />
      <Footer />
    </div>
  );
};

export default Home;
