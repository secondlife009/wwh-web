import { cn } from "@/lib/utils";
import React from "react";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Image from "next/image";

export function Services() {
  return (
    <section id="experience" className='w-full md:pt-33'>
        <h1 className="heading text-white">
            What We Can <span className="text-purple">Offer You</span>
        </h1>

        <BentoGrid className="max-w-4xl mx-auto py-20">
            {items.map((item, i) => (
                <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
            ))}
        </BentoGrid>
    </section>
  );
}
const Skeleton = ({pic} : {pic: string}) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Image 
        src={`/services/${pic}`}
        alt="services"
        width={1196}
        height={1196}
        className="w-full h-full"
    />
  </div>
);
const items = [
  {
    title: "Brand Promotion",
    description: "Boost your brand’s visibility and engagement with campaigns that resonate with your audience and drive results.",
    header: <Skeleton pic="p1.png" />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Marketing Excellence",
    description: "Connect with audiences locally and globally through impactful marketing strategies tailored to your brand.",
    header: <Skeleton pic="p2.png" />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Film & Music Production",
    description: "From music videos to commercials, we bring your ideas to life with professional production services.",
    header: <Skeleton pic="p3.png" />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Website & App Development",
    description:
      "Stand out online with sleek, user-friendly websites and mobile apps that capture your brand's essence.",
    header: <Skeleton pic="p4.png" />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Public Relations (PR) Services",
    description: "Build your brand’s reputation and create a lasting impact with strategic PR services.",
    header: <Skeleton pic="p5.png" />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Affiliations & Partnerships",
    description: "Expand your network with valuable partnerships and affiliations for accelerated growth.",
    header: <Skeleton pic="p6.png" />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Music Label for Rising Artists",
    description: "Empower young talent and build the future of music with a label dedicated to emerging artists.",
    header: <Skeleton pic="p7.png" />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
