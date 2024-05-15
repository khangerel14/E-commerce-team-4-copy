import { menu } from '@/utils/Menu'
import Link from 'next/link'
import React from 'react'

const HomeUser = () => {
  return (
    <div className='flex flex-col gap-1 py-2 bg-white absolute top-5 rounded-lg'>
        { menu && menu.map((val: any, index: any) => {
            return (
              <Link href={val.route} key={index} className='p-2 px-7 w-40 hover:bg-gray-100'>
                {val.name}
              </Link>
            )
        })}
    </div>
  )
}
7
export default HomeUser
