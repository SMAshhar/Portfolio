import Base from '@/components/home/page'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cover bg-[url('/bg.jpg')]">
      {/* <Image src='/bg.jpg' alt='bg'  className='absolute w-full h-full self-center' /> */}
      <div className='fixed w-full h-full flex justify-center'>
        <Base />
      </div>
    </main>
  )
}
