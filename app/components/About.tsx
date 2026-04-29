"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { Oooh_Baby } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ooohBaby = Oooh_Baby({
  subsets: ["latin"],
  weight: "400",
});

function About() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const fruitsRef = useRef<(HTMLImageElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const directions = [
        { x: -80, y: -80 }, // top-left
        { x: 300, y: -300 },  // top-right
        { x: -300, y: 300 },  // bottom-left
        { x: 300, y: 300 },   // bottom-right
      ];

      fruitsRef.current.forEach((fruit, i) => {
        if (!fruit) return;

        // Start OUTSIDE (fixed direction)
        gsap.set(fruit, {
          x: directions[i].x,
          y: directions[i].y,
          opacity: 0,
          scale: 0.6,
        });

        // Animate INTO corner
        gsap.to(fruit, {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        });

        // Optional floating effect
        // gsap.to(fruit, {
        //   y: "+=8",
        //   repeat: -1,
        //   yoyo: true,
        //   duration: 2,
        //   ease: "sine.inOut",
        //   delay: 1,
        // });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen my-16 text-black bg-[#F0EADE] overflow-hidden"
    >
      {/* Fruits (fixed corner positions) */}
      {/* Top Left */}
<Image
  ref={(el) => (fruitsRef.current[0] = el)}
  src="/momo.png"
  alt=""
  width={120}
  height={120}
  className="absolute -top-2 -left-2"
/>

{/* Top Left */}
<Image
  ref={(el) => (fruitsRef.current[0] = el)}
  src="/momo.png"
  alt=""
  width={120}
  height={120}
  className="absolute -top-2 -left-2"
/>



{/* Top Right */}
<Image
  ref={(el) => (fruitsRef.current[1] = el)}
  src="/strawberry.png"
  alt=""
  width={120}
  height={120}
  className="absolute -top-5 -right-5"
/>

{/* Bottom Left */}
<Image
  ref={(el) => (fruitsRef.current[2] = el)}
  src="/cauliflower.png"
  alt=""
  width={120}
  height={120}
  className="absolute -bottom-3 -left-3"
/>

{/* Bottom Right */}
<Image
  ref={(el) => (fruitsRef.current[3] = el)}
  src="/fruit1.png"
  alt=""
  width={120}
  height={120}
  className="absolute -bottom-3 -right-3"
/>

      {/* Content */}
      <div className="flex flex-col items-center pt-15 px-10 gap-5 h-2/5">
        <h1 className="text-6xl font-bold text-[#297B43] text-center">
          Bringing Farm{" "}
          <span className={ooohBaby.className}>freshness</span> to Your Freezer
        </h1>

        <p className="text-lg text-center font-extralight leading-6.5 tracking-tight px-20 pt-4">
          We specialize in delivering high-quality frozen foods that retain
          their natural taste, nutrition, and freshness. From farm-picked
          vegetables to perfectly crafted ready-to-eat snacks like momos, our
          products are designed for modern lifestyles—quick, convenient, and
          absolutely delicious.
        </p>
      </div>

      {/* Bottom Image */}
      <div className="flex items-end h-3/5">
        <Image
          src="/about2.png"
          alt="frozen"
          width={2000}
          height={2000}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

export default About;