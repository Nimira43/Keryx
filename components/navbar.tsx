import Link from 'next/link'
import { GiBookAura } from 'react-icons/gi'
import { Button } from './ui/button'

export default function Navbar() {
  return (
    <div className='border-b border-grey-200 bg-white'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4'>
        <Link
          href='/'
          className='flex items-center gap-2'
        >
          <GiBookAura />
          <span className='logo-font text-4xl text-primary'>Keryx</span>
        </Link>
        <div className='flex items-center gap-4'>
          <Link href='/sign-in'>
            <Button>Login</Button>
          </Link>
          <Link href='/sign-up'>
            <Button>Register</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}