"use client";

import React, { useEffect, useRef } from "react";
import Card from "./Card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Licorice, Oooh_Baby } from "next/font/google";

gsap.registerPlugin(ScrollTrigger);

const ooohBaby = Oooh_Baby({
  variable: "--font-oooh-baby",
  subsets: ["latin"],
  weight: "400",
});


type Product = {
  heading: string;
  content: string;
  imageUrl: string;
};

export default function Products() {

  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const products: Product[] = [
    { heading: "Green Peas", content: "Farm-fresh peas, instantly frozen to lock in taste and nutrition.", imageUrl: "/greenpea.png" },
    { heading: "Sweet Corn", content: "Farm-fresh peas, instantly frozen to lock in taste and nutrition.", imageUrl: "/sweetcorn.png" },
    { heading: "Mix Vegetables", content: "Farm-fresh veggies, instantly frozen to lock in taste and nutrition.", imageUrl: "/mixveggies.png" },
    { heading: "Veg Momos", content: "Soft and delicious frozen momos, ready in minutes.", imageUrl: "/vegmomo.png" },
    { heading: "Frozen Fruits", content: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum", imageUrl: "/fruit.png" },
    { heading: "Green Peas", content: "Farm-fresh peas, instantly frozen to lock in taste and nutrition.", imageUrl: "/greenpea.png" },
    { heading: "Sweet Corn", content: "Farm-fresh peas, instantly frozen to lock in taste and nutrition.", imageUrl: "/sweetcorn.png" },
    { heading: "Mix Vegetables", content: "Farm-fresh veggies, instantly frozen to lock in taste and nutrition.", imageUrl: "/mixveggies.png" }
  ];

  useEffect(() => {
    if (!scrollRef.current || !containerRef.current) return;

    const totalWidth = scrollRef.current.scrollWidth;
    const screenWidth = window.innerWidth;
    const scrollDistance = totalWidth - screenWidth;

    const animation = gsap.to(scrollRef.current, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${scrollDistance}`,
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    ScrollTrigger.refresh();

    
    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden">

      <div ref={scrollRef} className="flex gap-6 p-15 md:mt-15">
        <h2 className="text-7xl font-bold tracking-tight border-r border-black/50 mr-2 pr-15">
         GRAB YOUR NEXT 
          <span className={`${ooohBaby.className} text-white text-8xl`}> favorite</span>
        </h2>
        {products.map((item, index) => (
          <div className="min-w-75 min-h-full" key={index}>
            <Card
              heading={item.heading}
              content={item.content}
              imageUrl={item.imageUrl}
            />
          </div>
        ))}
      </div>

    </div>
  );
}