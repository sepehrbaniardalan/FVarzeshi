import React from 'react'

export default function HeaderP4() {
    return (
        <div className='flex justify-center gap-5 mt-22'>
        <div className="relative w-[40%] h-[180px] ">
            <img src="/2Part/Rectangle 25.png" alt="" className="w-full h-full object-cover rounded-xl"/>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-right text-white">
                <h2 className="text-base font-bold pb-3.5">به راحتی هر جایی آشپزی کنید!<br />با محصولات بی‌نظیر</h2>
                <button className="mt-2 rounded-full bg-gray-600 px-4 py-1 text-xs font-semibold">مشاهده</button>
            </div>
        </div>
        <div className="relative w-[40%] h-[180px] ">
            <img src="/2Part/Rectangle 24.png" alt="" className="w-full h-full object-cover rounded-3xl"/>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-right text-white">
                <h2 className="text-base font-bold pb-3.5">به راحتی هر جایی آشپزی کنید!<br />با محصولات بی‌نظیر</h2>
                <button className="mt-2 rounded-full bg-gray-600 px-4 py-1 text-xs font-semibold">مشاهده</button>
            </div>
        </div>
        </div>
    )
}