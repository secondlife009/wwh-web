import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedDescription() {
    const testimonials = [
        {
        quote: "Kisho Kumar’s Arab Money project envisions a powerful, bilingual English-Arabic anthem that bridges cultures, showcasing Middle Eastern pride. Aiming for viral reach, it unites diverse audiences, promoting cultural appreciation and global impact through dynamic music and visuals.",
        name: "Kisho Kumar (Chikaadee)",
        designation: "Founder, WWH Dubai",
        src: "/profiles/pl1.jpg",
        }
    ];

    return (
        <section id="experience" className='w-full md:pt-36'>
            <h1 className="heading text-white">
                Arab Money <span className="text-purple">Project Description</span>
            </h1>

            <AnimatedTestimonials testimonials={testimonials} />
        </section>
    );
}
