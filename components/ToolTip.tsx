"use client";
import React from "react";
import { AnimatedTooltip } from "../components/ui/AnimatedToolTip";
const people = [
    {
        id: 1,
        name: "John Doe",
        designation: "Software Engineer",
        image:
        "/stack-1.png",
    },
    {
        id: 2,
        name: "Kerlin",
        designation: "Product Manager",
        image:
        "/stack-2.png",
    },
    {
        id: 3,
        name: "jane Smith",
        designation: "Data Scientist",
        image:
        "/stack-3.png",
    },
    {
        id: 4,
        name: "Emily Davis",
        designation: "UX Designer",
        image:
        "/stack-4.png",
    },
    {
        id: 5,
        name: "Tyler Durden",
        designation: "Developer",
        image:
        "/stack-5.png",
    },
    {
        id: 6,
        name: "Dora",
        designation: "The Explorer",
        image:
        "/stack-6.png",
    },
    ];

    export function ToolTip() {
    return (
        <div className="flex flex-row items-center justify-center my-10 w-full">
        <AnimatedTooltip items={people} />
        </div>
    );
    }
