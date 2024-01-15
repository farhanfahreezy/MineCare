"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavbarButton = {
  destination: string;
  title: string;
  isOpen: boolean;
};

const Navbar = () => {
  const pathname = usePathname();
  const navbarOption = [
    { destination: "/home", title: "Home" },
    { destination: "/information", title: "Information" },
    { destination: "/legislation", title: "Legislation" },
    { destination: "/report", title: "Report" },
    { destination: "/account", title: "Account" },
  ];

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 bg-[#8F6D31] bg-opacity-[0.36] flex flex-row gap-2 px-4 justify-center items-start w-[80%]">
      {navbarOption.map((opt) => (
        <NavbarButton
          {...opt}
          key={opt.destination}
          isOpen={opt.destination === pathname}
        />
      ))}
    </nav>
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
