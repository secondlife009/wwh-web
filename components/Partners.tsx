"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function Partners() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section id="experience" className='w-full md:pt-5'>
        <h1 className="heading text-white">
            Meet Our <span className="text-purple">Partners</span>
        </h1>
      <Carousel items={cards} />
    </section>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Luxura Lifestyle",
    title: "A luxury fashion and lifestyle brand that relies on WWH for high-end marketing and brand promotion.",
    src: "/partners/pt1.jpg",
    content: <DummyContent />,
  },
  {
    category: "Emirates Media House",
    title: "A media production company that collaborates with WWH for film and music video production.",
    src: "/partners/pt2.jpg",
    content: <DummyContent />,
  },
  {
    category: "NextGen Tech Solutions",
    title: "An innovative tech startup that partners with WWH for web and mobile app development to engage digital audiences.",
    src: "/partners/pt3.jpg",
    content: <DummyContent />,
  },

  {
    category: "Arabian Experience Hospitality",
    title: "A hospitality and tourism company that uses WWH’s marketing services to attract international guests and stand out in Dubai’s market.",
    src: "/partners/pt4.jpg",
    content: <DummyContent />,
  },
  {
    category: "Elite Event Planners",
    title: "An event management company that depends on WWH’s PR and promotional support to create buzz for major events in Dubai.",
    src: "/partners/pt5.jpg",
    content: <DummyContent />,
  },
  {
    category: "Desert Runway Fashion",
    title: "A fashion brand that works with WWH for promotional campaigns and high-quality media production to elevate its appeal.",
    src: "/partners/pt6.jpg",
    content: <DummyContent />,
  },
];
