import React from 'react'

import { testimonials } from '@/data';
import { InfiniteMovingCards } from './ui/InfiniteCards';

const Clients = () => {
    return (
        <section id="testimonials" className='py-20'>
            <h1 className='heading text-white mb-16'>
                Kind words from
                <span className='text-purple'> satisfied Clients</span>
            </h1>

            <div className='flex flex-col items-center max-lg:mt-10'>
                <div className='h-[28vh] md:h-[18rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden'>
                    <InfiniteMovingCards 
                    items={testimonials}
                    direction='left'
                    speed='slow'
                    />
                </div>
            </div>
        </section>
    )
}

export default Clients