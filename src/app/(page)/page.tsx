"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { RxDownload } from "react-icons/rx";
import { IoLanguageOutline } from "react-icons/io5";
import toast from "react-hot-toast";

export default function Home() {
  const [load, setload] = useState(true);
  const [loadLogin, setloadLogin] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setload(false);
    }, 500);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, [load]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setloadLogin(false);
    }, 2500);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, [loadLogin]);

  const unimplementedAlert = () => {
    toast("Coming Soon", {
      icon: "👷",
    });
  };

  return (
    <div
      className={`bg-white w-full h-screen flex flex-col justify-center items-center text-black relative`}
    >
      <div
        className={`${
          load ? " opacity-0" : " opacity-1"
        } z-[0] bg-cover bg-center bg-no-repeat bg-[url('/images/home-bg.png')] w-full h-full text-black transition-opacity duration-500`}
      />
      <div className="z-[1] flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Image
          src={"/images/hero-home.svg"}
          width={0}
          height={0}
          alt="Hero home"
          className={`${
            load
              ? "opacity-0"
              : "opacity-100 backdrop-blur-[1] transition-all delay-500 duration-700"
          } w-[50vw] h-auto`}
        />
      </div>
      <div className="z-[10] flex flex-col justify-center items-center gap-10 absolute w-full h-full">
        <div
          className={`${
            loadLogin ? "opacity-0" : "opacity-100"
          } fixed top-[20px] right-[30px] bg-[#8F6D31] bg-opacity-40 p-3 text-white font-extralight flex flex-row justify-center items-center gap-3 transition-all text-[14px]`}
        >
          <button
            className="flex flex-row justify-center items-center gap-2 hover:bg-black hover:bg-opacity-10 py-2 px-4 transition-all"
            onClick={() => unimplementedAlert()}
          >
            <p>Application Download</p>
            <RxDownload size={20} />
          </button>
          <button
            className="flex flex-row justify-center items-center gap-2 hover:bg-black hover:bg-opacity-10 py-2 px-4 transition-all"
            onClick={() => unimplementedAlert()}
          >
            <p>Language</p>
            <IoLanguageOutline size={20} />
          </button>
        </div>
        <div
          className={`${
            load ? "bg-white shadow-xl" : "bg-transparent"
          } w-[300px] aspect-square rounded-2xl flex flex-col justify-center items-center gap-2 z-[100] transition-all duration-700 delay-200`}
        >
          <Image
            src={"/MineCare.svg"}
            width={0}
            height={0}
            alt="MineCare Logo"
            className="w-full max-w-[180px] aspect-square"
          />
          <div
            className={`${
              load ? "mt-5" : "mt-12"
            } relative transition-all delay-200`}
          >
            <h1
              className={`${
                load ? " opacity-0 top-[-60px]" : "opacity-70 top-[-20px]"
              } text-white text-[60px] font-bold blur-sm absolute left-1/2 transform -translate-x-1/2 transition-all delay-500 duration-500`}
            >
              MineCare
            </h1>
            <h1
              className={`${
                load ? " opacity-0 bottom-[-60px]" : "opacity-70 bottom-[-20px]"
              } text-white text-[60px] font-bold blur-sm absolute left-1/2 transform -translate-x-1/2 transition-all delay-500 duration-500`}
            >
              MineCare
            </h1>
            <h1
              className={`${
                load ? " text-black text-[32px]" : "text-white text-[60px]"
              }  z-[1] font-bold transition-all duration-500 delay-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
            >
              MineCare
            </h1>
          </div>
        </div>
        <p
          className={` ${
            load ? "opacity-0" : "opacity-100"
          }  text-white drop-shadow-md text-center delay-1000 duration-500 transition-all`}
        >
          One-Stop Solution to Reduce the <b>Illegal Mining Ecosystem</b>
        </p>
        <div className="flex flex-col justify-center items-center gap-4 pt-10">
          <Link
            className={`${
              loadLogin ? "opacity-0" : "opacity-100"
            } bg-[#624B21] py-4 px-16 shadow-lg duration-500 transition-all hover:scale-105 hover:brightness-90 active:scale-95
            `}
            href={"/login"}
          >
            <p className="text-white">LOGIN</p>
          </Link>
          <p
            className={`${
              loadLogin ? "opacity-0" : "opacity-100"
            } text-white bg-[#624B21] bg-opacity-20 py-2 px-4 backdrop-blur-[2] delay-[500ms] duration-500 transition-all group`}
          >
            Do not have an account?{" "}
            <Link
              href={"/signup"}
              className=" group-hover:brightness-75 hover:underline transition-all"
            >
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
