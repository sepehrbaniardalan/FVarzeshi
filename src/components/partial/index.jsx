import React from 'react'
import { Link } from 'react-router-dom'
import toPersianNumber from '../ui/number'
import { useSelector } from 'react-redux'
export default function Layout({ children }) {
  const items = useSelector(state => state.cart.items);
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <header className='w-full flex flex-row-reverse justify-center items-center gap-190  p-5 shadow-2xl h-30  '>
        <nav className='flex flex-row-reverse justify-center items-center gap-10 '>
          <svg width="74" height="78" viewBox="0 0 74 78" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 77.4688C15.2573 57.1632 29.091 48.331 65.3953 38.1562L71.5907 51.7123H63.6744L74 77.4688H59.8884L49.907 54.7624C34.1538 61.38 27.9318 66.0585 15.8326 77.4688H0Z" fill="#F0C400" />
            <path d="M15.0312 55.5L43.4216 0L58.9688 33.9167C40.117 39.4793 30.6227 44.4146 15.0312 55.5Z" fill="black" />
          </svg>
          <Link className='font-extralight text-[28px] text-[#000000CC]' to="/">صفحه اصلی</Link>
          <Link className='font-extralight text-[28px] text-[#000000CC]' to="/products">محصولات</Link>
          <Link className='font-extralight text-[28px] text-[#000000CC]' to="/sale">فروش ویژه</Link>
          <Link className='font-extralight text-[28px] text-[#000000CC]' to="/about">درباره ما</Link>

        </nav>
        <div className="flex justify-center items-center flex-row-reverse gap-10 ">
          <div className='flex gap-5 justify-center items-center border-2 border-[#F0C400]  rounded-[10px] p-3'>
            <Link className='text-[24px]' to="/login">ورود / ثبت نام</Link>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 26.25V23.75H23.75V6.25H15V3.75H23.75C24.4375 3.75 25.0263 3.995 25.5163 4.485C26.0063 4.975 26.2508 5.56333 26.25 6.25V23.75C26.25 24.4375 26.0054 25.0263 25.5163 25.5163C25.0271 26.0063 24.4383 26.2508 23.75 26.25H15ZM12.5 21.25L10.7812 19.4375L13.9688 16.25H3.75V13.75H13.9688L10.7812 10.5625L12.5 8.75L18.75 15L12.5 21.25Z" fill="black" />
            </svg>
          </div>
          <div className='relative flex flex-col bottom-2'>
            <p className='rounded-full  size-5 left-8 bottom-1 z-10  bg-[#F0C400] relative flex justify-center items-center'>{toPersianNumber(items.length)}</p>
            <Link to="/sabadKharid" className='absolute'>
              <svg className='absolute' width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.3333 33.3333C31.0208 33.3333 29.1667 35.1875 29.1667 37.5C29.1667 38.6051 29.6057 39.6649 30.3871 40.4463C31.1685 41.2277 32.2283 41.6667 33.3333 41.6667C34.4384 41.6667 35.4982 41.2277 36.2796 40.4463C37.061 39.6649 37.5 38.6051 37.5 37.5C37.5 36.3949 37.061 35.3351 36.2796 34.5537C35.4982 33.7723 34.4384 33.3333 33.3333 33.3333ZM0 0V4.16667H4.16667L11.6667 19.9792L8.83333 25.0833C8.52083 25.6667 8.33333 26.3542 8.33333 27.0833C8.33333 28.1884 8.77232 29.2482 9.55372 30.0296C10.3351 30.811 11.3949 31.25 12.5 31.25H37.5V27.0833H13.375C13.2369 27.0833 13.1044 27.0285 13.0067 26.9308C12.909 26.8331 12.8542 26.7006 12.8542 26.5625C12.8542 26.4583 12.875 26.375 12.9167 26.3125L14.7917 22.9167H30.3125C31.875 22.9167 33.25 22.0417 33.9583 20.7708L41.4167 7.29167C41.5625 6.95833 41.6667 6.60417 41.6667 6.25C41.6667 5.69747 41.4472 5.16756 41.0565 4.77686C40.6658 4.38616 40.1359 4.16667 39.5833 4.16667H8.77083L6.8125 0M12.5 33.3333C10.1875 33.3333 8.33333 35.1875 8.33333 37.5C8.33333 38.6051 8.77232 39.6649 9.55372 40.4463C10.3351 41.2277 11.3949 41.6667 12.5 41.6667C13.6051 41.6667 14.6649 41.2277 15.4463 40.4463C16.2277 39.6649 16.6667 38.6051 16.6667 37.5C16.6667 36.3949 16.2277 35.3351 15.4463 34.5537C14.6649 33.7723 13.6051 33.3333 12.5 33.3333Z" fill="black" fill-opacity="0.9" />
              </svg>
            </Link>
          </div>
        </div>
      </header >
      {children}
    </div >
  )
}
