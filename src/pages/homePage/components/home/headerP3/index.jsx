import React from 'react'
import Cards from '../cards'
export default function HeaderP3() {
  return (
    <div className='mt-30'>
        <h2 dir='rtl' className='font-semibold text-4xl  font-vazir pr-45'>جدیدترین محصولات</h2>
        <h3 className='text-xl pl-45 relative -top-8'>بیشتر</h3>
        <div className='flex justify-center gap-4'>
                <Cards name="طناب ورزشی 1.5 متری مدل 023" price="98,000" img="/productNew/rope.png" />
                <Cards name="کلاه محافظ دوچرخه سواری حرفه ای مدل limar" price="1,450,000" img="/productNew/helmet.png" />
                <Cards name="کفش کوهنوردی مردانه مدل RUNNER" price="540,000" img="/productNew/shoes.jpg" />
                <Cards name="ساک ورزشی مدل 90" price="700,000" img="/productNew/bag.png" />
                <Cards name="شیکر بدنسازی مدل pro0097 سفید" price="350,000" img="/productNew/shaker.png" />
              </div>
    </div>

  )
}
