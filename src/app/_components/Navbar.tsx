import Link from 'next/link'
import React from 'react'

type Props = object

export default function Navbar({}: Props) {
  return (
    <div className='shadow-md w-full h-[5rem] p-2 flex justify-center items-center'>
        <div className='border w-[50rem] h-full'>
            <Link href={''}>
            <div className='border'></div>
            </Link>
        </div>
    </div>
  )
}