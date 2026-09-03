// import React from 'react'
// export default function FooterBEnd() {
//   return (
//     <div>
// <h3 dir='rtl' className='font-bold text-2xl font-vazir pr-30'>پیشنهاد ما</h3>
//     </div>
//   )
// }
import React from "react";

function StarIcon({ filled }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill={filled ? "#facc15" : "#d1d5db"}
      stroke={filled ? "#facc15" : "#d1d5db"}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function BigStarIcon({ filled }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill={filled ? "#facc15" : "#d1d5db"}
      stroke={filled ? "#facc15" : "#d1d5db"}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function ThumbsUpIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 22V11M2 13v7a2 2 0 0 0 2 2h13.4a2 2 0 0 0 2-1.7l1.4-9A2 2 0 0 0 19 9H14V4a2 2 0 0 0-2-2L7 11" />
    </svg>
  );
}

function ThumbsDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 2v11M22 11V4a2 2 0 0 0-2-2H6.6a2 2 0 0 0-2 1.7l-1.4 9A2 2 0 0 0 5 15h5v5a2 2 0 0 0 2 2l5-9" />
    </svg>
  );
}

export default function Reviews() {
  return (
    <div dir="ltr" className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 p-6">
      {/* خلاصه امتیاز - سمت چپ */}
      <div dir="rtl" className="md:col-span-1">
        <div className="flex items-center gap-3">
          <span className="text-4xl font-bold text-neutral-800">4.2</span>
          <div className="flex gap-0.5">
            <BigStarIcon filled={false} />
            <BigStarIcon filled={true} />
            <BigStarIcon filled={true} />
            <BigStarIcon filled={true} />
            <BigStarIcon filled={true} />
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-4 text-sm text-neutral-600">7</span>
            <div className="flex-1 h-2 rounded-full bg-gray-300 overflow-hidden">
              <div className="h-full bg-yellow-400 w-[85%]" />
            </div>
            <span className="w-4 text-sm text-neutral-600">5</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-4 text-sm text-neutral-600">3</span>
            <div className="flex-1 h-2 rounded-full bg-gray-300 overflow-hidden">
              <div className="h-full bg-yellow-400 w-[45%]" />
            </div>
            <span className="w-4 text-sm text-neutral-600">4</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-4 text-sm text-neutral-600">2</span>
            <div className="flex-1 h-2 rounded-full bg-gray-300 overflow-hidden">
              <div className="h-full bg-yellow-400 w-[30%]" />
            </div>
            <span className="w-4 text-sm text-neutral-600">3</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-4 text-sm text-neutral-600">0</span>
            <div className="flex-1 h-2 rounded-full bg-gray-300 overflow-hidden">
              <div className="h-full bg-yellow-400 w-0" />
            </div>
            <span className="w-4 text-sm text-neutral-600">2</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-4 text-sm text-neutral-600">0</span>
            <div className="flex-1 h-2 rounded-full bg-gray-300 overflow-hidden">
              <div className="h-full bg-yellow-400 w-0" />
            </div>
            <span className="w-4 text-sm text-neutral-600">1</span>
          </div>
        </div>
      </div>

      {/* لیست نظرات - سمت راست */}
      <div dir="rtl" className="md:col-span-2 divide-y divide-gray-200">
        {/* نظر ۱ */}
        <div className="py-5 first:pt-0">
          <div className="flex flex-col items-start gap-1">
            <div className="text-sm text-neutral-800">
              <span className="font-bold">مانیا رحیمی</span>
              <span className="text-neutral-400"> . دیروز</span>
            </div>
            <div className="flex gap-0.5">
              <StarIcon filled={false} />
              <StarIcon filled={true} />
              <StarIcon filled={true} />
              <StarIcon filled={true} />
              <StarIcon filled={true} />
            </div>
          </div>

          <p className="mt-3 text-neutral-700 text-[15px] leading-7">
            کیفیت خوبی داره.قابل قبوله
          </p>

          <div className="mt-2 flex items-center gap-4 text-sm text-neutral-500">
            <button className="hover:text-neutral-700">پاسخ</button>
            <div className="flex items-center gap-1">
              <span>0</span>
              <ThumbsDownIcon />
            </div>
            <div className="flex items-center gap-1">
              <span>3</span>
              <ThumbsUpIcon />
            </div>
          </div>
        </div>

        {/* نظر ۲ */}
        <div className="py-5">
          <div className="flex flex-col items-start gap-1">
            <div className="text-sm text-neutral-800">
              <span className="font-bold">مریم اکبری</span>
              <span className="text-neutral-400"> . دیروز</span>
            </div>
            <div className="flex gap-0.5">
              <StarIcon filled={false} />
              <StarIcon filled={true} />
              <StarIcon filled={true} />
              <StarIcon filled={true} />
              <StarIcon filled={true} />
            </div>
          </div>

          <p className="mt-3 text-neutral-700 text-[15px] leading-7">
            در کل خوبه ولی اگه یکم بیشتر هزینه کنید جنس بهتری گیرتون میاد.
          </p>

          <div className="mt-2 flex items-center gap-4 text-sm text-neutral-500">
            <button className="hover:text-neutral-700">پاسخ</button>
            <div className="flex items-center gap-1">
              <span>0</span>
              <ThumbsDownIcon />
            </div>
            <div className="flex items-center gap-1">
              <span>3</span>
              <ThumbsUpIcon />
            </div>
          </div>
        </div>

        {/* نظر ۳ */}
        <div className="py-5">
          <div className="flex flex-col items-start gap-1">
            <div className="text-sm text-neutral-800">
              <span className="font-bold">سارا بهرامی</span>
              <span className="text-neutral-400"> . دیروز</span>
            </div>
            <div className="flex gap-0.5">
              <StarIcon filled={false} />
              <StarIcon filled={true} />
              <StarIcon filled={true} />
              <StarIcon filled={true} />
              <StarIcon filled={true} />
            </div>
          </div>

          <p className="mt-3 text-neutral-700 text-[15px] leading-7">
            برای کوه های بلند و مسافت های طولانی مناسبه؟
          </p>

          <div className="mt-2 flex items-center gap-4 text-sm text-neutral-500">
            <button className="hover:text-neutral-700">پاسخ</button>
            <div className="flex items-center gap-1">
              <span>0</span>
              <ThumbsDownIcon />
            </div>
            <div className="flex items-center gap-1">
              <span>0</span>
              <ThumbsUpIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}