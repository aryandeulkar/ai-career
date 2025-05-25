import React from 'react'
import Link from 'next/link'
import { Button } from './button'
import Image from 'next/image'
const HeroSection = () => {
  return (
    <div className='  pt-20 md:pt-48 flex justify-center items-center'>
      <div className=' space-y-6 text-center'>
        <div className=' space-y-6  mx-auto'>
           <h1 className=' text-7xl font-extrabold '>
            Your AI Carer Coach for 
            <br />
            Professional Success
            </h1> 
            <p>
              Advance your career with personalized guidance, interview prep, and AI-powered  tools for job success.
            </p>
        </div>
        <div className="space-x-4">
<Link href="/dashboard" className="px-8 py-2 bg-blue-600 text-white rounded inline-block text-lg">
  Get Started
</Link>



<Link href="https://www.youtube.com/watch?v=UbXpRv5ApKA&t=363s">
  <Button size="lg" className="px-8"  variant="outline">
Watch on YouTube
  </Button>
</Link>
    </div>
    <div>
      <div className=' w-full h-full'>
        <Image
        src={"/bg.avif"}
        width={400}
        height={400}
        className=' rounded-lg shadow-2xl border mx-auto'
        alt='img'
        priority
        />
      </div>
    </div>

      </div>
    </div>
  )
}

export default HeroSection
