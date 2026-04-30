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
  const fruitsRef = useRef<HTMLImageElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const directions = [
        { x: -120, y: -120 },
        { x: 120, y: -120 },
        { x: -120, y: 120 },
        { x: 120, y: 120 },
      ];

      fruitsRef.current.forEach((fruit, i) => {
        const dir = directions[i % directions.length];

        gsap.set(fruit, {
          x: dir.x,
          y: dir.y,
          opacity: 0,
          scale: 0.6,
        });

        gsap.to(fruit, {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // 🔥 helper to collect refs safely
  const addToRefs = (el: HTMLImageElement | null) => {
    if (el && !fruitsRef.current.includes(el)) {
      fruitsRef.current.push(el);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative h-screen my-16 text-black bg-[#F0EADE] overflow-hidden"
    >
      {/* Fruits */}

      <Image ref={addToRefs} src="/momo.png" alt="" width={120} height={120} className="absolute -top-2 -left-2" />
      <Image ref={addToRefs} src="/pea.png" alt="" width={120} height={120} className="absolute -top-14 left-60" />
      <Image ref={addToRefs} src="/fruit1.png" alt="" width={120} height={120} className="absolute -top-14 right-1/2" />

      <Image ref={addToRefs} src="/strawberry.png" alt="" width={120} height={120} className="absolute -top-5 -right-5" />
      <Image ref={addToRefs} src="/corn.png" alt="" width={120} height={120} className="absolute -top-8 right-60" />

      <Image ref={addToRefs} src="/strawberry.png" alt="" width={120} height={120} className="absolute bottom-1/2 -left-10" />
      <Image ref={addToRefs} src="/pea.png" alt="" width={120} height={120} className="absolute bottom-40 -left-[15px]" />

      <Image ref={addToRefs} src="/cauliflower.png" alt="" width={120} height={120} className="absolute -bottom-3 -left-3" />
      <Image ref={addToRefs} src="/fruit1.png" alt="" width={120} height={120} className="absolute -bottom-3 -right-3" />

      <Image ref={addToRefs} src="/momo.png" alt="" width={120} height={120} className="absolute bottom-1/2 -right-8" />
      <Image ref={addToRefs} src="/corn.png" alt="" width={120} height={120} className="absolute bottom-40 -right-10" />

      {/* Content */}
      <div className="flex flex-col items-center pt-20 px-20 gap-5 h-2/5">
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