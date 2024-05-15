import React from 'react'
import { Car, Cashback, Premium, Support } from '../images'

export const Service = () => {
  return (
    <div className='w-[1440px] m-auto flex flex-col justify-center items-center gap-[20px] mb-[50px]'>
      <p className='text-3xl font-bold'>Үйлчилгээний тухай</p>
      <div className='flex justify-between w-[1440px]'>
           <div className='shadow-xl h-[320px] w-[287.4px] gap-[50px] flex flex-col items-center  px-[20px] py-[40px]'>
               <Car/>
               <div className='flex flex-col gap-[10px] justify-center items-center'>
                    <p className='font-bold tex-xl'>Үнэгүй хүргэлт</p>
                    <p className=' text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, autem facere?</p>
               </div>
           </div>
           <div className='shadow-xl h-[320px] w-[287.4px] gap-[30px] flex flex-col items-center  px-[20px] py-[40px]'>
               <Cashback/>
               <div className='flex flex-col gap-[10px] justify-center items-center'>
                    <p className='font-bold tex-xl'>Үнэгүй хүргэлт</p>
                    <p className=' text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, autem facere?</p>
               </div>
           </div>
           <div className='shadow-xl h-[320px] w-[287.4px] gap-[30px] flex flex-col items-center  px-[20px] py-[40px]'>
               <Premium/>
               <div className='flex flex-col gap-[10px] justify-center items-center'>
                    <p className='font-bold tex-xl'>Үнэгүй хүргэлт</p>
                    <p className=' text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, autem facere?</p>
               </div>
           </div>
           <div className='shadow-xl h-[320px] w-[287.4px] gap-[30px] flex flex-col items-center  px-[20px] py-[40px]'>
               <Support/>
               <div className='flex flex-col gap-[10px] justify-center items-center'>
                    <p className='font-bold tex-xl'>Үнэгүй хүргэлт</p>
                    <p className=' text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, autem facere?</p>
               </div>
           </div>
           
      </div>
    </div>
  )
}
