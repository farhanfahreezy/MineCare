"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full relative">
      {/* the actual stuff */}

      <h1 className="z-[10] text-[50px] absolute font-semibold p-5">
        <span className="bg-gradient-to-r from-[#C9A05E] via-[#995B19] to-[#C9A05E] inline-block text-transparent bg-clip-text">
          Mine The Future
        </span>
        : Utilization of Technology in Mining for the{" "}
        <span className="bg-[#995B19] inline-block text-transparent bg-clip-text">
          Welfare{" "}
        </span>{" "}
        and{" "}
        <span className="bg-[#995B19] inline-block text-transparent bg-clip-text">
          Prosperity
        </span>{" "}
        of the Society and Environment
      </h1>

      <div className="z-[11] absolute bottom-[100px] left-0 flex flex-row gap-5">
        <Link
          href={"/about-us"}
          className="bg-[#7B4812] py-4 px-6 hover:scale-105 hover:brightness-90 active:scale-95 transition-all"
        >
          ABOUT US
        </Link>
        <Link
          href={"/information"}
          className="bg-[#2F2010] py-4 px-6 hover:scale-105 hover:brightness-90 active:scale-95 transition-all"
        >
          START CARING
        </Link>
      </div>

      {/* Background */}
      <div className="bg-[#D1B88D] bg-opacity-45 w-[80%] h-[80%] absolute top-0 left-0 backdrop-blur-2 z-[0]" />
      <Image
        src={"/images/hero-home-2.svg"}
        width={0}
        height={0}
        alt="bg"
        className="w-auto h-[70%] absolute bottom-0 right-[-10%] object-cover"
      />
    </div>
  );
}
