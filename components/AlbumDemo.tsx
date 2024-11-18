"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";

export function AlbumDemo() {
  const images = [
    "/album/c2.jpg",
    "/album/c12.jpg",
    "/album/c10.jpg",
  ];
  return (
    <section id="experience" className='md:pb-20 w-full md:mt-6'>
        <h1 className="heading text-white">
            Chikaadee <span className="text-purple">Album Demo</span>
        </h1>

        <ImagesSlider className="h-[40rem] md:mt-9" images={images}>
            <motion.div
                initial={{
                opacity: 0,
                y: -80,
                }}
                animate={{
                opacity: 1,
                y: 0,
                }}
                transition={{
                duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center"
            >
                
            </motion.div>
        </ImagesSlider>
    </section>
  );
}
