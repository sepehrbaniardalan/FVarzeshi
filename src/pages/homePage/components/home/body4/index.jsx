import React from 'react'
export default function Body4() {
    const cards = [
        {
            img: "/3Part/pic1.jpg",
            title: "بهترین شلوار های کوهنوردی",
        },
        {
            img: "/3Part/pic2.png",
            title: "ست بدنسازی رو از اینجا بگیر!",
        },
        {
            img: "/3Part/pic3.png",
            title: "یه مبارزه جذاب با بهترین دستکش ها",
        },
    ]
    return (
        <div dir="rtl" className="flex justify-center gap-5 pt-20 pb-18">
            {cards.map((card, index) => (
                <div key={index} className="relative w-[380px] h-[255px] overflow-hidden rounded-3xl" >
                    <img src={card.img} alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/45"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-white">
                        <h2 className="text-xl font-bold">{card.title}</h2>
                        <button className="rounded-full bg-white/30 px-6 py-2 text-sm font-semibold">مشاهده</button>
                    </div>
                </div>
            ))}
        </div>
    )
}