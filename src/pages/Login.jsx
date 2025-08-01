import React from "react";
import bgimage from "../assets/bgimage1.jpg"; 
import Footer from "../component/Footer";

export default function Login() {
  return (
    <>
      <div className="relative w-full bg-red-500">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 z-0 text-white p-4 "
          style={{ backgroundImage: `url(${bgimage})`,opacity: 0.4 }}
        ></div>
        <div className=" md:px-30 bg-black px-10 pb-10">
          <div className="relative z-5">
            <div className="text-3xl sm:text-2xl md:text-4xl lg:text-6xl text-red-600 font-bold  tracking-widest py-4">
              NETFLIX
            </div>
            <div className="my-10 flex justiy-center items-center bg-black mx-auto md:w-[500px] sm:w-[300px] md:p-10 p-5 opacity-80">
              <div className="w-full max-w-md">
                <h1 className="md:text-3xl font-bold text-2xl mb-4 text-white">Sign In</h1>
                <div className="w-full">
                  <input
                    type="tel"
                    placeholder="Enter mobile number"
                    pattern="[6-9]{1}[0-9]{9}"
                    maxLength={10}
                    className="w-full border border-gray-300 rounded p-4 mb-5 text-white"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full border border-gray-300 rounded p-4 mb-5 text-white"
                  />
                  <button className="bg-red-600 text-xl font-bold md:text-2xl p-2 text-white w-full mb-5 rounded">
                    Sign In
                  </button>

                  <div className="flex justify-center items-center font-bold mb-5 text-white">
                    OR
                  </div>
                  <div className="w-full p-2  font-bold flex justify-center items-center border  border-gray-300 rounded text-white mb-5 ">
                    Use a Sign-In-Code
                  </div>
                  <div className="w-full font-bold flex justify-center items-center text-white underline">
                    {" "}
                    <a href="##">Forget Password</a>
                  </div>
                  <input
                    type="checkbox"
                    id="Remember Me"
                    className="text-white font-bold mb-4"
                  />
                  <label className="text-white ml-1 font-bold">
                    Remember Me
                  </label>
                  <p className="text-white mb-5">
                    {" "}
                    <span className="text-gray-500">New to Netlix?</span>Sign up
                    now
                  </p>
                  <p className="text-gray-500">
                    This page is protected by Google reCAPTCHA to ensure you're
                    not a bot
                  </p>
                  <a href="##" className="text-red-600 font-bold underline">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>

      
    
    </>
  );
}
