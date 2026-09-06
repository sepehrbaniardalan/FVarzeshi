import React from 'react'
import Cards from '../cards'
export default function FooterBEnd() {
  return (
    <div>
      <div className='w-full flex justify-between items-center pb-4'>
        <h3 className='text-xl '>بیشتر</h3>
        <h3 dir='rtl' className='text-4xl font-semibold pb-3'>پیشنهاد ما</h3>
      </div>
      <div className='flex justify-center gap-4'>
        <Cards name="کفش کوهنوردی مردانه مدل RUNNER" price="3,980,000" img="/productSuggest/shoes.png" />
        <Cards name="کلاه محافظ دوچرخه سواری حرفه ای مدل limar" price="1,450,000" img="/productSuggest/helmet.png" />
        <Cards name="چادر صحرایی کینگ کمپ مدل MARASUSA" price="2,540,000 " img="/productSuggest/tent.png" />
        <Cards name="ست ورزشی مردانه مدل باشگاهی نایک" price="430,000 " img="/productSuggest/shirt.png" />
        <Cards name="دستکش بوکس مارک reves" price="970,000 " img="/productSuggest/gloves.png" />
      </div>
    </div>
  )
}
