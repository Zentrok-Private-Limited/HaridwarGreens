import React from "react";
import Image from "next/image";
import { Licorice, Oooh_Baby } from "next/font/google";

const ooohBaby = Oooh_Baby({
  variable: "--font-oooh-baby",
  subsets: ["latin"],
  weight: "400",
});

function About() {
  return (
    <div className="h-screen my-16 bg-[#275123]/40 text-white">
      <div className="flex flex-col items-center pt-15 px-10 gap-5 h-2/5">
        <h1 className="text-6xl font-bold ">Bringing Farm <span className={`${ooohBaby.className}`}>freshness</span> to Your Freezer</h1> 
        <p  className="text-base text-center font-light px-35 pt-4">
          We specialize in delivering high-quality frozen foods that retain
          their natural taste, nutrition, and freshness. From farm-picked
          vegetables to perfectly crafted ready-to-eat snacks like momos, our
          products are designed for modern lifestyles—quick, convenient, and
          absolutely delicious.
        </p>
      </div>
      <div className="flex items-end h-3/5">
        <Image
          src="/aboutbg6.png"
          alt="frozen"
          width={1500}
          height={1500}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

export default About;
