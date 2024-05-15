import React from 'react'
import { Mebel, Sndal } from '../images'

export const Carousel = () => {
  return (
    <div className="w-[100%] h-[764px]">
        <div className="carousel w-[100%] h-[764px]">
            <div id="item1" className="carousel-item w-full bg-[#F2F0FF] flex  items-center justify-center gap-[320px] ">
                <div className="w-[480px] flex flex-col gap-5">
                    <p className="text-[#FB2E86]">Тав тухтай орчинг таны амьдралд</p>
                    <p className="text-5xl font-bold">2024 оны хамгийн 
                    шинэ загвар</p>
                    <p className="text-[#8A8FB9]">Швед улсын хамгийн шилдэг брэндийг албан ёсны эрхтэйгээр оруулж ирж байна</p>
                    <button className="bg-[#FB2E86] w-[163px] text-white px-[20px] py-[10px] rounded-[4px]">Дэлгэрэнгүй</button>
                </div>
                <div className="w-[629px] relative">
                    <div className="absolute"><Mebel/></div>
                    <div className="relative top-[10px]"><Sndal/></div>
                </div>
            </div> 
      <div id="item2" className="carousel-item w-full">
        <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
      </div> 
      <div id="item3" className="carousel-item w-full">
        <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
      </div> 
    </div> 
    <div className="flex justify-center w-full py-2 gap-2">
      <a href="#item1" className="btn btn-xs">1</a> 
      <a href="#item2" className="btn btn-xs">2</a> 
      <a href="#item3" className="btn btn-xs">3</a> 
    </div>
  </div>
  )
}