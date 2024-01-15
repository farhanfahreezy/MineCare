import Link from "next/link";
import React from "react";

type CardNewsProps = {
  title: string;
  url: string;
  date: string;
};

const CardNews = ({ title, url, date }: CardNewsProps) => {
  return (
    <Link
      target={"_blank"}
      className="bg-[#8F6D31] bg-opacity-30 w-full shadow-md py-2 px-3 space-y-1 hover:bg-opacity-50 transition-all"
      href={url}
    >
      <p className="font-regular text-[14px] line-clamp-2">{title}</p>
      <p className="text-right font-light text-[12px]">{date}</p>
    </Link>
  );
};

export default CardNews;
