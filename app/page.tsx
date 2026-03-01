import { Button } from '@/components/ui/button'
import ImageTabs from '@/components/ui/image-tabs'
import Link from 'next/link'
import { LuFolderTree, LuNotebook } from 'react-icons/lu'
import { VscGraphLine } from 'react-icons/vsc'

export default function Home() {  
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
        <ImageTabs />
        <section className='border-t bg-white py-24'>
          <div className='container mx-auto px-4'>
            <div className='grid gap-12 md:grid-cols-3'>

              <div className='flex flex-col items-center text-center'>
                <div className='mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10'>
                  <LuFolderTree className='h-6 w-6 text-primary' />
                </div>
                <h3 className='mb-3 text-2xl font-semibold text-black'>
                  Structure Your Search
                </h3>
                <p className='text-muted-foreground max-w-xs'>
                  Build clear, flexible boards that map your entire job search — from first contact to final decision.
                </p>
              </div>

              <div className='flex flex-col items-center text-center'>
                <div className='mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10'>
                  <VscGraphLine className='h-6 w-6 text-primary' />
                </div>
                <h3 className='mb-3 text-2xl font-semibold text-black'>
                  See Your Momentum
                </h3>
                <p className='text-muted-foreground max-w-xs'>
                  Follow every application as it moves through your pipeline with clean, visual progress tracking.
                </p>
              </div>

              <div className='flex flex-col items-center text-center'>
                <div className='mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10'>
                  <LuNotebook className='h-6 w-6 text-primary' />
                </div>
                <h3 className='mb-3 text-2xl font-semibold text-black'>
                  Keep Everything in One Place
                </h3>
                <p className='text-muted-foreground max-w-xs'>
                  Store notes, dates, contacts, and updates together so nothing slips through the cracks.
                </p>
              </div>

            </div>
          </div>
        </section>


      </main>
    </div>
  )
}