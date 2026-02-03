import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col bg-white'>
      <main className='flex-1'>
        <section className='container mx-auto px-4 py-32'>
          <div className='mx-auto max-w-4xl text-center'>
            <h1 className='text-black mb-6 text-6xl font-bold'>
              Track every job application with clarity and confidence
            </h1>
            <p className='text-muted-foreground mb-10 text-xl'>Stay organised and move your job search forward with intention</p>
            <div className='flex justify-center items-center gap-4'>
            <Button
              size='lg'
              className='h-12 px-8 text-lg'
            >
              Register
            </Button>
            <Button
              size='lg'
              className='h-12 px-8 text-lg'
            >
              Login
            </Button>
            </div>
            
          </div>
        </section>
      </main>
    </div>
  )
}