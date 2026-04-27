"use client";

import React, { useEffect, useRef, useState } from "react";
import { Licorice, Oooh_Baby, Titan_One } from "next/font/google";
import Image from "next/image";
import { PiArrowArcRightThin } from "react-icons/pi";
import gsap from "gsap";
import { LuVegan } from "react-icons/lu";

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

const titanOne = Titan_One({
  variable: "--font-titan-one",
  subsets: ["latin"],
  weight: "400",
});

const ImageSlider: string[] = [
  "/newfruits.png",
  "/mixvegnew.png",
  "/newfruits.png",
  "/mixvegnew.png",
  "/newfruits.png",
  "/mixvegnew.png",
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!imagesRef.current.length) return;

    const images = imagesRef.current.filter(
      (img): img is HTMLImageElement => img !== null,
    );

    // Initial state: all hidden except first
    gsap.set(images, { opacity: 0 });
    gsap.set(images[0], { opacity: 1 });

    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "power1.inOut" },
    });

    images.forEach((img, index) => {
      const nextIndex = (index + 1) % images.length;

      tl.to(img, {
        opacity: 0,
        duration: 1,
        delay: 1,
      }).to(
        images[nextIndex],
        {
          opacity: 1,
          duration: 1,
        },
        "<", // start at same time
      );
    });

    // Floating text animation (optional)
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
    <div className="mt-22">
      <div className="flex flex-col items-center justify-center p-4">
        <h1
          className={`${titanOne.className} text-[140px] font-bold m-0 leading-[0.8] tracking-tight uppercase`}
        >
          Frozen fresh
        </h1>

        {/* <button className="flex items-center gap-2 px-6 py-3 text-sm rounded-lg bg-black/60  mt-8">
          Explore Products
          <GoArrowRight />
        </button> 
        
        */}
      </div>
      <div className="grid grid-cols-[1fr_2fr_1fr] mt-10">
        <div className="flex flex-col gap-6 ">
          <div className="relative left-10 flex items-center justify-center w-50 h-50 bg-[#0a0a0a] rounded-full text-white shadow-lg">
            {/* The Central 'No' */}
            <span className="text-8xl font-serif font-bold tracking-tight">
              <LuVegan />
            </span>

            {/* The Curving Outer Text (SVG) */}
            <svg
              viewBox="0 0 200 200"
              className="absolute inset-0 w-full h-full origin-center animate-[spin_20s_linear_infinite]"
              // Add 'animate-[spin_20s_linear_infinite]' here if you want it to rotate slowly
            >
              {/* This path draws an invisible circle for the text to sit on */}
              <path
                id="circlePath"
                d="
                    M 100, 100
                    m -75, 0
                    a 75,75 0 1,1 150,0
                    a 75,75 0 1,1 -150,0
                  "
                fill="none"
              />

              {/* The text linked to the path */}
              <text className="fill-white text-[12px] font-sans tracking-[0.25em] uppercase">
                <textPath href="#circlePath" startOffset="0%">
                  NO ADDITIVES ♦ 100% NATURAL ♦ LOCKING FRESHNESS ♦ FROZEN ♦
                </textPath>
              </text>
            </svg>
          </div>

          <div className="px-4 text-center ">
            <p>Our frozen foods are picked at peak freshness and quickly frozen to lock in natural taste and nutrients—no additives, just pure goodness.</p>
          </div>
        </div>

        <div className="relative overflow-hidden flex justify-center items-center h-100">
          <div className="absolute top-20 left-0 flex flex-col items-center pl-8">
            <h3
              ref={textRef}
              className={`${ooohBaby.className} flex items-center gap-2 text-2xl -rotate-10`}
            >
              Fresh ingredients,
              <br />
              frozen at their finest.
              <span>
                <PiArrowArcRightThin className="text-3xl" />
              </span>
            </h3>
          </div>

          {ImageSlider.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt="frozen"
              width={460}
              height={460}
              className="absolute will-change-transform border"
              ref={(el) => {
                imagesRef.current[i] = el;
              }}
            />
          ))}
        </div>

        <div className="p-4">
          <h2 className="text-4xl font-bold">
            <span className="flex items-center text-center text-[#E5E9AC]">
              Pure Taste.
            </span>
            <span className="text-black">Perfectly Preserved.</span>
          </h2>

          <p className="text-lg mt-4">
            High-quality frozen vegetables and gourmet ready-to-eat snacks,
            designed for effortless, everyday indulgence.
          </p>
        </div>
      </div>
    </div>
  );
}
