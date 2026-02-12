'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('organise')
  
  return (
    <div className='flex min-h-screen flex-col bg-white'>
      <main className='flex-1'>
        <section className='container mx-auto px-4 py-32'>
          <div className='mx-auto max-w-4xl text-center'>
            <h1 className='text-black mb-6 text-5xl font-semibold'>
              Track every job application with clarity and confidence
            </h1>
            <p className='text-muted-foreground mb-10 text-xl'>Stay organised and move your job search forward with intention</p>
            <Link href='/sign-up'>
              <Button
                size='lg'
                className='h-12 px-8 text-lg cursor-pointer'
              >
                Start
              </Button>
            </Link>
          </div>
        </section>
        <section className='border-t bg-white py-16'>
          <div className='container mx-auto px-4'>
            <div className='mx-auto max-w-6xl'>
              <div className='flex gap-2 justify-center mb-8'>
                <Button 
                  onClick={
                    () => setActiveTab('organise')
                  }
                  className={`
                    px-6 py-3 text-sm font-medium cursor-pointer 
                    ${activeTab === 'organise' 
                      ? 'bg-primary' 
                      : 'bg-gray-700'
                    }
                  `}
                >
                  Organise Applications
                </Button>
                <Button 
                  onClick={
                    () => setActiveTab('hired')
                  }
                  className={`
                    px-6 py-3 text-sm font-medium cursor-pointer 
                    ${activeTab === 'hired' 
                      ? 'bg-primary' 
                      : 'bg-gray-700'
                    }
                  `}
                >
                  Get Hired
                </Button>
                <Button 
                  onClick={
                    () => setActiveTab('boards')
                  }
                  className={`
                    px-6 py-3 text-sm font-medium cursor-pointer 
                    ${activeTab === 'boards' 
                      ? 'bg-primary' 
                      : 'bg-gray-700'
                    }  
                  `}
                >
                  Manage Boards
                </Button>
              </div>
              <div className='relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl'>
                {activeTab === 'hired' && (
                  <Image
                    src='/hero-images/hero-1.jpg'
                    alt='Organise Applications'
                    width={1200}
                    height={800}
                  />
                )}
                {activeTab === 'organise' && (
                  <Image
                    src='/hero-images/hero-2.jpg'
                    alt='Get Hired'
                    width={1200}
                    height={800}
                  />
                )}  
                {activeTab === 'boards' && (
                  <Image
                    src='/hero-images/hero-3.jpg'
                    alt='Manage Boards'
                    width={1200}
                    height={800}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}