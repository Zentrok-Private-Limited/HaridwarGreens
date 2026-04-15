"use client";

import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import React from "react";


type ProductCardProps = {
  heading: string;
  content: string;
  imageUrl: string;
};

export default function ProductCard({
  heading,
  content,
  imageUrl,
}: ProductCardProps) {
  return (
    <div className="rounded-4xl shadow-sm hover:scale-100 bg-[#275123] text-white hover:shadow-lg transition-all duration-300 ease-in-out flex flex-col p-1.5 hover:cursor-pointer">
      
      <div className="relative w-full aspect-square mb-4">
        <Image
          src={imageUrl}
          alt={heading}
          fill
          className="object-contain rounded-3xl"
        />
      </div>

      <div className="px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">{heading}</h2>

          <p className="flex items-center text-xs underline gap-1">
            order now <span><GoArrowUpRight /></span>
          </p>
        </div>

        <p className="text-xs py-2 font-light">
          {content}
        </p>
      </div>

    </div>
  );
}