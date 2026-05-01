"use client";

import React, { useEffect, useRef, useState } from "react";
import { Licorice, Oooh_Baby, Titan_One } from "next/font/google";
import Image from "next/image";
import { PiArrowArcRightThin } from "react-icons/pi";
import { motion, Variants } from "framer-motion";
import gsap from "gsap";
import { LuVegan } from "react-icons/lu";

// Fonts
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

// Image list
const ImageSlider: string[] = [
  "/newfruits.png",
  "/mixvegnew.png",
  "/newfruits.png",
  "/mixvegnew.png",
  "/newfruits.png",
  "/mixvegnew.png",
];

export default function Home() {
  // Framer Motion variants
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const word: Variants = {
    hidden: { y: 80, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { y: 40, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };

  // State
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Refs
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const images = imagesRef.current.filter(
      (img): img is HTMLImageElement => img !== null
    );

    if (!images.length) return;

    // Initial state
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
        "<"
      );
    });

    // Floating text animation
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
      {/* Heading */}
      <div className="flex flex-col items-center justify-center p-4">
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className={`${titanOne.className} text-[140px] font-bold leading-[0.8] tracking-tight uppercase flex flex-wrap justify-center gap-x-6`}
        >
          {"Frozen Fresh".split(" ").map((wordText, i) => (
            <span key={i} className="overflow-hidden">
              <motion.span variants={word} className="inline-block">
                {wordText}
              </motion.span>
            </span>
          ))}
        </motion.h1>
      </div>

      <div className="grid grid-cols-[1fr_2fr_1fr] mt-10">
        {/* Left Section */}
        <div className="flex flex-col gap-10">
          <div className="relative left-10 flex items-center justify-center w-50 h-50 bg-[#0a0a0a] rounded-full text-white shadow-lg">
            <span className="text-8xl font-serif font-bold tracking-tight">
              <LuVegan />
            </span>

            <svg
              viewBox="0 0 200 200"
              className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]"
            >
              <path
                id="circlePath"
                d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                fill="none"
              />

              <text className="fill-white text-[12px] tracking-[0.24em] uppercase">
                <textPath href="#circlePath">
                  NO ADDITIVES ♦ 100% NATURAL ♦ LOCKING FRESHNESS ♦ FROZEN ♦
                </textPath>
              </text>
            </svg>
          </div>

          <div className="pl-10">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.2 }}
              className="text-lg font-extralight leading-6.5 tracking-tight mt-6"
            >
              Our frozen foods are picked at peak freshness and quickly
              frozen—no additives, just pure goodness.
            </motion.p>
          </div>
        </div>

        {/* Center Image Slider */}
        <div className="relative overflow-hidden flex justify-center items-center h-100">
          <div className="absolute top-20 left-0 flex flex-col items-center pl-8">
            <motion.h3
              ref={textRef}
              initial={{ y: 30, opacity: 0, rotate: -15 }}
              animate={{ y: -10, opacity: 1, rotate: -10 }}
              transition={{ duration: 1.2 }}
              className={`${ooohBaby.className} flex items-center gap-2 text-2xl -rotate-10`}
            >
              Fresh ingredients,
              <br />
              frozen at their finest.
              <PiArrowArcRightThin className="text-3xl" />
            </motion.h3>
          </div>

          {ImageSlider.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt="frozen"
              width={460}
              height={460}
              className="absolute will-change-transform"
              ref={(el): void => {
                imagesRef.current[i] = el;
              }}
            />
          ))}
        </div>

        {/* Right Section */}
        <div className="p-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-4xl font-bold"
          >
            <span className="text-[#E5E9AC]">Pure Taste.</span>
            <br />
            <span className="text-black">Perfectly Preserved.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            className="text-lg font-extralight leading-6.5 tracking-tight mt-6"
          >
            High-quality frozen vegetables and gourmet ready-to-eat snacks,
            designed for effortless, everyday indulgence.
          </motion.p>
        </div>
      </div>
    </div>
  );
}