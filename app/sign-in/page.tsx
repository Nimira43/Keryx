'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export default function SignIn() {
  return (
    <div className='flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white p-4'>
      <Card className='w-full max-w-md border-gray-200 shadow-lg'>
        <CardHeader className='space-y-1'>
          <CardTitle className='text-2xl font-medium text-black text-center'>
            Login
          </CardTitle>
          <CardDescription className='text-muted-foreground text-center text-sm'>
            Please fill this form to login
          </CardDescription>
        </CardHeader>
        <form className='space-y-4'>
          <CardContent className='space-y-4'>
            <div className='space-y-2'>
              <Label
                htmlFor='email'
                className='text-gray-700'
              >
                Email
              </Label>
              <Input
                id='email'
                type='email'
                required
              />
            </div>
            <div className='space-y-2'>
              <Label
                htmlFor='password'
                className='text-gray-700'
                
              >
                Password
              </Label>
              <Input
                id='password'
                type='password'
                required
              />
            </div>
          </CardContent>
          <CardFooter className='flex flex-col space-y-4'>
            <Button
              type='submit'
            >
              Login
            </Button>
            <p className='text-sm text-muted-foreground'>
              Don&apos;`t have an account?
              <Link
                href='sign-up'
                className='pl-2 uppercase hover:text-primary transitioning'
              >
                Register
              </Link>   
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}