"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { SignIn } from "@clerk/nextjs";

const Page = () => {
  const [error, setError] = useState<string>();

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      body: new FormData(e.currentTarget),
    });
    if (!res.ok) return;
  };

  return (
    <div className="w-full min-h-screen bg-white px-6">
      <div className="max-w-7xl mx-auto min-h-screen p-8 flex flex-col md:flex-row  gap-12">
        <div className="md:w-1/2 flex items-center justify-center">
          <div className="max-w-sm w-full flex flex-col gap-4 text-gray-500">
            <h4 className="text-2xl text-dark-green font-semibold">
              Welcome Back{" "}
            </h4>
            <p className="text-lg">
              Today is a new day. It&apos;s your day. You shape it.
              <br />
              Sign in to start buy your farm animal
            </p>

            <div className="flex flex-col gap-3 text-gray-700">
              <div className="">
                <label htmlFor="" className="py-1 block text-base font-medium ">
                  Email
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="p-2 bg-gray-200/50 w-full rounded-md outline-none"
                />
              </div>
              <div className="">
                <label htmlFor="" className="py-1 block text-base font-medium ">
                  Password
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="p-2 bg-gray-200/50 w-full rounded-md outline-none"
                />
              </div>

              <button
                type="button"
                className="text-right w-full text-sm py-1 text-blue-500 font-medium"
              >
                Forgot Password
              </button>
              <button
                type="submit"
                className=" p-2 w-full bg-bright-green text-base font-medium text-white rounded-md"
              >
                Sign in
              </button>
            </div>

            <div className="flex gap-2 items-center">
              {" "}
              <div className="border-gray-200 border-t h-0 w-1/2" />
              <p className="text-lg">Or</p>
              <div className="border-gray-200 border-t h-0 w-1/2" />
            </div>
            <div className=" flex flex-col gap-3">
              <button className="bg-bright-green/10 p-2 rounded-sm">
                Sign in with Google
              </button>
              <button className="bg-bright-green/10 p-2 rounded-sm">
                Sign in with Facebook
              </button>
            </div>

            <p className=" text-sm">
              Don&apos;t have an account?{" "}
              <Link href={"/register"} className="text-blue-600">
                Sign up
              </Link>
            </p>
          </div>
        </div>
        <div className="hidden md:block w-1/2">
          <Image
            src="/bg/farm_animals.jpg"
            width={800}
            height={700}
            alt="Farm animals"
            className="w-full h-full min-h-150 object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
