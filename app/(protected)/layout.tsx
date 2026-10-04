"use client ";
import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { redirect } from "next/navigation";
// import { decrypt } from "@/lib/session";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {" "}
      <div className="w-full bg-white ">
        <div className=" max-w-7xl mx-auto">
          <Link href={"/home"} className="inline-block w-fit">
            <Image
              src={"/logo_flex.png"}
              width={220}
              height={100}
              alt="logo"
              className=" lg:h-16 xl:h-20 xl:w-44  lg:min-w-30"
            />
          </Link>
        </div>
      </div>
      {children}
    </>
  );
};

export default DashboardLayout;
