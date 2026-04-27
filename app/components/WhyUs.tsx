import React, { useEffect, useRef } from "react";
import { Licorice, Oooh_Baby } from "next/font/google";
import {
  PiArrowBendRightDownThin,
  PiArrowBendLeftDownThin,
  PiArrowBendLeftUpThin,
  PiArrowBendRightUpThin,
} from "react-icons/pi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PiArrowBendDownRightThin } from "react-icons/pi";



gsap.registerPlugin(ScrollTrigger);

const ooohBaby = Oooh_Baby({
  variable: "--font-oooh-baby",
  subsets: ["latin"],
  weight: "400",
});

function WhyUs() {
  const bowlRef = useRef(null);

  useEffect(() => {
    gsap.to(bowlRef.current, {
      rotate: 60,
      ease: "none",
      scrollTrigger: {
        trigger: bowlRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="h-auto px-10 py-20">
      

      <div className="flex w-full">
        <div className="w-1/2 flex items-center">
          <img
            ref={bowlRef}
            src="/whyus.png"
            alt="frozenfruitbowl"
            className="w-[90%] h-[90%] object-contain"
          />
        </div>

        <div className="flex flex-col justify-between p-10 my-5 text-lg w-1/2 bg-[#275123]/50 rounded-3xl">

          <h1 className="text-5xl font-bold">Our <span className={`${ooohBaby.className} text-white`}>Promise</span> to You</h1>

          <div>
            <h2
            className="text-lg font-light p-4 flex gap-2 text-white"
          >
            <PiArrowBendDownRightThin className="text-black" />
            Quick & Convenient ready in minutes, perfect for busy lifestyles
            
          </h2>
          <h2
            className="text-xl font-light p-4 flex gap-2 text-white"
          >
            <PiArrowBendDownRightThin className="text-black"/>
            Advanced Freezing Technology Locks in nutrition and taste
            
          </h2>
          <h2
            className="text-xl font-light p-4 flex gap-2 text-white"
          >
            <PiArrowBendDownRightThin className="text-black"/>
            Hygienic Packaging safe and secure packaging standards
            
          </h2>
          <h2
            className="text-xl font-light p-4 flex gap-2 text-white"
          >
            <PiArrowBendDownRightThin className="text-black"/>
            Quick & Convenient ready in minutes, perfect for busy lifestyles
            
          </h2>
          <h2
            className="text-xl font-light p-4 flex gap-2 text-white"
          >
            <PiArrowBendDownRightThin className="text-black"/>
            Delicious & Consistent Taste every bite, every time
            
          </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
