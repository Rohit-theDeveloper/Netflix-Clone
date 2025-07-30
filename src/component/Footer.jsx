import React from "react";

export default function Footer() {
  return (
    <div className="md:mt-10 md:px-20 px-6 mt-5">
      <div className="text-xl text-gray-400">
        Questions? Call 000-800-919-1743
      </div>
      <div className="flex flex-wrap md:flex-row  text-gray-400 mt-10 ">
        <div className="md:w-[250px] w-1/2 ">
          <ul className="">
            <li>FAQ</li>
            <li>Account</li>
            <li>Investro Relations</li>
            <li>Ways to watch</li>
          </ul>
        </div>
        <div className="md:w-[250px] w-1/2 ">
          <ul>
            <li>Privacy</li>
            <li>Corporate Inormation</li>
            <li>Speed Test</li>
            <li>only on Netlix</li>
          </ul>
        </div>
        <div className="md:w-[250px] w-1/2 ">
          <ul>
            <li>Help-center</li>
            <li>Media Center</li>
            <li>Jobs</li>
            <li>Terms of Use</li>
          </ul>
        </div>
        <div className="md:w-[250px] w-1/2 ">
          <ul>
            <li>Cookies Preerences</li>
            <li>Contact Us</li>
            <li>Legal Notices</li>
          </ul>
        </div>
      </div>
      
      <div className="my-10 ">
        <select className="pr-40 bg-gray-350 font-bold  p-3 rounded border-1 border-gray-500 text-white ">
          <option className="bg-white text-black ">English</option>
          <option className="bg-white text-black">Hindi</option>
        </select>
      </div>

      <h3 className="my-8 text-gray-500 text-sm">Netflix India</h3>
      <p className="text-gray-500 text-sm pb-10">This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#" className="text-blue-500 hover:underline">Learn More</a>.</p>
    
    </div>
  );
}
