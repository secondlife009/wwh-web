"use client";
import React from "react";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { BackgroundGradient } from "./ui/background-gradient";

export function GradientProduct({ product } : any) {
  return (
    
      <BackgroundGradient className="rounded-[22px] max-w-full min-h-full p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={product.img}
          alt={product.title}
          height="400"
          width="400"
          className="object-contain w-full h-full"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {product.title}
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {product.des}
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            $100
          </span>
        </button>
      </BackgroundGradient>
    
  );
}
