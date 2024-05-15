"use client";
import { data } from "@/utils/Sidebar";
import Link from "next/link";
import { useEffect, useState } from "react";

export const AsideBar = () => {
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(window.location.pathname);
  }, [path]);
  return (
    <div className="flex flex-col pt-4 gap-3 bg-white h-screen w-96">
      {data.map((e, index) => {
        return (
          <Link
            key={index}
            href={e.slug}
            className="flex items-center gap-6 text-xl cursor-pointer p-3 px-5 pl-11"
            style={{ backgroundColor: path === e.slug ? "#EEEEEE" : "" }}
          >
            {e.icon}
            <p>{e.name}</p>
          </Link>
        );
      })}
    </div>
  );
};