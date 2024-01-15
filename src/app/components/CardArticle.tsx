import Image from "next/image";
import Link from "next/link";
import React from "react";

import { BiSolidVideos } from "react-icons/bi";
import { RiArticleFill } from "react-icons/ri";

type CardArticleProps = {
  title: string;
  url?: string;
  img_url?: string;
  date?: string;
  type: string;
};

const CardArticle = ({ title, url, img_url, date, type }: CardArticleProps) => {
  return (
    <Link
      href={
        type === "video"
          ? "https://www.youtube.com/watch?v=" + url
          : "/information/1"
      }
      target={type === "video" ? "_blank" : undefined}
      className="flex w-full bg-[#8F6D31] bg-opacity-40 shadow-md p-3 flex-row justify-start items-center "
    >
      <Image
        width={192}
        height={108}
        src={
          type === "video"
            ? "https://img.youtube.com/vi/" + url + "/0.jpg"
            : "/article/image 7.png"
        }
        alt={title}
        className="object-fill"
      />
      <div className="flex flex-col justify-start items-start w-full h-full px-3">
        <p className="font-semibold line-clamp-2">{title}</p>
        {type === "video" ? <BiSolidVideos /> : <RiArticleFill />}
        <p>12 Desember 2023</p>
      </div>
    </Link>
  );
};

export default CardArticle;
