import React from 'react'
import TopBar from '../topbar/page'
import Content from '../content/page'


export default function Base() {

    return (
        <div className='fixed self-start w-full h-full'>
            <TopBar />
            <div className='h-full w-full flex items-center'>
                <Content page='home' />
            </div>
        </div >
    )
}