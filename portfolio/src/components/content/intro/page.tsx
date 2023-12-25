'use client'
import localFont from 'next/font/local'
import { useState } from 'react'

const cal = localFont({
    src: '../../../../public/fonts/PixelifySans-Regular.ttf',
    display: 'swap',
})

export default function Intro({ content }: { content: string }) {
    const [clip, setClip] = useState(content)

    return (
        <div className={`${cal.className} h-full flex flex-col justify-center`}>
            <div className='text-2xl top-1/2'>
                FULL STACK DEVELOPER
            {clip == "home" ? <div>Home</div> : ''}
            </div>
            <div>
                Syed Muhammad Ashhar
            </div>
            <div>
                Experienced Full Stack Web Developer with 10+ years in Industrial & Manufacturing Engineering. Expertise in project management, engineering design, maintenance. Proficient in Next.js, Tailwind CSS, React, APIs. Actively learning GenAI for innovative full-stack applications. Eager to contribute to dynamic web development and AI projects.
            </div>

        </div>
    )
}