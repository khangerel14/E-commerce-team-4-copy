import { Logo, Noti, User } from "@/images";
import React from "react";

export const Navbar = () => {
  return (
    <div className="bg-black px-12">
      <div className="flex justify-between mx-auto h-12 items-center">
        <div>
          <Logo />
        </div>
        <div className="flex items-center gap-8">
          <button>
            <Noti />
          </button>
          <button>
            <User />
          </button>
          <button className="text-white">Username</button>
        </div>
      </div>
    </div>
  );
};
