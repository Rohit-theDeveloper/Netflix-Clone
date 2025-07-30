import React from "react";

export default function Membership() {
  return (
    <>
      <div className="md:mt-8 my-5 px-6 md:px-20">
        <div className="items-center justify-center">
          <div className="text-xl text-center text-white">
            Ready to watch? Enter your email to create or restart your
            membership.
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center my-5 md:w-full mx-auto">
            <input
              type="email"
              placeholder="Email Address"
              className="text-cenetr border-1 text-white border-gray-500 rounded md:pr-60 md:p-4 p-2 mb-5"
            ></input>
            <button className="text-cenetr md:text-xl font-bold bg-red-700 md:p-4 p-2 rounded ml-2 text-white ">
              Get Started &gt;
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
