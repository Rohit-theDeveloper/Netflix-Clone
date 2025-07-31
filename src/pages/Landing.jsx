import React from "react";
import Navbar from "../component/Navbar";
import Trends from "../component/Trends";
import Reasons from "../component/Reasons";
import Frequentlyques from "../component/Frequentlyques";
import Membership from "../component/Membership";
import Footer from "../component/Footer";
export default function Landing() {
  return (
    <div className="bg-black">
      <Navbar />
      <Trends />
      <Reasons />
      <Frequentlyques />
      <Membership />
      <Footer />
    </div>
  );
}
