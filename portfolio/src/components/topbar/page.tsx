'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import localFont from 'next/font/local'

const cal = localFont({
    src: '../../../public/fonts/PixelifySans-Regular.ttf',
    display: 'swap',
})

export default function TopBar() {

    const [page, setPage] = useState('home')


    return (
        <div className="flex fixed w-full h-1/6 justify-center rounded-b-full bg-slate-800 bg-opacity-50">

            <div className="flex flex-row absolute h-full w-1/2 justify-between items-center py-6">
                <Link href='#' onClick={() => setPage("projects")} className={cal.className}><div className={`${page =='projects' ? 'underline underline-offset-4' : ''} hover:scale-105`}>Projects</div></Link>
                <Link href='#' onClick={() => setPage("about")} className={cal.className}><div className={`${page =='about' ? 'underline underline-offset-4' : ''} hover:scale-105`}>About</div></Link>
                <Link href='#' onClick={() => setPage("contact")} className={cal.className}><div className={`${page =='contact' ? 'underline underline-offset-4' : ''} hover:scale-105`}>Contact</div></Link>
                <Link href='#' onClick={() => setPage("socialMedia")} className={cal.className}><div className={`${page =='socialMedia' ? 'underline underline-offset-4' : ''} hover:scale-105`}>Social Media</div></Link>
            </div>
            <Link href={"/"} onClick={() => setPage("home")} className={`absolute -bottom-1/2 w-32 h-32 rounded-full bg-pink-600 bg-opacity-15 ring-4 ring-pink-600`}>
                <Image src='/portrait.jpg' alt="portrait" fill className="absolute -bottom-1/2 rounded-full bg-cover -z-50" />
            </Link>
        </div>
    )
}