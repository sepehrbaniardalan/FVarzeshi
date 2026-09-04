import React from 'react'
import Cards from '../cards'
export default function Body3() {
  return (
        <div>
          <div className=''>
            <h3 dir='rtl' className='font-semibold text-4xl  font-vazir pr-45'>پرفروش ترین محصولات</h3>
            <h3 className='text-xl pl-45 relative -top-8'>بیشتر</h3>
          </div>
          <div className='flex justify-center gap-4'>
            <Cards name="کیسه خواب کوهنوردی 1.8 متری" price="3,980,000" img="/porFProducts/479c73f2edbc0d769f641e8eaa69ddfdc32574d4.png" />
            <Cards name="عینک شنا حرفه ای مدل zx9 مردانه" price="1,450,000" img="/porFProducts/a3fe8245a642839cac782a8d5b33e3b319088101.png" />
            <Cards name="دستکش بدنسازی مخصوص بانوان" price="2,540,000 " img="/porFProducts/f2fca3d5a78becb5420f7e59aca9fc700c50f7b7.png" />
            <Cards name="ظرف غذا تفلون مخصوص کوهنوردی و سفر laken" price="430,000 " img="/porFProducts/99e2cd5577ddf56aa6e5b5dc8cb0e773f37a4f60.png" />
            <Cards name="ساک ورزشی مدل 37xlz9 جوردن" price="970,000 " img="/porFProducts/dae09e559b77da1dac5e59d9c8d54d9c1fea9118.png" />
          </div>
        </div>
  )
}
