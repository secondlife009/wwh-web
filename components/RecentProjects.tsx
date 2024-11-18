import React from 'react'
import { PinContainer } from './ui/Pin'
import { projects } from '@/data'

const RecentProjects = () => {
return (
    <section id="projects" className='py-20'>
        <h1 className='heading text-white'>
            <span className='text-purple'>Projects</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10'>
            {
                projects.map((item) => (
                    <div
                    className='flex items-center justify-center sm:w-96 w-[80vw]'
                    key={item.id}
                    >
                        <PinContainer
                        title="www.aceternity.com"
                        >
                            <div className='flex basis-full flex-col p-4 tracking-tight sm:basis-1/2 w-[20rem] h-[20rem]'>
                                <h3 className='max-w-xs !pb-2 !m-0 font-bold text-slate-100'>
                                    {item.title}
                                </h3>
                                <div>
                                    <span className='text-slate-500'>
                                        {item.des}
                                    </span>
                                </div>
                                <div className='flex flex-1 w-full rounded-lg mt-4'>
                                    <img 
                                    src={item.img}
                                    alt='cover'
                                    className='z-10 rounded-lg bg-cover'
                                    />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))
            }
        </div>
        
    </section>
)
}

export default RecentProjects