'use client'
import { Footer, NavbarUser } from './../../../components'
import { Error } from './../../../images'
import React from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter()
  const homePage = () => {
    router.push('/user/dashboard')
  }
  return (
    <div>
      <NavbarUser />  
      <div className='flex flex-col justify-center items-center my-32'>
        <Error />
        <button className='bg-[#FB2E86] px-6 rounded-md p-3 text-white' onClick={homePage}>Нүүр хуудас</button>
      </div>
      <Footer />
    </div>
  )
}

export default page

