import React from 'react'
import { GradientProduct } from './GradientProduct'

export const products = [
    {
        id: 1,
        title: "Air Jordan 4 Retro Reimagined",
        des: "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
        img: "/products/jordans.webp",
        link: "#",
    },
    {
        id: 2,
        title: "Hustle Mode On Men T-Shirt",
        des: "TEELAVA is specialized in producing top quality, stylish and fashionable apparel (t-shirts, Hoodies, Tanks..etc) with custom designed prints that meets your tastes",
        img: "/products/pd1.png",
        link: "#",
    },
    {
        id: 3,
        title: "Celine Loose Hoodie in Cotton Fleece",
        des: "the celine client service is open from monday to saturday, 10 am to 7 pm, paris time. our team of advisors will be pleased to assist you at the following number",
        img: "/products/pd2.png",
        link: "#",
    },
    {
        id: 3,
        title: "B Volute Scritto leather 35 mm Reversible Belt",
        des: "One Venezia Scritto leather side and one Venezia plain leather side.",
        img: "/products/pd3.png",
        link: "#",
    },
]

const Merchandise = () => {
  return (
    <section id="experience" className='py-20 w-full'>
        <h1 className="heading text-white">
            WWH <span className="text-purple">Merchandise</span>
        </h1>

        <div className='w-full mt-20 grid lg:grid-cols-2 grid-cols-1 gap-10'>
            {
                 products.map((product) => (
                    <GradientProduct product={product} />
                 ))
            }
        </div>
    </section>
  )
}

export default Merchandise