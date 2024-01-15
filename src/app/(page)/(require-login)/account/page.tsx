"use client";

import Image from "next/image";

import { TbPhotoEdit } from "react-icons/tb";
import { MdOutlinePhotoCamera } from "react-icons/md";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-start items-end">
      <h1 className="bg-[#8B4B06] bg-opacity-85 py-4 px-12 text-[20px]">
        Personal Information
      </h1>
      <div className="w-full bg-[#8B4B06] bg-opacity-50 px-10 pt-10 pb-5 flex flex-row justify-between">
        <div className="space-y-2 w-full max-w-[300px]">
          <div className="bg-[#673805] bg-opacity-80 px-10 pt-10 pb-5 w-full space-y-2">
            <div className="w-full max-w-[300px] aspect-[3/4] relative rounded-md overflow-hidden shadow-md">
              <Image
                src={"/images/default-profile.jpg"}
                fill={true}
                style={{ objectFit: "cover" }}
                alt="Profile"
              />
            </div>
            <div className="flex gap-2">
              <button className="bg-[#985D1F] p-2 shadow-md">
                <TbPhotoEdit size={18} />
              </button>
              <button className="bg-[#985D1F] p-2 shadow-md">
                <MdOutlinePhotoCamera size={18} />
              </button>
            </div>
          </div>
          <div className="w-full bg-[#804F1C] py-2 px-6 text-center hover:bg-black hover:bg-opacity-50 transition-all">
            Log Out
          </div>
        </div>
        <div className="space-y-2 w-full px-5">
          <div className="flex w-full">
            <div className="w-[200px] p-5 bg-[#864807] bg-opacity-95 text-left">
              Name
            </div>
            <div className="w-full bg-[#8B4B06] bg-opacity-65 p-5 font-light">
              Petani Emas
            </div>
          </div>

          <div className="flex w-full">
            <div className="w-[200px] p-5 bg-[#864807] bg-opacity-95 text-left">
              Username
            </div>
            <div className="w-full bg-[#8B4B06] bg-opacity-65 p-5 font-light">
              MineCare
            </div>
          </div>

          <div className="flex w-full">
            <div className="w-[200px] p-5 bg-[#864807] bg-opacity-95 text-left">
              Email
            </div>
            <div className="w-full bg-[#8B4B06] bg-opacity-65 p-5 font-light">
              minecareer@gmail.com
            </div>
          </div>

          <div className="flex w-full">
            <div className="w-[200px] p-5 bg-[#864807] bg-opacity-95 text-left">
              Password
            </div>
            <div className="w-full bg-[#8B4B06] bg-opacity-65 p-5 font-light">
              ***********************
            </div>
          </div>

          <div className="flex w-full">
            <div className="w-[200px] p-5 bg-[#864807] bg-opacity-95 text-left">
              Address
            </div>
            <div className="w-full bg-[#8B4B06] bg-opacity-65 p-5 font-light">
              Jl. Cisitu Lama No 98A, Coblong
            </div>
          </div>

          <div className="flex justify-end py-5">
            <p className="py-4 bg-[#804F1C] bg-opacity-90 px-6">Save</p>
          </div>
        </div>
      </div>
      <div className="bg-transparent pt-10 pb-20 ">
        <p className="bg-[#804F1C] bg-opacity-90 py-5 px-10">
          Do you satisfy with MineCare website? Rate us!
        </p>
      </div>
    </div>
  );
}
