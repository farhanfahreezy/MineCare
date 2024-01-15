import React from "react";
type NewsTabProps = {
  openedTab: number;
  handleOpenTab: (n: number) => void;
};
const NewsTab = ({ openedTab, handleOpenTab }: NewsTabProps) => {
  const tabList = [
    {
      id: 0,
      name: "ALL",
    },
    {
      id: 1,
      name: "ARTICLE",
    },
    {
      id: 2,
      name: "PRESS",
    },
    {
      id: 3,
      name: "VIDEO",
    },
  ];

  const regularClass =
    "bg-[#522A00] bg-opacity-50 py-1 px-4 hover:bg-black hover:bg-opacity-20 transition-all";
  const activeClass =
    "bg-[#522A00] bg-opacity-85 py-3 px-4 hover:bg-black hover:bg-opacity-40 transition-all";
  return (
    <div className="flex flex-row justify-end items-end gap-1">
      {tabList.map((tab) => (
        <button
          key={tab.name + tab.id}
          className={tab.id === openedTab ? activeClass : regularClass}
          onClick={() => handleOpenTab(tab.id)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default NewsTab;
