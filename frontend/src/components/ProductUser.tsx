import { Length, LitFour } from '@/images'
import React from 'react'

export const ProductUser = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex mx-auto w-[1440px] justify-between mt-20 mb-12 items-center'>
            <div className='flex flex-col gap-1'>
                <h1 className='text-xl font-bold text-[#151875]'>Ecommerce Acceories & Fashion item</h1>
                <p className='text-[#8A8FB9]'>About 20 results (0.62 seconds)</p>
            </div>
            <div className='flex gap-10 items-center text-[#3F509E]'>
                <div className='flex gap-3'>
                    <h1>Per Page:</h1>
                    <input type="text" className='border border-[#E7E6EF] w-16'/>
                </div>
                <div className='flex gap-3'>
                    <h1>Sort By:</h1>
                    <select name="" className='border bg-white outline-none text-md text-[#9a95be] px-3'>
                        <option value="">Best Match</option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                </div>
                <div className='flex gap-2 items-center'>
                    <h1>View:</h1>
                    <button><LitFour /></button>
                    <button><Length /></button>
                </div>
                <input type="text" className='border border-[#E7E6EF]'/>
            </div>
        </div>
    </div>
  )
}