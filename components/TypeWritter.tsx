"use client";
import { TypewriterEffectSmooth } from "../components/ui/TypewriterEffect";
    export function TypewriterEffectSmoothDemo() {
    const words = [
        {
        text: "Build",
        },
        {
        text: "awesome",
        },
        {
        text: "apps",
        },
        {
        text: "with",
        },
        {
        text: "Aceternity.",
        className: "text-violet-500",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center">
            <TypewriterEffectSmooth words={words} />
        </div>
    );
}
