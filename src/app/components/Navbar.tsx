"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

import { IoIosLogOut } from "react-icons/io";

type NavbarButton = {
  destination: string;
  title: string;
  isOpen: boolean;
};

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const navbarOption = [
    { destination: "/home", title: "Home" },
    { destination: "/information", title: "Information" },
    { destination: "/legislation", title: "Legislation" },
    { destination: "/report", title: "Report" },
    { destination: "/account", title: "Account" },
  ];

  const handleLogout = () => {
    toast.success("Logged out successfully");
    router.push("/");
  };

  return (
    <>
      <nav className="fixed top-0 left-1/2 -translate-x-1/2 bg-[#8F6D31] bg-opacity-[0.36] flex flex-row gap-2 px-4 justify-center items-start w-[80%]">
        {navbarOption.map((opt) => (
          <NavbarButton
            {...opt}
            key={opt.destination}
            isOpen={opt.destination === pathname}
          />
        ))}
        <div className="p-3">
          <button
            className="p-2 hover:bg-black hover:bg-opacity-10 transition-all"
            onClick={() => handleLogout()}
          >
            <IoIosLogOut size={24} />
          </button>
        </div>
      </nav>
      <Link href={"/"} className="fixed top-[20px] left-[20px]">
        <Image
          src={"/MineCare-Container.svg"}
          width={0}
          height={0}
          alt="MineCare Logo"
          className="w-[100px] aspect-square"
        />
      </Link>
    </>
  );
};

export default Navbar;

const NavbarButton = ({ destination, title, isOpen }: NavbarButton) => {
  const activeClass =
    "py-8 px-6 bg-[#8B4B06] hover:bg-black hover:bg-opacity-50 transition-all";
  const regularClass =
    "py-2 px-6 hover:bg-black hover:bg-opacity-10 transition-all";
  return (
    <div className={`${isOpen ? "pt-7" : "py-5"}`}>
      <Link href={destination} className={isOpen ? activeClass : regularClass}>
        {title}
      </Link>
    </div>
  );
};
