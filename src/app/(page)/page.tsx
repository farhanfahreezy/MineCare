import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col justify-center items-center text-black">
      <div className="w-[300px] aspect-square bg-white shadow-xl rounded-2xl flex flex-col justify-center items-center gap-2">
        <Image
          src={"/MineCare.svg"}
          width={0}
          height={0}
          alt="MineCare Logo"
          className="w-full max-w-[180px] aspect-square"
        />
        <h1 className="text-[32px] font-bold">MineCare</h1>
      </div>
    </div>
  );
};

export default page;
