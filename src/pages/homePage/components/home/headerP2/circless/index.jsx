import React from 'react'

export default function Circleee({name,img,img2}) {
    return (
        <div>
            <div class="relative w-44 h-44">
                <img src={img2} class="absolute inset-0  w-full h-full " />
                <img src={img} class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-50" />
            </div>
            <h1 className='font-medium text-2xl font-vazir flex justify-center pt-2.5'>{name}</h1>
        </div>
    )
}
