import React from "react";
import trend1 from "../assets/trend1.webp";
import trend2 from "../assets/trend2.webp";
import trend3 from "../assets/trend3.webp";
import trend4 from "../assets/trend4.webp";
import trend5 from "../assets/trend5.webp";
import trend6 from "../assets/trend6.webp";
import trend7 from "../assets/trend7.webp";
import trend8 from "../assets/trend8.webp";
import trend9 from "../assets/trend9.webp";
import trend10 from "../assets/trend10.webp";

export default function Trends() {
  const movies = [
    {
      id: 1,
      url: trend1,
    },
    {
      id: 2,
      url: trend2,
    },
    {
      id: 3,
      url: trend3,
    },
    {
      id: 4,
      url: trend4,
    },
    {
      id: 5,
      url: trend5,
    },
    {
      id: 6,
      url: trend6,
    },
    {
      id: 7,
      url: trend7,
    },
    {
      id: 8,
      url: trend8,
    },
    {
      id: 9,
      url: trend9,
    },
    {
      id: 10,
      url: trend10,
    },
  ];
  return (
    <>
      <div className="bg-black md:my-10 md:px-20 px-6 my-5">
        <div className="p-3">
          <h1 className="text-2xl font-bold text-white">Trending Now</h1>
          <div className="justify-center  overflow-x-auto hide-scrollbar">
            <ul className="flex flex-row gap-10 mt-5">
              {movies.map(({ id, url }) => (
                <div className="relative hover:scale-110 duration-300">
                  <li key={id}>
                    <img
                      src={url}
                      alt={`trends ${id}`}
                      className="rounded-2xl min-w-[200px] min-h-[200px]"
                    ></img>
                    <div className="text-7xl font-bold absolute bottom-0 text-stroke-white left-[-18px] mb-4">
                      {id}
                    </div>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
