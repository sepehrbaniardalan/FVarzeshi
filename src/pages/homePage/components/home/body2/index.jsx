import React from 'react'

export default function Body2() {
  return (
    <div className="mt-30 mb-20">
      <div className="mb-10 flex justify-center">
        <h1 className="text-4xl font-semibold font-vazir"> !با اینا سفرت به راهه</h1>
      </div>
      <div dir="ltr" className="mx-auto grid w-[75%] grid-cols-4 gap-3">
        <div className="flex flex-col gap-3">
          <div className="relative h-52.5 overflow-hidden rounded-xl">
            <img src="/gridstyle/blueJacketbg.png" alt="" className="absolute inset-0 h-full w-full object-cover"/>
            <img src="/gridstyle/blueJacket.png" alt="" className="relative z-10 h-full w-full object-contain"/>
          </div>
          <div className="relative h-77.5 overflow-hidden rounded-xl">
            <img src="/gridstyle/rainCoatbg.png" alt="" className="absolute inset-0 h-full w-full object-cover"/>
            <img src="/gridstyle/rainCoat.png" alt="" className="relative z-10 h-full w-full object-contain" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="relative h-52.5 overflow-hidden rounded-xl">
            <img src="/gridstyle/kettlebg.png" alt=""  className="absolute inset-0 h-full w-full object-cover"/>
            <img src="/gridstyle/Kettle.png" alt="" className="relative z-10 h-full w-full object-contain"/>
          </div>
          <div className="relative h-77.5 overflow-hidden rounded-xl">
            <img src="/gridstyle/chairbg.png"  alt=""   className="absolute inset-0 h-full w-full object-cover" />
            <img src="/gridstyle/chair.png" alt=""  className="relative z-10 h-full w-full object-contain"/>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="relative h-77.5 overflow-hidden rounded-xl">
            <img src="/gridstyle/shoes11bg.png"   alt=""  className="absolute inset-0 h-full w-full object-cover"/>
            <img src="/gridstyle/shoes11.png"
              alt=""
              className="relative z-10 h-full w-full object-contain"
            />
          </div>

          <div className="relative h-52.5 overflow-hidden rounded-xl">
            <img  src="/gridstyle/gasStovebg.png"  alt=""  className="absolute inset-0 h-full w-full object-cover"/>
            <img  src="/gridstyle/gasStove.png" alt=""   className="relative z-10 h-full w-full object-contain"/>
          </div>

        </div>
        <div className="flex flex-col gap-3">

          <div className="relative h-77.5 overflow-hidden rounded-xl">
            <img src="/gridstyle/tentbg.png"  alt=""  className="absolute inset-0 h-full w-full object-cover"/>
            <img  src="/gridstyle/tent2.png" alt=""
              className="relative z-10 h-full w-full object-contain"/>
          </div>

          <div className="relative h-52.5 overflow-hidden rounded-xl">
            <img   src="/gridstyle/knifebg.png" alt=""  className="absolute inset-0 h-full w-full object-cover"/>
            <img  src="/gridstyle/knife.png" alt=""   className="relative z-10 h-full w-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  )
}