"use client";
import React, { useState } from "react";
import {
motion,
AnimatePresence,
useScroll,
useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
navItems,
className,
}: {
navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
}[];
className?: string;
}) => {
const { scrollYProgress } = useScroll();

// set true for the initial state so that nav bar is visible in the hero section
const [visible, setVisible] = useState(true);

useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
    let direction = current! - scrollYProgress.getPrevious()!;

    if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
    } else {
        if (direction < 0) {
        setVisible(true);
        } else {
        setVisible(false);
        }
    }
    }
});

return (
    <AnimatePresence mode="wait">
    <motion.div
        initial={{
        opacity: 1,
        y: -100,
        }}
        animate={{
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0,
        }}
        transition={{
        duration: 0.2,
        }}
        className={cn(
        "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-full border items-center justify-center space-x-4",
        className
        )}
        style={{
        backdropFilter: "blur(16px) saturate(180%)",
        backgroundColor: "rgba(44, 14, 89, 0.15)",
        borderRadius: "50px",
        border: "1px solid rgba(255, 255, 255, 0.525)",
        }}
    >
        {navItems.map((navItem: any, idx: number) => (
        <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
            "relative items-center  flex space-x-1 text-white/80  hover:text-white transition-all"
            )}
        >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className=" text-sm !cursor-pointer">{navItem.name}</span>
        </Link>
        ))}

    </motion.div>
    </AnimatePresence>
);
};
