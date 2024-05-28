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
      <div className="flex flex-col mx-auto w-[1440px] gap-32 my-32">
        <Ontsloh />
        <New />
      </div>
      <Service />
      <Footer />
    </div>
  );
};

export default Home;
