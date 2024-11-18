"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../components/ui/LayoutGrid";

export function LayoutGridDemo() {
    return (
        <section id="gallery" className="h-screen py-20 w-full">
            <div>
                <h1 className="heading text-white my-16">
                    <span>Gallery</span>
                </h1>
            </div>
            <LayoutGrid cards={cards} />
        </section>
    );
    }

    const SkeletonOne = () => {
    return (
        <div>
        <p className="font-bold md:text-4xl text-xl text-white">
            Gallery 01
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, modi fuga 
            veritatis illo officiis alias! Odio numquam quas, nemo beatae magni perspiciatis 
            maiores doloribus, officia veniam quod aliquam !!
        </p>
        </div>
    );
    };

    const SkeletonTwo = () => {
        return (
            <div>
            <p className="font-bold md:text-4xl text-xl text-white">
            Gallery 02
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, modi fuga 
                veritatis illo officiis alias! Odio numquam quas, nemo beatae magni perspiciatis 
                maiores doloribus, officia veniam quod aliquam !!
            </p>
            </div>
        );
        };
        const SkeletonThree = () => {
            return (
                <div>
                <p className="font-bold md:text-4xl text-xl text-white">
                Gallery 03
                </p>
                <p className="font-normal text-base text-white"></p>
                <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, modi fuga 
                    veritatis illo officiis alias! Odio numquam quas, nemo beatae magni perspiciatis 
                    maiores doloribus, officia veniam quod aliquam !!
                </p>
                </div>
            );
            };
            const SkeletonFour = () => {
                return (
                    <div>
                    <p className="font-bold md:text-4xl text-xl text-white">
                    Gallery 04
                    </p>
                    <p className="font-normal text-base text-white"></p>
                    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, modi fuga 
                        veritatis illo officiis alias! Odio numquam quas, nemo beatae magni perspiciatis 
                        maiores doloribus, officia veniam quod aliquam !!
                    </p>
                    </div>
                );
            };
            const SkeletonFive = () => {
                return (
                    <div>
                    <p className="font-bold md:text-4xl text-xl text-white">
                    Gallery 05
                    </p>
                    <p className="font-normal text-base text-white"></p>
                    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, modi fuga 
                        veritatis illo officiis alias! Odio numquam quas, nemo beatae magni perspiciatis 
                        maiores doloribus, officia veniam quod aliquam !!
                    </p>
                    </div>
                );
            };
            const SkeletonSix = () => {
                return (
                    <div>
                    <p className="font-bold md:text-4xl text-xl text-white">
                    Gallery 06
                    </p>
                    <p className="font-normal text-base text-white"></p>
                    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, modi fuga 
                        veritatis illo officiis alias! Odio numquam quas, nemo beatae magni perspiciatis 
                        maiores doloribus !!
                    </p>
                    </div>
                );
            };
            const SkeletonSeven = () => {
                return (
                    <div>
                    <p className="font-bold md:text-4xl text-xl text-white">
                    Gallery 07
                    </p>
                    <p className="font-normal text-base text-white"></p>
                    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, modi fuga 
                        veritatis illo officiis alias! Odio numquam quas, nemo beatae magni perspiciatis 
                        maiores doloribus !!
                    </p>
                    </div>
                );
            };
            const SkeletonEight = () => {
                return (
                    <div>
                    <p className="font-bold md:text-4xl text-xl text-white">
                    Gallery 08
                    </p>
                    <p className="font-normal text-base text-white"></p>
                    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, modi fuga 
                        veritatis illo officiis alias! Odio numquam quas, nemo beatae magni perspiciatis 
                        maiores doloribus !!
                    </p>
                    </div>
                );
            };
            const SkeletonNine = () => {
                return (
                    <div>
                    <p className="font-bold md:text-4xl text-xl text-white">
                    Gallery 09
                    </p>
                    <p className="font-normal text-base text-white"></p>
                    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, modi fuga 
                        veritatis illo officiis alias! Odio numquam quas, nemo beatae magni perspiciatis 
                        maiores doloribus !!
                    </p>
                    </div>
                );
            };

    const cards = [
    {
        id: 1,
        content: <SkeletonOne />,
        className: "md:col-span-1",
        thumbnail:
        "/project-1.jpg",
    },
    {
        id: 2,
        content: <SkeletonTwo />,
        className: "col-span-1",
        thumbnail:
        "/project-6.jpg",
    },
    {
        id: 3,
        content: <SkeletonThree />,
        className: "col-span-1",
        thumbnail:
        "/project-5.jpg",
    },
    {
        id: 4,
        content: <SkeletonFour />,
        className: "md:col-span-1",
        thumbnail:
        "/project-4.jpg",
    },
    {
        id: 5,
        content: <SkeletonFive />,
        className: "md:col-span-1",
        thumbnail:
        "/project-3.jpg",
    },
    {
        id: 6,
        content: <SkeletonSix />,
        className: "md:col-span-1",
        thumbnail:
        "/project-9.jpg",
    },
    {
        id: 7,
        content: <SkeletonSeven />,
        className: "md:col-span-1",
        thumbnail:
        "/project-7.jpg",
    },
    {
        id: 8,
        content: <SkeletonEight />,
        className: "md:col-span-1",
        thumbnail:
        "/project-8.jpg",
    },
    {
        id: 9,
        content: <SkeletonNine />,
        className: "md:col-span-1",
        thumbnail:
        "/project-2.jpg",
    },
    ];
