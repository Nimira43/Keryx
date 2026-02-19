'use client'

import Image from 'next/image'
import { Button } from './button'
import { useState } from 'react'

export default function ImageTabs() {
  const [activeTab, setActiveTab] = useState('organise')

  return (
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
  )
}