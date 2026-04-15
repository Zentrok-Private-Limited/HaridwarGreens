"use client";

import React, { useEffect, useRef, useState } from "react";
import { Licorice, Oooh_Baby } from "next/font/google";
import Image from "next/image";
import { PiArrowArcLeftThin } from "react-icons/pi";
import { GoArrowRight } from "react-icons/go";
import gsap from "gsap";


const licorice = Licorice({
  variable: "--font-licorice",
  subsets: ["latin"],
  weight: "400",
});

const ooohBaby = Oooh_Baby({
  variable: "--font-oooh-baby",
  subsets: ["latin"],
  weight: "400",
});


const ImageSlider: string[] = [
  "/frozenfruit.png",
  "/frozenveg.png",
  "/frozenMomo.png",
  "/frozenfruit.png",
  "/frozenveg.png",
  "/frozenMomo.png",
  "/frozenfruit.png",
  "/frozenveg.png",
  "/frozenMomo.png",
];

export default function Home() {
  
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!imagesRef.current.length) return;

    const images = imagesRef.current.filter(
      (img): img is HTMLImageElement => img !== null
    );

    
    gsap.set(images, { opacity: 0, xPercent: 100 });
    gsap.set(images[0], { opacity: 1, xPercent: 0 });

    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "power3.inOut" },
    });

    images.forEach((img, index) => {
      const nextIndex = (index + 1) % images.length;

      tl.to(img, {
        xPercent: -100,
        opacity: 0,
        duration: 1,
        delay: 1,
      })
        .fromTo(
          images[nextIndex],
          { xPercent: 100, opacity: 0 },
          { xPercent: 0, opacity: 1, duration: 1 },
          "<"
        )
        .to({}, { duration: 1.2 });
    });

    
    if (textRef.current) {
      gsap.to(textRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="mt-18">
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-[160px] font-bold m-0 leading-none text-[#275123]">
          Frozen <span className={licorice.className}>fresh</span>
        </h1>

        <button className="flex items-center gap-2 px-6 py-3 text-sm rounded-lg bg-[#275123] text-white mt-4">
          Explore Products
          <GoArrowRight />
        </button>
      </div>

      <div className="grid grid-cols-[2fr_1fr]">
        
       
        <div className="relative overflow-hidden flex justify-center items-center h-[500px]">
          
          <div className="absolute top-18 right-50 flex flex-col items-center pl-8">
            <h3
              ref={textRef}
              className={`${ooohBaby.className} flex items-center gap-2 text-2xl -rotate-10`}
            >
              <span>
                <PiArrowArcLeftThin className="text-3xl" />
              </span>
              Fresh ingredients,
              <br />
              frozen at their finest.
            </h3>
          </div>

          {ImageSlider.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt="frozen"
              width={800}
              height={800}
              className="absolute will-change-transform"
              ref={(el) => {
                imagesRef.current[i] = el;
              }}
            />
          ))}
        </div>

     
        <div className="p-4">
          <h2 className="text-6xl font-bold">
            <span className="flex items-center text-white text-center">
              Pure Taste.
            </span>
            Perfectly Preserved.
          </h2>

          <p className="text-2xl mt-6">
            High-quality frozen vegetables and gourmet ready-to-eat snacks,
            designed for effortless, everyday indulgence.
          </p>
        </div>
      </div>
    </div>
  );
}