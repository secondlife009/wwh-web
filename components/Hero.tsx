"use client"

import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { BackgroundGradient } from './ui/background-gradient'


const Hero = () => {
    return (
        <section id="home">
            <div>
                {/* Background Grid */}
                
                <div className="w-full left-0 -top-72 min-h-96 z-50 bg-black">
                    <BackgroundGradient className="rounded-[22px] border-r-0 border-l-0 w-full h-full p-0 sm:p-0 -top-2 pr- bg-white dark:bg-zinc-900">
                        <video src={'/videoBg2.mp4'} autoPlay loop muted style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        }} className='rounded-[22px]' />
                        
                    </BackgroundGradient>
                </div>
                
            </div>
       
        </section>
    )
}

export default Hero