import React from "react";
import { RiComputerLine } from "react-icons/ri";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { BiParty } from "react-icons/bi";
import { TbMessages } from "react-icons/tb";

export default function Reasons() {
  const reasons = [
    {
      tittle: "Enjoy on your TV",
      para: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      icon: <RiComputerLine />,
    },
    {
      tittle: "Download your shows to watch offline",
      para: "Save your favourites easily and always have something to watch.",
      icon: <MdOutlineDownloadForOffline />,
    },
    {
      tittle: "Watch everywhere",
      para: "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
      icon: <BiParty />,
    },
    {
      tittle: "Create profiles for kids",
      para: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership",
      icon: <TbMessages />,
    },
  ];
  return (
    <>
      <div className=" mt-10 md:px-20 px-6">
        <h1 className="text-2xl font-bold text-white">More Reasons to join</h1>
        <div className="flex flex-col lg:flex-row lg:gap-5">
          {reasons.map(({ tittle, para, icon }) => (
            <div
              className="bg-gradient-to-b from-blue-950 to-gray-900 p-3 rounded-2xl mt-5 md:w-[300px] md:h-[320px] h-[250px] w-auto relative"
            >
              <h1 className="text-2xl font-bold mb-3">{tittle}</h1>
              <p className="text-gray-500">{para}</p>
              <div className="mt-10 text-7xl absolute right-0 bottom-0 mr-4 text-blue-700 mb-4">
                {icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
