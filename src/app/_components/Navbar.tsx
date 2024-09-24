import Link from 'next/link'
import React from 'react'

type Props = object

export default function Navbar({ }: Props) {
  return (
    <div className='shadow-md w-full h-[5rem] p-2 flex justify-center items-center'>
      <div className='w-[30rem] h-full p-2 flex justify-around items-center'>
        <Link 
          className='hover:ring-1 hover:ring-blue-500 w-[35%] h-full flex justify-center items-center text-lg rounded-md transition-all ease-in-out' 
          href={'/'}>
          กรอกบันทึกการลา
        </Link>
        <Link 
          className='hover:ring-1 hover:ring-blue-500 w-[35%] h-full flex justify-center items-center text-lg rounded-md transition-all ease-in-out' 
          href={'/record'}>
          บันทึกการลา
        </Link>
      </div>
    </div>
  )
}
