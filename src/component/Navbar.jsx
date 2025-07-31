import React from "react";
import bgimage from "../assets/bgimage1.jpg";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <>
      <div className=" relative  w-full">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 z-0 text-white p-4 shadow-[0_8px_20px_rgba(0,0,255,0.6)]"
          style={{ backgroundImage: `url(${bgimage})` }}
        ></div>
        <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 text-white pb-10">
          <div className=" w-xl-full flex justify-between items-center py-4">
            <div className="text-3xl sm:text-2xl md:text-4xl lg:text-6xl text-red-600 font-bold  tracking-widest">
              NETFLIX
            </div>
            <div>
              <select className="p-1 border-1 border-gray-500 md:pr-40  mr-2 rounded">
                <option className=" bg-white text-black">English</option>
                <option className="bg-white text-black">Hindi</option>
              </select>
              <button className="bg-red-600 p-1 rounded font-bold px-3 sm:p-2 hover:cursor-pointer" onClick={() => navigate('/login')}>
                Sign in
              </button>
            </div>
          </div>
          <div className="md:mt-40 mt-10 md:w-[700px] flex  mx-auto w-[250px]">
            <div className="md:text-6xl text-xl font-bold text-center">
              Unlimited movies, TV shows and more
            </div>
          </div>
          <div className="text-center md:mt-5 mt-3 md:font-bold md:text-2xl">
            Starts at ₹149. Cancel at any time.
          </div>
          <div className="md:mt-7 mt-3 md:font-medium text-center px-2 ">
            Ready to watch? Enter your email to create or restart your
            membership.
          </div>
          <div className="text-center">
            <input
              type="email"
              placeholder="Email address"
              className="md:p-4 md:pr-40  rounded border-gray-500 border-1 md:mr-2 my-3 p-3 md:w-auto w-[90%]"
            ></input>
            <button className="md:p-4 bg-red-600  p-2 px-8 rounded font-bold md:text-xl mb-10  lg:mb-0 xl:mb-0 md-mb-0 ">
              Get Started &gt;
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
