'use client'
// import { client } from '@/lib/sanityClient';
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import localFont from 'next/font/local'

type Slides = {
    image: string,
    heading: string,
    description: string
}[]

const cal = localFont({
    src: '../../../../public/fonts/PixelifySans-Regular.ttf',
    display: 'swap',
})

const slides: Slides = [
    {
        image: '/projects/ARCHITECT.png',
        heading: 'The Architect Stage',
        description: 'Meet The-Architect-Stage: a dynamic full-stack site powered by TypeScript, Next.js 14, Tailwind CSS, and Sanity CMS. Utilizing Drizzle ORM and Vercel, it ensures seamless database interaction and secure deployment. With SEO optimization, robust security, and a minimalist library approach, it promises swift, secure user experiences. Discover versatile pages, innovative React Hook Form-powered forms, and custom APIs. Middleware security fortifies the site for seamless, secure interactions.'
    },
    {
        image: '/projects/ARCHITECT.png',
        heading: 'asdThe Architect Stage',
        description: 'Meet The-Architect-Stage: a dynamic full-stack site powered by TypeScript, Next.js 14, Tailwind CSS, and Sanity CMS. Utilizing Drizzle ORM and Vercel, it ensures seamless database interaction and secure deployment. With SEO optimization, robust security, and a minimalist library approach, it promises swift, secure user experiences. Discover versatile pages, innovative React Hook Form-powered forms, and custom APIs. Middleware security fortifies the site for seamless, secure interactions.'
    },
    // {
    //     image: '/SlideShow/bedroom1.jpg',
    //     heading: 'Be The Creator of your Own Dream. ',
    //     description: 'At the end of the journey, after finalizing your architecture, our diligent construction team will get to your project almost instantly.'
    // }
]

export default function Projects() {

    // const slides = await getAllSlides()

    const [curr, setCurr] = useState(0)
    const prev = () => setCurr(curr => curr === 0 ? slides.length - 1 : curr - 1)
    const next = () => setCurr(curr => curr === slides.length - 1 ? 0 : curr + 1)

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
        }, 5000); // Adjust the duration (in milliseconds) to control the sliding speed

        return () => clearInterval(slideInterval);
    }, []);

    return (
        <div className="h-3/5 w-2/3">

            {[...slides.map((slide, index) => (
                <div key={index} className={`absolute ${curr == index ? 'opacity-100' : 'opacity-0'} flex h-3/5 w-full transition-opacity ease-in-out duration-500 text-center overflow-hidden`}>
                    <Image src={slide.image} alt="Architect Stage" width={1100} height={1100} />
                    <div className="w-full  h-full flex text-sm lg:text-md items-center rounded-tr-3xl justify-center flex-col shadow-sm">
                        <p className={cal.className}><p className='text-4xl py-12'>{slide.heading}</p></p>
                        <p className={cal.className}><p>{slide.description}</p></p>
                    </div>
                </div>
            ))]}


            {/* <Image src={'/projects/ARCHITECT.png'} alt="Architect Stage" width={1100} height={1100} /> */}
        </div>
    )
}